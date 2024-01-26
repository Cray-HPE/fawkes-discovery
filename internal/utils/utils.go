package utils

import (
	"context"
	"discovery/internal/globaldata"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func OpenDBconn(mongoserver string) *mongo.Client {
	// This commented block logs actions taken on collections.
	// It's very verbose.
	// monitor := &event.CommandMonitor{
	// 	Started: func(_ context.Context, e *event.CommandStartedEvent) {
	// 		fmt.Println(e.Command)
	// 	},
	// 	Succeeded: func(_ context.Context, e *event.CommandSucceededEvent) {
	// 		fmt.Println(e.Reply)
	// 	},
	// }

	clientOptions := options.Client().ApplyURI("mongodb://" + mongoserver)
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}
	log.Print("MongoDB connection good.")
	return client
}

func CloseDBconn(dbClient *mongo.Client) {
	err := dbClient.Disconnect(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Disconnected from MongoDB.")
}

func GetMachineByFilter(disco globaldata.Discovery) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		query := c.Request.URL.Query() // incoming query
		projection := bson.D{}         // will contain the fields the user wants to see
		filter := bson.D{}             // will contain the field=value the user wants to search for
		count := false                 // default to returning entire document vs. quantity
		qfields := false               // default to returning entire document vs. fields queried

		if query["count"] != nil {
			count = true // user wants a count of documents
		}

		if query["qfields"] != nil {
			qfields = true // user wants to see only specific fields
		}

		for filterK, filterV := range query { // loop over user supplied query
			if filterK == "qfields" || filterK == "count" { // skip operators
				continue
			} else if filterK == "serial" {
				filterK = "_id" // helper to allow users to say "serial" vs. "_id"
			}

			filterValue := filterV[0] // we only care about the first value in the query

			if qfields {
				projection = append(projection, bson.E{Key: filterK, Value: 1}) // define the returned fields
			}

			if filterValue != "" { // set up our filter with provided value (ex. totalRamGB=256)
				intvalue, converr := strconv.Atoi(filterValue) // if the value can be converted to int, convert it

				if converr == nil {
					filter = append(filter, bson.E{Key: filterK, Value: intvalue})
				} else {
					filter = append(filter, bson.E{Key: filterK, Value: filterValue})
				}
			}
		}
		collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection) // define database/collection

		opts := options.Find().SetProjection(projection) // mongo Find options (provide projection)

		cursor, err := collection.Find(context.Background(), filter, opts) // run mongo Find query
		if err != nil {
			log.Println(err)
		}

		var results []bson.M
		if err = cursor.All(context.Background(), &results); err != nil { // dump documents into unordered primitive.M
			c.JSON(404, gin.H{"message": "No nodes found."})
			log.Println(err)
		}
		if count {
			c.IndentedJSON(http.StatusOK, len(results)) // prints count of documents if count=true
		} else {
			c.IndentedJSON(http.StatusOK, results) // prints documents (complete or partial doc is toggled with qfields)
		}

	}
	return gin.HandlerFunc(fn)
}

func PostMachine(disco globaldata.Discovery) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		// body is the whole incoming json blob
		body, _ := io.ReadAll(c.Request.Body)
		collectionOrig := disco.Dbclient.Database(disco.Database).Collection(disco.CollectionOrig)

		currentTime := time.Now().UnixMilli()

		// unmarshal json to go map
		var newdoc map[string]interface{}
		_ = json.Unmarshal([]byte(body), &newdoc)

		// make the "_id" field the incoming nodes system.serial number
		filter := bson.D{{Key: "_id", Value: newdoc["_id"]}}

		// search for an existing document. If one doesn't exist, create it.
		var previousdoc map[string]interface{}
		finddberr := collectionOrig.FindOne(context.Background(), filter).Decode(&previousdoc)

		// send errors to user over http and write to local console log
		if finddberr != nil {
			if finddberr.Error() != "mongo: no documents in result" {
				c.JSON(400, gin.H{"message": finddberr})
				log.Println(finddberr)
			}
		}

		// create document birth and modified fields
		if previousdoc["_birth"] != nil {
			newdoc["_birth"] = previousdoc["_birth"]
		} else {
			newdoc["_birth"] = currentTime
		}
		newdoc["_modify"] = currentTime

		upsert := true
		opts := options.FindOneAndReplaceOptions{Upsert: &upsert}

		// write to the original documents collection (not the collection that includes classifiers)
		replacedbbakerr := collectionOrig.FindOneAndReplace(context.Background(), filter, newdoc, &opts).Decode(&previousdoc)

		// send errors to user over http and write to local console log
		if replacedbbakerr != nil {
			if replacedbbakerr.Error() != "mongo: no documents in result" {
				c.JSON(500, gin.H{"message": replacedbbakerr})
				log.Println(replacedbbakerr)
			}
		}
		// classify the incoming node only (not the entire collection)
		Classify(disco, newdoc["_id"].(string))

	}
	return gin.HandlerFunc(fn)
}

func Classify(disco globaldata.Discovery, id string) {
	log.Println("Classifying nodes.")

	var aggpipeline, matchWithID []map[string]interface{}
	var aggerr error

	// connect to the original documents collection and working collection
	collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection)
	collectionOrig := disco.Dbclient.Database(disco.Database).Collection(disco.CollectionOrig)

	if id == "" {
		// set up aggregation pipeline to act on entire collection
		aggpipeline = []map[string]interface{}{
			{"$out": disco.Collection},
		}
	} else {
		// set up aggregation pipeline to act on one document/node
		aggpipeline = []map[string]interface{}{
			{"$match": map[string]string{"_id": id}},
			{"$merge": map[string]string{"into": "discovery", "on": "_id", "whenMatched": "merge"}},
		}
	}
	// execute the pipeline (copies one document or whole collection to new collection)
	// does not execute classifiers
	_, aggerr = collectionOrig.Aggregate(context.Background(), aggpipeline)

	if aggerr != nil {
		log.Println(aggerr)
	}

	// Parse mongo queries file
	querymap := LoadNodeClasses(disco)
	var results []bson.M

	// loop over classifiers and execute them on entire collection or single document/node
	for key, mpipeline := range querymap {
		var cursor *mongo.Cursor
		var err error

		if id == "" {
			// pipeline runs on entire collection
			cursor, err = collection.Aggregate(context.Background(), querymap[key])
		} else {
			// create $match object and insert it as the first step in the pipeline
			matchWithID = []map[string]interface{}{
				{"$match": map[string]string{"_id": id}},
			}
			// append the classifiers to the pipeline with "_id" $match
			matchWithID = append(matchWithID, mpipeline...)

			// runs on a single document/node
			cursor, err = collection.Aggregate(context.Background(), matchWithID)
		}

		if err != nil {
			log.Println("Mongo query error in: ", disco.Classfile)
			log.Println(err)
			return
		}
		// "results" should be empty. The classification pipeline does not return documents to the user.
		cursor.All(context.Background(), &results)
	}

	log.Println("Classifying nodes complete.")
}

func LoadNodeClasses(disco globaldata.Discovery) map[string][]map[string]interface{} {
	// open class file
	jsonQueriesFile, queryerr := os.Open(disco.Classfile)

	if queryerr != nil {
		log.Println(queryerr)
	}
	defer jsonQueriesFile.Close()

	jsonQueries, _ := io.ReadAll(jsonQueriesFile)
	var querymap map[string][]map[string]interface{}

	// slurp all classifiers from file into map
	err := json.Unmarshal([]byte(jsonQueries), &querymap)

	if err != nil {
		log.Println("json syntax error in: ", disco.Classfile)
		log.Println(err)
	}
	return querymap
}

func WatchClassfile(w *fsnotify.Watcher, disco globaldata.Discovery) {
	var eventTime time.Time

	for {
		select {
		case err, ok := <-w.Errors:
			if !ok {
				return
			}
			log.Println("ERROR: ", err)

		case e, ok := <-w.Events:
			if !ok {
				return
			}

			if e.Name == disco.Classfile {
				if e.Has(fsnotify.Write) || e.Has(fsnotify.Create) {
					sinceEventTime := time.Since(eventTime).Milliseconds()

					if sinceEventTime >= 500 {
						log.Println(e)
						// classify entire collection
						Classify(disco, "")
						eventTime = time.Now()
					}
				}
			}
		}
	}
}

package utils

import (
	"context"
	"discovery/internal/globaldata"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func OpenDBconn(mongoserver string) *mongo.Client {
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

// func GetMachines(dbClient *mongo.Client, database string, collection string) gin.HandlerFunc {
func GetMachines(disco globaldata.Discovery) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection)

		cursor, err := collection.Find(context.Background(), bson.M{})

		if err != nil {
			log.Println(err)
		}

		var records []bson.M
		if err = cursor.All(context.Background(), &records); err != nil {
			c.JSON(404, gin.H{"message": "No records found."})
			log.Print(err)
		}

		c.IndentedJSON(http.StatusOK, records)
		//ClassifyMachine(collection)
	}

	return gin.HandlerFunc(fn)
}

func GetMachineByID(disco globaldata.Discovery) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		query := c.Request.URL.Query()

		collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection)

		filter := bson.D{{Key: "_id", Value: query["serial"][0]}}

		var result bson.M
		err := collection.FindOne(context.Background(), filter).Decode(&result)
		if err != nil {
			c.JSON(404, gin.H{"message": "Machine not found."})
		}
		c.IndentedJSON(http.StatusOK, result)

		ClassifyMachine(disco)
	}
	return gin.HandlerFunc(fn)
}

// func PostMachine(dbClient *mongo.Client, database string, collection string) gin.HandlerFunc {
func PostMachine(disco globaldata.Discovery) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		body, _ := io.ReadAll(c.Request.Body)
		collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection)

		currentTime := time.Now().Unix()

		var newdoc map[string]interface{}
		_ = json.Unmarshal([]byte(body), &newdoc)

		filter := bson.D{{Key: "_id", Value: newdoc["_id"]}}

		var previousdoc map[string]interface{}
		finddberr := collection.FindOne(context.Background(), filter).Decode(&previousdoc)

		if finddberr != nil {
			if finddberr.Error() != "mongo: no documents in result" {
				c.JSON(400, gin.H{"message": finddberr})
				log.Println(finddberr)
			}
		}

		if previousdoc["_birth"] != nil {
			newdoc["_birth"] = previousdoc["_birth"]
		} else {
			newdoc["_birth"] = currentTime
		}
		newdoc["_modify"] = currentTime

		upsert := true
		opts := options.FindOneAndReplaceOptions{Upsert: &upsert}
		replacedberr := collection.FindOneAndReplace(context.Background(), filter, newdoc, &opts).Decode(&previousdoc)

		if replacedberr != nil {
			if replacedberr.Error() != "mongo: no documents in result" {
				c.JSON(500, gin.H{"message": replacedberr})
				log.Println(replacedberr)
			}
		}

		ClassifyMachine(disco)

	}
	return gin.HandlerFunc(fn)
}

func ClassifyMachine(disco globaldata.Discovery) {
	collection := disco.Dbclient.Database(disco.Database).Collection(disco.Collection)
	// Parse mongo queries file
	querymap := LoadNodeClasses(disco)
	var results []bson.M

	for class := range querymap {
		cursor, err := collection.Aggregate(context.Background(), querymap[class])

		if err != nil {
			panic(err)
		}
		cursor.All(context.TODO(), &results)
	}
}

func LoadNodeClasses(disco globaldata.Discovery) map[string]interface{} {
	time.Sleep(100 * time.Millisecond)
	jsonQueriesFile, queryerr := os.Open(disco.Classfile)
	if queryerr != nil {
		log.Println("HERE")
		log.Println(queryerr)
	}
	jsonQueries, _ := io.ReadAll(jsonQueriesFile)

	var querymap map[string]interface{}
	err := json.Unmarshal([]byte(jsonQueries), &querymap)
	if err != nil {
		log.Fatal(err)
	}

	return querymap
}

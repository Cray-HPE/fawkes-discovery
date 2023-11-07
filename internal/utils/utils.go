package utils

import (
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func OpenDBconn(mongoserver string) *mongo.Client {
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

func GetMachines(dbClient *mongo.Client, database string, collection string) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		collection := dbClient.Database(database).Collection(collection)
		cursor, err := collection.Find(context.Background(), bson.M{})

		var records []bson.M
		if err = cursor.All(context.Background(), &records); err != nil {
			c.JSON(404, gin.H{"message": "No records found."})
			log.Print(err)
		}

		c.IndentedJSON(http.StatusOK, records)
	}

	return gin.HandlerFunc(fn)
}

func GetMachineByID(dbClient *mongo.Client, database string, collection string) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		// Ex. curl -s http://localhost:8080/MXL12353X4
		// id = MXL12353X4
		id := c.Param("id")

		collection := dbClient.Database(database).Collection(collection)

		filter := bson.D{{Key: "_id", Value: id}}

		var result bson.M
		err := collection.FindOne(context.Background(), filter).Decode(&result)
		if err != nil {
			c.JSON(404, gin.H{"message": "Machine not found."})
		}
		c.IndentedJSON(http.StatusOK, result)
	}

	return gin.HandlerFunc(fn)
}

func PostMachine(dbClient *mongo.Client, database string, collection string) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		body, _ := io.ReadAll(c.Request.Body)

		var bdoc map[string]interface{}
		err := json.Unmarshal([]byte(body), &bdoc)

		if err != nil {
			c.JSON(400, gin.H{"message": err})
			log.Println(err)
		}

		filter := bson.D{{"_id", bdoc["_id"]}}
		opts := options.FindOneAndReplace().SetUpsert(true)
		collection := dbClient.Database(database).Collection(collection)
		var previousDoc map[string]interface{}
		dberr := collection.FindOneAndReplace(context.Background(), filter, bdoc, opts).Decode(&previousDoc)

		if dberr != nil {
			if dberr.Error() != "mongo: no documents in result" {
				c.JSON(500, gin.H{"message": dberr})
				log.Println(dberr)
			}
		}
	}

	return gin.HandlerFunc(fn)
}

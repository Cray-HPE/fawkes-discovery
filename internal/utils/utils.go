package utils

import (
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"time"

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
		collection := dbClient.Database(database).Collection(collection)
		currentTime := time.Now().Unix()

		var newDoc map[string]interface{}
		_ = json.Unmarshal([]byte(body), &newDoc)

		newDoc["_id"] = newDoc["serial"]
		filter := bson.D{{"_id", newDoc["_id"]}}

		var previousDoc map[string]interface{}
		finddberr := collection.FindOne(context.Background(), filter).Decode(&previousDoc)

		if finddberr != nil {
			if finddberr.Error() != "mongo: no documents in result" {
				c.JSON(400, gin.H{"message": finddberr})
				log.Println(finddberr)
			}
		}

		if previousDoc["creationDate"] != nil {
			newDoc["creationDate"] = previousDoc["creationDate"]
		} else {
			newDoc["creationDate"] = currentTime
		}
		newDoc["modifiedDate"] = currentTime

		replacedberr := collection.FindOneAndReplace(context.Background(), filter, newDoc).Decode(&previousDoc)

		if replacedberr != nil {
			if replacedberr.Error() != "mongo: no documents in result" {
				c.JSON(500, gin.H{"message": replacedberr})
				log.Println(replacedberr)
			}
		}
	}

	return gin.HandlerFunc(fn)
}

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
	"go.mongodb.org/mongo-driver/bson/primitive"
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

		if err != nil {
			log.Println(err)
		}

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
		query := c.Request.URL.Query()

		collection := dbClient.Database(database).Collection(collection)

		filter := bson.D{{Key: "_id", Value: query["serial"][0]}}

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

		var newdoc map[string]interface{}
		_ = json.Unmarshal([]byte(body), &newdoc)

		filter := bson.D{{"_id", newdoc["_id"]}}

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

		ClassifyMachine(collection)

	}
	return gin.HandlerFunc(fn)
}

func ClassifyMachine(collection *mongo.Collection) []bson.M {
	hypervisor_disks := 2
	storage_disks := 6

	pipeline := mongo.Pipeline{
		{
			{
				Key:   "$unwind",
				Value: "$storage",
			},
		},
		{
			{
				Key: "$match",
				Value: bson.D{
					{
						Key: "$or",
						Value: bson.A{
							bson.D{
								{
									Key:   "storage.id",
									Value: "nvme",
								},
								{
									Key:   "storage.class",
									Value: "storage",
								},
							},
							bson.D{
								{
									Key:   "storage.id",
									Value: primitive.Regex{Pattern: "^sata.*"},
								},
								{
									Key:   "storage.class",
									Value: "storage",
								},
							},
						},
					},
				},
			},
		},
		{
			{
				Key: "$group",
				Value: bson.D{
					{
						Key:   "_id",
						Value: "$_id",
					},
					{
						Key: "storage",
						Value: bson.D{
							{
								Key:   "$addToSet",
								Value: "$storage",
							},
						},
					},
				},
			},
		},
		{
			{
				Key: "$project",
				Value: bson.D{
					{
						Key: "diskcount",
						Value: bson.D{
							{
								Key:   "$size",
								Value: "$storage",
							},
						},
					},
				},
			},
		},
		{
			{
				Key: "$project",
				Value: bson.D{
					{
						Key: "node_class",
						Value: bson.D{
							{
								Key: "$switch",
								Value: bson.D{
									{
										Key: "branches",
										Value: bson.A{
											bson.D{
												{
													Key: "case",
													Value: bson.D{
														{
															Key: "$lte",
															Value: bson.A{
																"$diskcount",
																hypervisor_disks,
															},
														},
													},
												},
												{
													Key:   "then",
													Value: "hypervisor",
												},
											},
											bson.D{
												{
													Key: "case",
													Value: bson.D{
														{
															Key: "$gte",
															Value: bson.A{
																"$diskcount",
																storage_disks,
															},
														},
													},
												},
												{
													Key:   "then",
													Value: "storage",
												},
											},
										},
									},
									{
										Key:   "default",
										Value: "",
									},
								},
							},
						},
					},
				},
			},
		},
		{
			{
				Key: "$merge",
				Value: bson.D{
					{
						Key:   "into",
						Value: "lshw",
					},
					{
						Key:   "on",
						Value: "_id",
					},
					{
						Key:   "whenMatched",
						Value: "merge",
					},
				},
			},
		},
	}

	cursor, err := collection.Aggregate(context.Background(), pipeline)

	if err != nil {
		panic(err)
	}

	var results []bson.M
	cursor.All(context.TODO(), &results)

	return results
}

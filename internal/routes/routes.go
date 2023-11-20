package routes

import (
	"discovery/internal/utils"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func Routes(router *gin.Engine, bind string, dbClient *mongo.Client, database string, collection string) {
	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"message": "Route not found"})
	})

	router.GET("/", utils.GetMachines(dbClient, database, collection))
	//router.GET("/:id", utils.GetMachineByID(dbClient, database, collection))
	router.GET("/class", utils.GetMachineByID(dbClient, database, collection))
	router.POST("/", utils.PostMachine(dbClient, database, collection))
	router.Run(bind)
}

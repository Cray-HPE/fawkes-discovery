package routes

import (
	"discovery/internal/globaldata"
	"discovery/internal/utils"

	"github.com/gin-gonic/gin"
)

// func Routes(router *gin.Engine, bind string, dbClient *mongo.Client, database string, collection string) {
func Routes(disco globaldata.Discovery) {
	disco.Router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"message": "Route not found"})
	})

	disco.Router.GET("/", utils.GetMachines(disco))
	//router.GET("/:id", utils.GetMachineByID(dbClient, database, collection))
	disco.Router.GET("/class", utils.GetMachineByID(disco))
	disco.Router.POST("/", utils.PostMachine(disco))
	disco.Router.Run(disco.Bind)
}

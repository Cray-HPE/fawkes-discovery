package routes

import (
	"discovery/internal/globaldata"
	"discovery/internal/utils"

	"github.com/gin-gonic/gin"
)

func Routes(disco globaldata.Discovery) {
	disco.Router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"message": "Route not found"})
	})

	disco.Router.GET("/", utils.GetMachines(disco))
	disco.Router.GET("/filter", utils.GetMachineByFilter(disco))
	disco.Router.POST("/", utils.PostMachine(disco))
	disco.Router.Run(disco.Bind)
}

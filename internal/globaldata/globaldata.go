package globaldata

import (
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

type Discovery struct {
	Bind           string
	Mongoserver    string
	Database       string
	Collection     string
	CollectionOrig string
	Classfile      string
	Dbclient       *mongo.Client
	Router         *gin.Engine
}

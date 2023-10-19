package main

import (
	"log"
	"os"
	"os/signal"

	"discovery/internal/routes"
	"discovery/internal/utils"

	"github.com/gin-gonic/gin"
	flag "github.com/spf13/pflag"
	"github.com/spf13/viper"
)

func main() {
	// Read yaml config
	config := viper.New()
	config.SetConfigType("yaml")
	config.SetConfigName("fawkes-discovery")
	config.AddConfigPath("/etc/fawkes-discovery")
	config.AddConfigPath("$HOME/.fawkes-discovery")
	config.AddConfigPath(".")
	err := config.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}
	config.WatchConfig()

	// Parse cli flags
	flag.StringP("bind", "b", ":8080", "Bind address")
	flag.StringP("mongoserver", "s", "", "Mongo ip:port")
	flag.StringP("database", "d", "", "Mongo database to use")
	flag.StringP("collection", "c", "", "Mongo collection to use")
	flag.Parse()
	config.BindPFlags(flag.CommandLine)

	// Set up variables from config/flags
	bind := config.GetString("bind")
	mongoserver := config.GetString("mongoserver")
	database := config.GetString("database")
	collection := config.GetString("collection")

	// Connect to database
	dbClient := utils.OpenDBconn(mongoserver)

	// Exit cleanly on SIGINT / Ctrl-c
	go func() {
		sigchan := make(chan os.Signal)
		signal.Notify(sigchan, os.Interrupt)
		<-sigchan
		log.Println("Received SIGINT. Quitting...")
		utils.CloseDBconn(dbClient)
		os.Exit(0)
	}()

	router := gin.Default()
	routes.Routes(router, bind, dbClient, database, collection)

	utils.CloseDBconn(dbClient)
}

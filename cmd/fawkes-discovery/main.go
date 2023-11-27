package main

import (
	"log"
	"os"
	"os/signal"
	"path/filepath"

	"discovery/internal/globaldata"
	"discovery/internal/routes"
	"discovery/internal/utils"

	"github.com/fsnotify/fsnotify"
	"github.com/gin-gonic/gin"
	flag "github.com/spf13/pflag"
	"github.com/spf13/viper"
)

func main() {
	// Parse cli flags
	flag.StringP("bind", "b", ":8080", "Bind address")
	flag.StringP("mongoserver", "s", "", "Mongo ip:port")
	flag.StringP("database", "d", "", "Mongo database to use")
	flag.StringP("collection", "c", "", "Mongo collection to use")
	flag.StringP("config", "f", "", "Path to configuration directory")
	flag.StringP("class", "t", "", "Path to class file")
	flag.Parse()

	// Set and read config
	config := viper.New()
	configDefault := "/etc/fawkes-discovery/fawkes-discovery.yml"

	if flag.Lookup("config").Value.String() == "" {
		config.SetConfigFile(configDefault)
	} else {
		userConfig := flag.Lookup("config").Value.String()
		config.SetConfigFile(userConfig)
	}

	err := config.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}
	config.BindPFlags(flag.CommandLine)
	log.Println("Configuration file used: ", config.ConfigFileUsed())

	// Set up variables from config/flags
	disco := globaldata.Discovery{
		Bind:        config.GetString("bind"),
		Mongoserver: config.GetString("mongoserver"),
		Database:    config.GetString("database"),
		Collection:  config.GetString("collection"),
		Classfile:   config.GetString("class"),
		Dbclient:    utils.OpenDBconn(config.GetString("mongoserver")),
		Router:      gin.Default(),
	}

	// Gracefully handle SIGINT
	go func() {
		sigchan := make(chan os.Signal)
		signal.Notify(sigchan, os.Interrupt)
		<-sigchan
		log.Println("Received SIGINT. Quitting...")
		utils.CloseDBconn(disco.Dbclient)
		os.Exit(0)
	}()

	// Watch node class file for changes
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()
	go utils.WatchClassfile(watcher, disco)
	classfileDir := filepath.Dir(disco.Classfile)
	err = watcher.Add(classfileDir)
	if err != nil {
		log.Fatal(err)
	}

	// Classify existing machines and start listening for new connections
	utils.ClassifyMachine(disco)
	routes.Routes(disco)
	<-make(chan struct{})
}

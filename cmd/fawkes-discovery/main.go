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

	// Read yaml config
	config := viper.New()
	config.SetConfigType("yaml")
	config.SetConfigName("fawkes-discovery")
	config.AddConfigPath(flag.Lookup("config").Value.String())
	config.AddConfigPath(".")
	config.AddConfigPath("/etc/fawkes-discovery")

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

	go func() {
		sigchan := make(chan os.Signal)
		signal.Notify(sigchan, os.Interrupt)
		<-sigchan
		log.Println("Received SIGINT. Quitting...")
		utils.CloseDBconn(disco.Dbclient)
		os.Exit(0)
	}()

	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()
	go watchClassfile(watcher, disco)

	classfileDir := filepath.Dir(disco.Classfile)
	err = watcher.Add(classfileDir)
	if err != nil {
		log.Fatal(err)
	}

	routes.Routes(disco)
	<-make(chan struct{})
	utils.CloseDBconn(disco.Dbclient)
}

func watchClassfile(w *fsnotify.Watcher, disco globaldata.Discovery) {
	i := 0
	for {
		select {
		// Read from Errors.
		case err, ok := <-w.Errors:
			if !ok { // Channel was closed (i.e. Watcher.Close() was called).
				return
			}
			log.Println("ERROR: ", err)
		// Read from Events.
		case e, ok := <-w.Events:
			if !ok { // Channel was closed (i.e. Watcher.Close() was called).
				return
			}

			if e.Name == disco.Classfile {
				i++
				log.Println(i, e)
				utils.ClassifyMachine(disco)
			}
		}
	}
}

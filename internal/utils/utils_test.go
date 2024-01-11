package utils

import (
	"log"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
)

func TestOpenDBconn(t *testing.T) {
	mongoserver := "127.0.0.1:27017"

	tests := []struct {
		name    string
		server  string
		wantErr bool
	}{
		{
			name:    "Open DB connection",
			server:  mongoserver,
			wantErr: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, err := OpenDBconn(tt.server)

			if (err != nil) != tt.wantErr {
				t.Errorf("OpenDBconn() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
		})
	}
}

func TestCloseDBconn(t *testing.T) {
	client, connErr := OpenDBconn("127.0.0.1:27017")
	if connErr != nil {
		log.Fatal(connErr)
	}

	tests := []struct {
		name     string
		dbClient *mongo.Client
		wantErr  bool
	}{
		{
			name:     "Close DB connection",
			dbClient: client,
			wantErr:  false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			closeErr := CloseDBconn(tt.dbClient)

			if (closeErr != nil) != tt.wantErr {
				t.Errorf("CloseDBconn() error = %v, wantErr %v", closeErr, tt.wantErr)
				return
			}
		})
	}
}

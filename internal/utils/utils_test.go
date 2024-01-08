package utils

import (
	"reflect"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
)

func TestOpenDBconn(t *testing.T) {
	var mongoserver string
	mongoserver := "127.0.0.1:27017"

	tests := []struct {
		name    string
		args    string
		want    *mongo.Client
		wantErr bool
	}{
		{
			name: "This is a test",
			args: mongoserver,
			want: ,
			wantErr: nil
		},

	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := OpenDBconn(tt.args.mongoserver)
			if (err != nil) != tt.wantErr {
				t.Errorf("OpenDBconn() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("OpenDBconn() = %v, want %v", got, tt.want)
			}
		})
	}
}

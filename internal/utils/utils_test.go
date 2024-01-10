package utils

import (
	"testing"
)

func TestOpenDBconn(t *testing.T) {
	mongoserver := "127.0.0.1:27017"

	tests := []struct {
		name    string
		server  string
		wantErr bool
	}{
		{
			name:    "DB connection",
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

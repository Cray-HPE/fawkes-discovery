package main

import (
	"discovery/internal/ipmi"
	"encoding/json"
	"fmt"
)

type Hwdata struct {
	ipmi.BmcInfo `json:"bmc"`
}

func main() {
	hwdata := Hwdata{
		ipmi.GetBmcInfo(),
	}

	hwdatajson, err := json.Marshal(hwdata)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Printf(string(hwdatajson))
}

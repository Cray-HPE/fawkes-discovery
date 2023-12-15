package main

import (
	"discovery/internal/ipmi"
	"encoding/json"
	"fmt"
)

type Hwdata struct {
	Bmc ipmi.BmcInfo `json:"bmc"`
}

func main() {
	hwdata := Hwdata{
		Bmc: ipmi.GetBmcInfo(),
	}

	hwdatajson, err := json.Marshal(hwdata)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Printf(string(hwdatajson))
}

package main

import (
	"discovery/internal/disks"
	"discovery/internal/ipmi"
	"encoding/json"
	"fmt"
)

type Hwdata struct {
	Bmc       ipmi.BmcInfo `json:"bmc"`
	FullDisks disks.Disks  `json:"disks"`
}

func main() {
	hwdata := Hwdata{
		Bmc:       ipmi.GetBmcInfo(),
		FullDisks: disks.GetDisks(),
	}

	hwdatajson, err := json.Marshal(hwdata)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Printf(string(hwdatajson))
}

package main

import (
	"discovery/internal/disks"
	"discovery/internal/ipmi"
	"encoding/json"
	"fmt"
	"log"
)

type Hwdata struct {
	Bmc       ipmi.BmcInfo
	FullDisks disks.Disks
}

func main() {
	// gather ipmi data
	bmc := ipmi.BmcInfo{}
	laninfo := ipmi.LanConfig()
	devinfo := ipmi.DeviceInfo()

	bmc.Ipaddr = laninfo["ipaddress"]
	bmc.Macaddr = laninfo["macaddress"]
	bmc.DeviceID = devinfo["deviceID"]
	bmc.DeviceRev = devinfo["deviceRevision"]
	bmc.FwRev = devinfo["firmwareRevision"]
	bmc.IpmiVer = devinfo["ipmiVersion"]
	bmc.ManID = devinfo["manufacturerID"]
	bmc.ProdID = devinfo["productID"]

	hwdata := Hwdata{
		Bmc:       bmc,
		FullDisks: disks.GetDisks(),
	}

	hwdatajson, err := json.Marshal(hwdata)
	if err != nil {
		log.Println(err)
	}
	fmt.Printf((string(hwdatajson)))
}

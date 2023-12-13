package disks

import (
	"os"
	"path/filepath"

	"github.com/shirou/gopsutil/v3/disk"
)

type Disk struct {
	DevPath string `json:"dev"`
	ByPath  string `json:"byPath"`
	ByID    string `json:"byID"`
	Serial  string `json:"serial"`
}

type Partitions struct {
	UUID    string `json:"uuid"`
	DevPath string `json:"devpath"`
}

type Disks struct {
	Disks      []Disk       `json:"blockdevices"`
	Partitions []Partitions `json:"partitions"`
}

func GetDisks() Disks {
	byPath := "/dev/disk/by-path/"
	byPathDisks, _ := os.ReadDir(byPath)
	byID := "/dev/disk/by-id/"
	byIdDisks, _ := os.ReadDir(byID)
	byUUID := "/dev/disk/by-uuid/"
	byUUIDDisks, _ := os.ReadDir(byUUID)

	fullDisks := Disks{}

	for _, file1 := range byPathDisks {
		dname := byPath + file1.Name()              // /dev/disk/by-path/pci-0000:6e:00.0-nvme-1
		file1abs, _ := filepath.EvalSymlinks(dname) // /dev/sda
		dserial, _ := disk.SerialNumber(dname)

		singleDisk := Disk{
			DevPath: file1abs,
			ByPath:  dname,
			Serial:  dserial,
		}

		for _, file2 := range byIdDisks {
			dname := byID + file2.Name()                // /dev/disk/by-id/wwn-0x5ace42e025178ded
			file2abs, _ := filepath.EvalSymlinks(dname) // /dev/sda
			if file2abs == file1abs {
				singleDisk.ByID = dname
			}
		}
		fullDisks.Disks = append(fullDisks.Disks, singleDisk)
	}

	for _, uuid := range byUUIDDisks {
		dname := byUUID + uuid.Name()              // /dev/disk/by-uuid/6ef52745-064c-49a1-971c-40adaff21ed9
		uuidabs, _ := filepath.EvalSymlinks(dname) // /dev/sda

		singlePartition := Partitions{
			UUID:    dname,
			DevPath: uuidabs,
		}

		fullDisks.Partitions = append(fullDisks.Partitions, singlePartition)
	}

	return fullDisks
}

var seedData =
    [
        {
            "bmc": {
                "bmc": {
                    "deviceID": "19",
                    "deviceRevision": "3",
                    "firmwareRevision": "2.81",
                    "ipmiVersion": "2.0",
                    "manufacturerID": "47196 (0xB85C)",
                    "productID": "8192 (0x2000)",
                    "ipAddress": "10.254.1.7",
                    "macAddress": "94:40:c9:37:0a:2a"
                }
            },
            "bridge": [
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "100",
                    "businfo": "pci@0000:00:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:04",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:00:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:05",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.2",
                    "businfo": "pci@0000:00:01.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:06",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:00:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:03",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:00:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:01",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:00:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:02",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:00:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "isa",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCI:0000:00:14.3",
                    "description": "ISA bridge",
                    "product": "FCH LPC Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "14.3",
                    "businfo": "pci@0000:00:14.3",
                    "version": "51",
                    "width": 32,
                    "clock": 66000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "isa": true,
                        "bus_master": "bus mastering"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "101",
                    "businfo": "pci@0000:00:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "102",
                    "businfo": "pci@0000:00:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "103",
                    "businfo": "pci@0000:00:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "104",
                    "businfo": "pci@0000:00:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "105",
                    "businfo": "pci@0000:00:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "106",
                    "businfo": "pci@0000:00:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:7",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "107",
                    "businfo": "pci@0000:00:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:8",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 0",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "108",
                    "businfo": "pci@0000:00:18.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:9",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 1",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "109",
                    "businfo": "pci@0000:00:18.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:10",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 2",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10a",
                    "businfo": "pci@0000:00:18.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:11",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 3",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10b",
                    "businfo": "pci@0000:00:18.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "k10temp"
                    }
                },
                {
                    "id": "pci:12",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 4",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10c",
                    "businfo": "pci@0000:00:18.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:13",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 5",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10d",
                    "businfo": "pci@0000:00:18.5",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:14",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 6",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10e",
                    "businfo": "pci@0000:00:18.6",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:15",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 7",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10f",
                    "businfo": "pci@0000:00:18.7",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:16",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "110",
                    "businfo": "pci@0000:40:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:43",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:40:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:44",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:40:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:45",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.2",
                    "businfo": "pci@0000:40:03.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:46",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.3",
                    "businfo": "pci@0000:40:03.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:47",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.4",
                    "businfo": "pci@0000:40:03.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:41",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:40:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:42",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:40:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:17",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "111",
                    "businfo": "pci@0000:40:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:18",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "112",
                    "businfo": "pci@0000:40:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:19",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "113",
                    "businfo": "pci@0000:40:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:20",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "114",
                    "businfo": "pci@0000:40:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:21",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "115",
                    "businfo": "pci@0000:40:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:22",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "116",
                    "businfo": "pci@0000:40:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:23",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "117",
                    "businfo": "pci@0000:40:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:24",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "118",
                    "businfo": "pci@0000:80:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:85",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:80:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:86",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.4",
                    "businfo": "pci@0000:80:01.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:87",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:80:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:82",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:80:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:81",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:80:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:83",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.2",
                    "businfo": "pci@0000:80:08.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:84",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.3",
                    "businfo": "pci@0000:80:08.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:25",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "119",
                    "businfo": "pci@0000:80:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:26",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11a",
                    "businfo": "pci@0000:80:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:27",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11b",
                    "businfo": "pci@0000:80:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:28",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11c",
                    "businfo": "pci@0000:80:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:29",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11d",
                    "businfo": "pci@0000:80:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:30",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11e",
                    "businfo": "pci@0000:80:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:31",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11f",
                    "businfo": "pci@0000:80:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:32",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "120",
                    "businfo": "pci@0000:c0:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c6",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:c0:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c7",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.2",
                    "businfo": "pci@0000:c0:01.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c8",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:c0:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c4",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.4",
                    "businfo": "pci@0000:c0:03.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c5",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.5",
                    "businfo": "pci@0000:c0:03.5",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c1",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "5.2",
                    "businfo": "pci@0000:c0:05.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c2",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:c0:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:7",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c3",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:c0:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:33",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "121",
                    "businfo": "pci@0000:c0:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:34",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "122",
                    "businfo": "pci@0000:c0:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:35",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "123",
                    "businfo": "pci@0000:c0:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:36",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "124",
                    "businfo": "pci@0000:c0:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:37",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "125",
                    "businfo": "pci@0000:c0:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:38",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "126",
                    "businfo": "pci@0000:c0:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:39",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "127",
                    "businfo": "pci@0000:c0:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                }
            ],
            "bus": [
                {
                    "id": "core",
                    "class": "bus",
                    "claimed": true,
                    "handle": "DMI:0073",
                    "description": "Motherboard",
                    "product": "ProLiant DL325 Gen10 Plus",
                    "vendor": "HPE",
                    "physid": "0",
                    "serial": "PXJYK0ARHDL01K"
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:02:00.3",
                    "description": "USB controller",
                    "product": "Starship USB 3.0 Host Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.3",
                    "businfo": "pci@0000:02:00.3",
                    "version": "00",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "xhci_hcd",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "xhci": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.3.18-150300.59.87-default xhci-hcd",
                    "physid": "0",
                    "businfo": "usb@4",
                    "logicalname": "usb4",
                    "version": "5.03",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:2",
                    "description": "USB hub",
                    "product": "USB2744",
                    "vendor": "Microchip Tech",
                    "physid": "2",
                    "businfo": "usb@4:2",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "5",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.10": true
                    }
                },
                {
                    "id": "usb:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:3",
                    "description": "USB hub",
                    "product": "Hub",
                    "vendor": "Microchip Technology, Inc. (formerly SMSC)",
                    "physid": "1",
                    "businfo": "usb@4:2.1",
                    "version": "8.01",
                    "configuration": {
                        "driver": "hub",
                        "maxpower": "2mA",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usbhost:1",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:5:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.3.18-150300.59.87-default xhci-hcd",
                    "physid": "1",
                    "businfo": "usb@5",
                    "logicalname": "usb5",
                    "version": "5.03",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "10000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.10": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:5:2",
                    "description": "USB hub",
                    "product": "USB5744",
                    "vendor": "Microchip Tech",
                    "physid": "2",
                    "businfo": "usb@5:2",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "4",
                        "speed": "5000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.20": true
                    }
                },
                {
                    "id": "serial",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:00:14.0",
                    "description": "SMBus",
                    "product": "FCH SMBus Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "14",
                    "businfo": "pci@0000:00:14.0",
                    "version": "61",
                    "width": 32,
                    "clock": 66000000,
                    "configuration": {
                        "driver": "piix4_smbus",
                        "latency": "0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:42:00.3",
                    "description": "USB controller",
                    "product": "Starship USB 3.0 Host Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.3",
                    "businfo": "pci@0000:42:00.3",
                    "version": "00",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "xhci_hcd",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "xhci": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:2:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.3.18-150300.59.87-default xhci-hcd",
                    "physid": "0",
                    "businfo": "usb@2",
                    "logicalname": "usb2",
                    "version": "5.03",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:2:2",
                    "description": "USB hub",
                    "product": "USB2744",
                    "vendor": "Microchip Tech",
                    "physid": "1",
                    "businfo": "usb@2:1",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "4",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.10": true
                    }
                },
                {
                    "id": "usbhost:1",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:3:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.3.18-150300.59.87-default xhci-hcd",
                    "physid": "1",
                    "businfo": "usb@3",
                    "logicalname": "usb3",
                    "version": "5.03",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "10000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.10": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:3:2",
                    "description": "USB hub",
                    "product": "USB5744",
                    "vendor": "Microchip Tech",
                    "physid": "1",
                    "businfo": "usb@3:1",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "3",
                        "speed": "5000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.20": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.4",
                    "description": "USB controller",
                    "product": "iLO5 Virtual USB Controller",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0.4",
                    "businfo": "pci@0000:c1:00.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ehci-pci",
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "pm": "Power Management",
                        "ehci": "Enhanced Host Controller Interface (USB2)",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:1:1",
                    "product": "EHCI Host Controller",
                    "vendor": "Linux 5.3.18-150300.59.87-default ehci_hcd",
                    "physid": "1",
                    "businfo": "usb@1",
                    "logicalname": "usb1",
                    "version": "5.03",
                    "configuration": {
                        "driver": "hub",
                        "slots": "8",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                }
            ],
            "communication": [
                {
                    "id": "pnp00:02",
                    "class": "communication",
                    "claimed": true,
                    "product": "PnP device PNP0501",
                    "physid": "2",
                    "configuration": {
                        "driver": "serial"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "pnp00:03",
                    "class": "communication",
                    "claimed": true,
                    "product": "PnP device PNP0501",
                    "physid": "3",
                    "configuration": {
                        "driver": "serial"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "usb",
                    "class": "communication",
                    "disabled": true,
                    "claimed": true,
                    "handle": "USB:1:3",
                    "description": "Ethernet interface",
                    "product": "Virtual NIC",
                    "vendor": "HPE",
                    "physid": "4",
                    "businfo": "usb@1:4",
                    "logicalname": "usb0",
                    "version": "0.01",
                    "serial": "7a:cc:d6:5d:80:dc",
                    "configuration": {
                        "broadcast": "yes",
                        "driver": "cdc_eem",
                        "driverversion": "22-Aug-2005",
                        "firmware": "CDC EEM Device",
                        "link": "no",
                        "multicast": "yes",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0",
                        "ethernet": true,
                        "physical": "Physical interface"
                    }
                }
            ],
            "display": [
                {
                    "id": "display",
                    "class": "display",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.1",
                    "description": "VGA compatible controller",
                    "product": "MGA G200eH3",
                    "vendor": "Matrox Electronics Systems Ltd.",
                    "physid": "0.1",
                    "businfo": "pci@0000:c1:00.1",
                    "logicalname": "/dev/fb0",
                    "version": "02",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "depth": "32",
                        "driver": "mgag200",
                        "latency": "0",
                        "resolution": "1024,768"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "vga_controller": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "fb": "framebuffer"
                    }
                }
            ],
            "generic": [
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:00:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:00:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:01:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:01:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:01:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:01:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:02:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:02:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:02:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:02:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usb:1",
                    "class": "generic",
                    "handle": "USB:4:4",
                    "description": "Generic USB device",
                    "product": "Hub Controller",
                    "vendor": "Microchip Tech",
                    "physid": "5",
                    "businfo": "usb@4:2.5",
                    "version": "2.00",
                    "configuration": {
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.01": true
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:40:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:40:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:41:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:41:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:41:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:41:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:42:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:42:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:42:00.1",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse Cryptographic Coprocessor PSPCPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.1",
                    "businfo": "pci@0000:42:00.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ccp",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:2",
                    "class": "generic",
                    "handle": "PCI:0000:42:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:42:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usb",
                    "class": "generic",
                    "handle": "USB:2:3",
                    "description": "Generic USB device",
                    "product": "Hub Controller",
                    "vendor": "Microchip Tech",
                    "physid": "4",
                    "businfo": "usb@2:1.4",
                    "version": "2.00",
                    "configuration": {
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.01": true
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:80:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:80:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:82:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:82:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:82:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:82:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:81:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:81:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:81:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:81:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:c0:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c0:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.0",
                    "description": "System peripheral",
                    "product": "Integrated Lights-Out Standard Slave Instrumentation & System Support",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0",
                    "businfo": "pci@0000:c1:00.0",
                    "version": "07",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "hpwdt",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.2",
                    "description": "System peripheral",
                    "product": "Integrated Lights-Out Standard Management Processor Support and Messaging",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0.2",
                    "businfo": "pci@0000:c1:00.2",
                    "version": "07",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "hpilo",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:c2:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:c2:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:c2:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c2:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:c3:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:c3:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "handle": "PCI:0000:c3:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c3:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "cap_list": "PCI capabilities listing"
                    }
                }
            ],
            "input": [
                {
                    "id": "input:0",
                    "class": "input",
                    "claimed": true,
                    "product": "Power Button",
                    "physid": "3",
                    "logicalname": [
                        "input0",
                        "/dev/input/event0"
                    ],
                    "capabilities": {
                        "platform": true
                    }
                },
                {
                    "id": "input:1",
                    "class": "input",
                    "claimed": true,
                    "product": "Power Button",
                    "physid": "4",
                    "logicalname": [
                        "input1",
                        "/dev/input/event1"
                    ],
                    "capabilities": {
                        "platform": true
                    }
                },
                {
                    "id": "input:2",
                    "class": "input",
                    "claimed": true,
                    "product": "PC Speaker",
                    "physid": "5",
                    "logicalname": [
                        "input2",
                        "/dev/input/event2"
                    ],
                    "capabilities": {
                        "isa": "ISA bus"
                    }
                }
            ],
            "memory": [
                {
                    "id": "firmware",
                    "class": "memory",
                    "claimed": true,
                    "description": "BIOS",
                    "vendor": "HPE",
                    "physid": "4",
                    "version": "A43",
                    "date": "02/06/2023",
                    "units": "bytes",
                    "size": 65536,
                    "capacity": 67108864,
                    "capabilities": {
                        "pci": "PCI bus",
                        "pnp": "Plug-and-Play",
                        "upgrade": "BIOS EEPROM can be upgraded",
                        "shadowing": "BIOS shadowing",
                        "escd": "ESCD",
                        "cdboot": "Booting from CD-ROM/DVD",
                        "bootselect": "Selectable boot path",
                        "edd": "Enhanced Disk Drive extensions",
                        "int13floppy360": "5.25\" 360KB floppy",
                        "int13floppy1200": "5.25\" 1.2MB floppy",
                        "int13floppy720": "3.5\" 720KB floppy",
                        "int5printscreen": "Print Screen key",
                        "int9keyboard": "i8042 keyboard controller",
                        "int14serial": "INT14 serial line control",
                        "int17printer": "INT17 printer control",
                        "int10video": "INT10 CGA/Mono video",
                        "acpi": "ACPI",
                        "usb": "USB legacy emulation",
                        "biosbootspecification": "BIOS boot specification",
                        "netboot": "Function-key initiated network service boot",
                        "uefi": "UEFI specification is supported"
                    }
                },
                {
                    "id": "memory",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:000F",
                    "description": "System Memory",
                    "physid": "f",
                    "slot": "System board or motherboard",
                    "units": "bytes",
                    "size": 137438953472,
                    "capacity": 4398046511104,
                    "configuration": {
                        "errordetection": "multi-bit-ecc"
                    },
                    "capabilities": {
                        "ecc": "Multi-bit error-correcting code (ECC)"
                    }
                },
                {
                    "id": "bank:0",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001A",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "0",
                    "serial": "373B893B",
                    "slot": "PROC 1 DIMM 1",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:1",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001B",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "1",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 2",
                    "width": 64
                },
                {
                    "id": "bank:2",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001C",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "2",
                    "serial": "373B86A3",
                    "slot": "PROC 1 DIMM 3",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:3",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001D",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "3",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 4",
                    "width": 64
                },
                {
                    "id": "bank:4",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001E",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "4",
                    "serial": "373B8939",
                    "slot": "PROC 1 DIMM 5",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:5",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001F",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "5",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 6",
                    "width": 64
                },
                {
                    "id": "bank:6",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0020",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "6",
                    "serial": "373B97AE",
                    "slot": "PROC 1 DIMM 7",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:7",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0021",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "7",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 8",
                    "width": 64
                },
                {
                    "id": "bank:8",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0022",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "8",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 9",
                    "width": 64
                },
                {
                    "id": "bank:9",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0023",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "9",
                    "serial": "373B893A",
                    "slot": "PROC 1 DIMM 10",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:10",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0024",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "a",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 11",
                    "width": 64
                },
                {
                    "id": "bank:11",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0025",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "b",
                    "serial": "373B86A7",
                    "slot": "PROC 1 DIMM 12",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:12",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0026",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "c",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 13",
                    "width": 64
                },
                {
                    "id": "bank:13",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0027",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "d",
                    "serial": "373B89DD",
                    "slot": "PROC 1 DIMM 14",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:14",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0028",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "e",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 15",
                    "width": 64
                },
                {
                    "id": "bank:15",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0029",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "f",
                    "serial": "373B97AB",
                    "slot": "PROC 1 DIMM 16",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "cache:0",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:003F",
                    "description": "L1 cache",
                    "physid": "3f",
                    "slot": "L1-Cache",
                    "units": "bytes",
                    "size": 1048576,
                    "capacity": 1048576,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "1"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                },
                {
                    "id": "cache:1",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0040",
                    "description": "L2 cache",
                    "physid": "40",
                    "slot": "L2-Cache",
                    "units": "bytes",
                    "size": 8388608,
                    "capacity": 8388608,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "2"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                },
                {
                    "id": "cache:2",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0041",
                    "description": "L3 cache",
                    "physid": "41",
                    "slot": "L3-Cache",
                    "units": "bytes",
                    "size": 134217728,
                    "capacity": 134217728,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "3"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                }
            ],
            "multimedia": [],
            "network": [
                {
                    "id": "network:0",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:87:00.0",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0",
                    "businfo": "pci@0000:87:00.0",
                    "logicalname": "mgmt1",
                    "version": "02",
                    "serial": "14:02:ec:d9:7c:88",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "8.37.0.20 [storm 8.42.2.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "multicast": "yes",
                        "slave": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:87:00.1",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0.1",
                    "businfo": "pci@0000:87:00.1",
                    "logicalname": "sun1",
                    "version": "02",
                    "serial": "94:40:c9:5f:9a:a9",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "8.37.0.20 [storm 8.42.2.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "multicast": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:0",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:c6:00.0",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0",
                    "businfo": "pci@0000:c6:00.0",
                    "logicalname": "mgmt0",
                    "version": "02",
                    "serial": "14:02:ec:d9:7c:88",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "8.37.0.20 [storm 8.42.2.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "multicast": "yes",
                        "slave": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:c6:00.1",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0.1",
                    "businfo": "pci@0000:c6:00.1",
                    "logicalname": "sun0",
                    "version": "02",
                    "serial": "14:02:ec:d9:7c:89",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "8.37.0.20 [storm 8.42.2.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "multicast": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "autonegotiation": "Auto-negotiation"
                    }
                }
            ],
            "power": [
                {
                    "id": "power:0",
                    "class": "power",
                    "description": "Power Supply 1",
                    "product": "865408-B21",
                    "vendor": "HPE",
                    "physid": "1",
                    "serial": "5WBXK0FLLDM7NQ",
                    "units": "mWh",
                    "capacity": 500
                },
                {
                    "id": "power:1",
                    "class": "power",
                    "description": "Power Supply 2",
                    "product": "865408-B21",
                    "vendor": "HPE",
                    "physid": "2",
                    "serial": "5WBXK0FLLDME6K",
                    "units": "mWh",
                    "capacity": 500
                }
            ],
            "processor": [
                {
                    "id": "cpu",
                    "class": "processor",
                    "claimed": true,
                    "handle": "DMI:0042",
                    "description": "CPU",
                    "product": "AMD EPYC 7302P 16-Core Processor",
                    "vendor": "Advanced Micro Devices [AMD]",
                    "physid": "42",
                    "businfo": "cpu@0",
                    "version": "23.49.0",
                    "slot": "Proc 1",
                    "units": "Hz",
                    "size": 1710765000,
                    "capacity": 4100000000,
                    "width": 64,
                    "clock": 100000000,
                    "configuration": {
                        "cores": "16",
                        "enabledcores": "16",
                        "microcode": "137367637",
                        "threads": "32"
                    },
                    "capabilities": {
                        "lm": "64bits extensions (x86-64)",
                        "fpu": "mathematical co-processor",
                        "fpu_exception": "FPU exceptions reporting",
                        "wp": true,
                        "vme": "virtual mode extensions",
                        "de": "debugging extensions",
                        "pse": "page size extensions",
                        "tsc": "time stamp counter",
                        "msr": "model-specific registers",
                        "pae": "4GB+ memory addressing (Physical Address Extension)",
                        "mce": "machine check exceptions",
                        "cx8": "compare and exchange 8-byte",
                        "apic": "on-chip advanced programmable interrupt controller (APIC)",
                        "sep": "fast system calls",
                        "mtrr": "memory type range registers",
                        "pge": "page global enable",
                        "mca": "machine check architecture",
                        "cmov": "conditional move instruction",
                        "pat": "page attribute table",
                        "pse36": "36-bit page size extensions",
                        "clflush": true,
                        "mmx": "multimedia extensions (MMX)",
                        "fxsr": "fast floating point save/restore",
                        "sse": "streaming SIMD extensions (SSE)",
                        "sse2": "streaming SIMD extensions (SSE2)",
                        "ht": "HyperThreading",
                        "syscall": "fast system calls",
                        "nx": "no-execute bit (NX)",
                        "mmxext": "multimedia extensions (MMXExt)",
                        "fxsr_opt": true,
                        "pdpe1gb": true,
                        "rdtscp": true,
                        "x86-64": "64bits extensions (x86-64)",
                        "constant_tsc": true,
                        "rep_good": true,
                        "nopl": true,
                        "nonstop_tsc": true,
                        "cpuid": true,
                        "extd_apicid": true,
                        "aperfmperf": true,
                        "pni": true,
                        "pclmulqdq": true,
                        "monitor": true,
                        "ssse3": true,
                        "fma": true,
                        "cx16": true,
                        "sse4_1": true,
                        "sse4_2": true,
                        "movbe": true,
                        "popcnt": true,
                        "aes": true,
                        "xsave": true,
                        "avx": true,
                        "f16c": true,
                        "rdrand": true,
                        "lahf_lm": true,
                        "cmp_legacy": true,
                        "svm": true,
                        "extapic": true,
                        "cr8_legacy": true,
                        "abm": true,
                        "sse4a": true,
                        "misalignsse": true,
                        "3dnowprefetch": true,
                        "osvw": true,
                        "ibs": true,
                        "skinit": true,
                        "wdt": true,
                        "tce": true,
                        "topoext": true,
                        "perfctr_core": true,
                        "perfctr_nb": true,
                        "bpext": true,
                        "perfctr_llc": true,
                        "mwaitx": true,
                        "cpb": true,
                        "cat_l3": true,
                        "cdp_l3": true,
                        "hw_pstate": true,
                        "ssbd": true,
                        "mba": true,
                        "ibrs": true,
                        "ibpb": true,
                        "stibp": true,
                        "vmmcall": true,
                        "fsgsbase": true,
                        "bmi1": true,
                        "avx2": true,
                        "smep": true,
                        "bmi2": true,
                        "cqm": true,
                        "rdt_a": true,
                        "rdseed": true,
                        "adx": true,
                        "smap": true,
                        "clflushopt": true,
                        "clwb": true,
                        "sha_ni": true,
                        "xsaveopt": true,
                        "xsavec": true,
                        "xgetbv1": true,
                        "xsaves": true,
                        "cqm_llc": true,
                        "cqm_occup_llc": true,
                        "cqm_mbm_total": true,
                        "cqm_mbm_local": true,
                        "clzero": true,
                        "irperf": true,
                        "xsaveerptr": true,
                        "wbnoinvd": true,
                        "amd_ppin": true,
                        "arat": true,
                        "npt": true,
                        "lbrv": true,
                        "svm_lock": true,
                        "nrip_save": true,
                        "tsc_scale": true,
                        "vmcb_clean": true,
                        "flushbyasid": true,
                        "decodeassists": true,
                        "pausefilter": true,
                        "pfthreshold": true,
                        "avic": true,
                        "v_vmsave_vmload": true,
                        "vgif": true,
                        "umip": true,
                        "rdpid": true,
                        "overflow_recov": true,
                        "succor": true,
                        "smca": true,
                        "cpufreq": "CPU Frequency scaling"
                    }
                }
            ],
            "system": [
                {
                    "id": "ncn-s001",
                    "class": "system",
                    "claimed": true,
                    "handle": "DMI:0054",
                    "description": "Rack Mount Chassis",
                    "product": "ProLiant DL325 Gen10 Plus (P18606-B21)",
                    "vendor": "HPE",
                    "serial": "MXQ03000TB",
                    "width": 64,
                    "configuration": {
                        "boot": "normal",
                        "chassis": "rackmount",
                        "family": "ProLiant",
                        "sku": "P18606-B21",
                        "uuid": "36383150-3630-584d-5130-333030305442"
                    },
                    "capabilities": {
                        "smbios-3.4.0": "SMBIOS version 3.4.0",
                        "dmi-3.4.0": "DMI version 3.4.0",
                        "smp": "Symmetric Multi-Processing",
                        "vsyscall32": "32-bit processes"
                    }
                },
                {
                    "id": "pnp00:00",
                    "class": "system",
                    "claimed": true,
                    "product": "PnP device PNP0b00",
                    "physid": "0",
                    "configuration": {
                        "driver": "rtc_cmos"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "pnp00:01",
                    "class": "system",
                    "claimed": true,
                    "product": "PnP device PNP0c02",
                    "physid": "1",
                    "configuration": {
                        "driver": "system"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                }
            ],
            "_id": "MXQ03000TB",
            "blockdevices": [
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF015500M71P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sda",
                    "byId": [
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF015500M71P9DGN",
                        "/dev/disk/by-id/lvm-pv-uuid-0li92O-mruK-ud2P-BLEl-gEpu-ka7h-97mdrz",
                        "/dev/disk/by-id/wwn-0x55cd2e41523fe9de"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-7",
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-7.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016500TZ1P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdb",
                    "byId": [
                        "/dev/disk/by-id/wwn-0x55cd2e415242c564",
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016500TZ1P9DGN",
                        "/dev/disk/by-id/lvm-pv-uuid-GXPxCj-liiR-m6eS-KAC5-YofF-kfbu-PizIkm"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-8",
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-8.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016504831P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdc",
                    "byId": [
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016504831P9DGN",
                        "/dev/disk/by-id/lvm-pv-uuid-fSlzIS-USQI-sjII-5sEC-tm0N-NjrA-xkSiWN",
                        "/dev/disk/by-id/wwn-0x55cd2e415242e37c"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-2",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-2.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016402EB1P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdd",
                    "byId": [
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016402EB1P9DGN",
                        "/dev/disk/by-id/lvm-pv-uuid-iugHQ7-UpTF-3rAF-lhLc-1CBr-wGtn-m6bLQ0",
                        "/dev/disk/by-id/wwn-0x55cd2e415242d14c"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-1.0",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-1"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016500TV1P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sde",
                    "byId": [
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016500TV1P9DGN",
                        "/dev/disk/by-id/wwn-0x55cd2e415242c560",
                        "/dev/disk/by-id/lvm-pv-uuid-Jo9Rkw-E4HF-qhHc-dGo8-IGP3-vssC-GRHnB3"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-3",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-3.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016501131P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdf",
                    "byId": [
                        "/dev/disk/by-id/wwn-0x55cd2e415242d6b9",
                        "/dev/disk/by-id/lvm-pv-uuid-fiXiDn-ujBH-yzZX-Qmp6-RXVP-0AXg-UifKYt",
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016501131P9DGN"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-4.0",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-4"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "NJ05NA019I1506408",
                    "size": 480103981056,
                    "driverPath": "/dev/sdg",
                    "byId": [
                        "/dev/disk/by-id/wwn-0x5ace42e025178d8b",
                        "/dev/disk/by-id/ata-VK000480GWTHA_NJ05NA019I1506408"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-5",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-5.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "NJ05NA019I1506407",
                    "size": 480103981056,
                    "driverPath": "/dev/sdh",
                    "byId": [
                        "/dev/disk/by-id/ata-VK000480GWTHA_NJ05NA019I1506407",
                        "/dev/disk/by-id/wwn-0x5ace42e025178d8a"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-6",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-6.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016500YB1P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdi",
                    "byId": [
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016500YB1P9DGN",
                        "/dev/disk/by-id/lvm-pv-uuid-0xpDXx-OwU0-d6vj-2ZdY-9VfG-04iN-J9wJZ8",
                        "/dev/disk/by-id/wwn-0x55cd2e415242d663"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-7",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-7.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "PHYF016500WN1P9DGN",
                    "size": 1920383410176,
                    "driverPath": "/dev/sdj",
                    "byId": [
                        "/dev/disk/by-id/lvm-pv-uuid-pLCJPp-Vpmi-Pzhi-OMKU-C7K2-9m0T-uLeGhH",
                        "/dev/disk/by-id/ata-VK001920GWTTC_PHYF016500WN1P9DGN",
                        "/dev/disk/by-id/wwn-0x55cd2e415242d62a"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-8.0",
                        "/dev/disk/by-path/pci-0000:84:00.0-ata-8"
                    ]
                }
            ]
        }
        ,
        {
            "bmc": {
                "bmc": {
                    "deviceID": "19",
                    "deviceRevision": "3",
                    "firmwareRevision": "2.44",
                    "ipmiVersion": "2.0",
                    "manufacturerID": "47196 (0xB85C)",
                    "productID": "8192 (0x2000)",
                    "ipAddress": "10.100.254.79",
                    "macAddress": "94:40:c9:37:87:32"
                }
            },
            "bridge": [
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "100",
                    "businfo": "pci@0000:00:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:07",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:00:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:08",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.2",
                    "businfo": "pci@0000:00:01.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:09",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:00:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:03",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:00:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:04",
                    "description": "PCI bridge",
                    "product": "PES12N3A 12-lane 3-Port PCI Express Switch",
                    "vendor": "Microsemi / PMC / IDT",
                    "physid": "0",
                    "businfo": "pci@0000:03:00.0",
                    "version": "0c",
                    "width": 32,
                    "clock": 33000000,
                    "capabilities": {
                        "pci": true,
                        "pciexpress": "PCI Express",
                        "pm": "Power Management",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:05",
                    "description": "PCI bridge",
                    "product": "PES12N3A 12-lane 3-Port PCI Express Switch",
                    "vendor": "Microsemi / PMC / IDT",
                    "physid": "2",
                    "businfo": "pci@0000:04:02.0",
                    "logicalname": "/dev/fb0",
                    "dev": "29:0",
                    "version": "0c",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "depth": "32",
                        "driver": "pcieport",
                        "mode": "1024x768",
                        "visual": "truecolor",
                        "xres": "1024",
                        "yres": "768"
                    },
                    "capabilities": {
                        "pci": true,
                        "pciexpress": "PCI Express",
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "fb": true
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:06",
                    "description": "PCI bridge",
                    "product": "PES12N3A 12-lane 3-Port PCI Express Switch",
                    "vendor": "Microsemi / PMC / IDT",
                    "physid": "4",
                    "businfo": "pci@0000:04:04.0",
                    "version": "0c",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pciexpress": "PCI Express",
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:01",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:00:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:02",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:00:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "isa",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCI:0000:00:14.3",
                    "description": "ISA bridge",
                    "product": "FCH LPC Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "14.3",
                    "businfo": "pci@0000:00:14.3",
                    "version": "51",
                    "width": 32,
                    "clock": 66000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "isa": true,
                        "bus_master": "bus mastering"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "101",
                    "businfo": "pci@0000:00:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "102",
                    "businfo": "pci@0000:00:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "103",
                    "businfo": "pci@0000:00:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "104",
                    "businfo": "pci@0000:00:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "105",
                    "businfo": "pci@0000:00:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "106",
                    "businfo": "pci@0000:00:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:7",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "107",
                    "businfo": "pci@0000:00:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:8",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 0",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "108",
                    "businfo": "pci@0000:00:18.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:9",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 1",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "109",
                    "businfo": "pci@0000:00:18.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:10",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 2",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10a",
                    "businfo": "pci@0000:00:18.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:11",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 3",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10b",
                    "businfo": "pci@0000:00:18.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "k10temp"
                    }
                },
                {
                    "id": "pci:12",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 4",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10c",
                    "businfo": "pci@0000:00:18.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:13",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 5",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10d",
                    "businfo": "pci@0000:00:18.5",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:14",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 6",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10e",
                    "businfo": "pci@0000:00:18.6",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:15",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:00",
                    "description": "Host bridge",
                    "product": "Starship Device 24; Function 7",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "10f",
                    "businfo": "pci@0000:00:18.7",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:16",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "110",
                    "businfo": "pci@0000:40:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:43",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:40:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:44",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:40:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:45",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.2",
                    "businfo": "pci@0000:40:03.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:46",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.3",
                    "businfo": "pci@0000:40:03.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:47",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.4",
                    "businfo": "pci@0000:40:03.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:41",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:40:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:42",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:40:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:17",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "111",
                    "businfo": "pci@0000:40:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:18",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "112",
                    "businfo": "pci@0000:40:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:19",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "113",
                    "businfo": "pci@0000:40:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:20",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "114",
                    "businfo": "pci@0000:40:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:21",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "115",
                    "businfo": "pci@0000:40:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:22",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "116",
                    "businfo": "pci@0000:40:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:23",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:40",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "117",
                    "businfo": "pci@0000:40:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:24",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "118",
                    "businfo": "pci@0000:80:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:84",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:80:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:85",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.4",
                    "businfo": "pci@0000:80:01.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:86",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.1",
                    "businfo": "pci@0000:80:03.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:82",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:80:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:81",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:80:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:83",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.3",
                    "businfo": "pci@0000:80:08.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:25",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "119",
                    "businfo": "pci@0000:80:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:26",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11a",
                    "businfo": "pci@0000:80:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:27",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11b",
                    "businfo": "pci@0000:80:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:28",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11c",
                    "businfo": "pci@0000:80:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:29",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11d",
                    "businfo": "pci@0000:80:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:30",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11e",
                    "businfo": "pci@0000:80:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:31",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:80",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "11f",
                    "businfo": "pci@0000:80:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:32",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse Root Complex",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "120",
                    "businfo": "pci@0000:c0:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:0",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c6",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.1",
                    "businfo": "pci@0000:c0:01.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:1",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c7",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.2",
                    "businfo": "pci@0000:c0:01.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:2",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c8",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "1.3",
                    "businfo": "pci@0000:c0:01.3",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:3",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c4",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.4",
                    "businfo": "pci@0000:c0:03.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:4",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c5",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "3.5",
                    "businfo": "pci@0000:c0:03.5",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:5",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c1",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse GPP Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "5.2",
                    "businfo": "pci@0000:c0:05.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:6",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c2",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "7.1",
                    "businfo": "pci@0000:c0:07.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:7",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c3",
                    "description": "PCI bridge",
                    "product": "Starship/Matisse Internal PCIe GPP Bridge 0 to bus[E:B]",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "8.1",
                    "businfo": "pci@0000:c0:08.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "pcieport"
                    },
                    "capabilities": {
                        "pci": true,
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "normal_decode": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "pci:33",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "121",
                    "businfo": "pci@0000:c0:01.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:34",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "122",
                    "businfo": "pci@0000:c0:02.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:35",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "123",
                    "businfo": "pci@0000:c0:03.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:36",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "124",
                    "businfo": "pci@0000:c0:04.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:37",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "125",
                    "businfo": "pci@0000:c0:05.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:38",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "126",
                    "businfo": "pci@0000:c0:07.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                },
                {
                    "id": "pci:39",
                    "class": "bridge",
                    "claimed": true,
                    "handle": "PCIBUS:0000:c0",
                    "description": "Host bridge",
                    "product": "Starship/Matisse PCIe Dummy Host Bridge",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "127",
                    "businfo": "pci@0000:c0:08.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000
                }
            ],
            "bus": [
                {
                    "id": "core",
                    "class": "bus",
                    "claimed": true,
                    "handle": "DMI:0072",
                    "description": "Motherboard",
                    "product": "ProLiant DL325 Gen10 Plus",
                    "vendor": "HPE",
                    "physid": "0",
                    "serial": "PWWSE0ARHDK0LI"
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:02:00.3",
                    "description": "USB controller",
                    "product": "Starship USB 3.0 Host Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.3",
                    "businfo": "pci@0000:02:00.3",
                    "version": "00",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "xhci_hcd",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "xhci": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.14.21-150400.24.38.1.25440.1.PTF.1204911-default xhci-hcd",
                    "physid": "0",
                    "businfo": "usb@4",
                    "logicalname": "usb4",
                    "version": "5.14",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:2",
                    "description": "USB hub",
                    "product": "USB2744",
                    "vendor": "Microchip Tech",
                    "physid": "2",
                    "businfo": "usb@4:2",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "4",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.10": true
                    }
                },
                {
                    "id": "usb:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:4:3",
                    "description": "USB hub",
                    "product": "Hub",
                    "vendor": "Microchip Technology, Inc. (formerly SMSC)",
                    "physid": "1",
                    "businfo": "usb@4:2.1",
                    "version": "8.01",
                    "configuration": {
                        "driver": "hub",
                        "maxpower": "2mA",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usbhost:1",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:5:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.14.21-150400.24.38.1.25440.1.PTF.1204911-default xhci-hcd",
                    "physid": "1",
                    "businfo": "usb@5",
                    "logicalname": "usb5",
                    "version": "5.14",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "10000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.10": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:5:2",
                    "description": "USB hub",
                    "product": "USB5744",
                    "vendor": "Microchip Tech",
                    "physid": "2",
                    "businfo": "usb@5:2",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "3",
                        "speed": "5000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.20": true
                    }
                },
                {
                    "id": "serial",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:00:14.0",
                    "description": "SMBus",
                    "product": "FCH SMBus Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "14",
                    "businfo": "pci@0000:00:14.0",
                    "version": "61",
                    "width": 32,
                    "clock": 66000000,
                    "configuration": {
                        "driver": "piix4_smbus",
                        "latency": "0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:42:00.3",
                    "description": "USB controller",
                    "product": "Starship USB 3.0 Host Controller",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.3",
                    "businfo": "pci@0000:42:00.3",
                    "version": "00",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "xhci_hcd",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "xhci": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost:0",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:2:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.14.21-150400.24.38.1.25440.1.PTF.1204911-default xhci-hcd",
                    "physid": "0",
                    "businfo": "usb@2",
                    "logicalname": "usb2",
                    "version": "5.14",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:2:2",
                    "description": "USB hub",
                    "product": "USB2744",
                    "vendor": "Microchip Tech",
                    "physid": "1",
                    "businfo": "usb@2:1",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "4",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.10": true
                    }
                },
                {
                    "id": "usbhost:1",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:3:1",
                    "product": "xHCI Host Controller",
                    "vendor": "Linux 5.14.21-150400.24.38.1.25440.1.PTF.1204911-default xhci-hcd",
                    "physid": "1",
                    "businfo": "usb@3",
                    "logicalname": "usb3",
                    "version": "5.14",
                    "configuration": {
                        "driver": "hub",
                        "slots": "2",
                        "speed": "10000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.10": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:3:2",
                    "description": "USB hub",
                    "product": "USB5744",
                    "vendor": "Microchip Tech",
                    "physid": "1",
                    "businfo": "usb@3:1",
                    "version": "2.21",
                    "configuration": {
                        "driver": "hub",
                        "slots": "3",
                        "speed": "5000Mbit/s"
                    },
                    "capabilities": {
                        "usb-3.20": true
                    }
                },
                {
                    "id": "usb",
                    "class": "bus",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.4",
                    "description": "USB controller",
                    "product": "iLO5 Virtual USB Controller",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0.4",
                    "businfo": "pci@0000:c1:00.4",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ehci-pci",
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "pm": "Power Management",
                        "ehci": "Enhanced Host Controller Interface (USB2)",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usbhost",
                    "class": "bus",
                    "claimed": true,
                    "handle": "USB:1:1",
                    "product": "EHCI Host Controller",
                    "vendor": "Linux 5.14.21-150400.24.38.1.25440.1.PTF.1204911-default ehci_hcd",
                    "physid": "1",
                    "businfo": "usb@1",
                    "logicalname": "usb1",
                    "version": "5.14",
                    "configuration": {
                        "driver": "hub",
                        "slots": "8",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0"
                    }
                }
            ],
            "communication": [
                {
                    "id": "pnp00:02",
                    "class": "communication",
                    "claimed": true,
                    "product": "PnP device PNP0501",
                    "physid": "2",
                    "configuration": {
                        "driver": "serial"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "pnp00:03",
                    "class": "communication",
                    "claimed": true,
                    "product": "PnP device PNP0501",
                    "physid": "3",
                    "configuration": {
                        "driver": "serial"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "usb",
                    "class": "communication",
                    "disabled": true,
                    "claimed": true,
                    "handle": "USB:1:3",
                    "description": "Ethernet interface",
                    "product": "Virtual NIC",
                    "vendor": "HPE",
                    "physid": "4",
                    "businfo": "usb@1:4",
                    "logicalname": "usb0",
                    "version": "0.01",
                    "serial": "92:7a:41:14:9a:be",
                    "configuration": {
                        "broadcast": "yes",
                        "driver": "cdc_eem",
                        "driverversion": "5.14.21-150400.24.38.1.25440.1.",
                        "firmware": "CDC EEM Device",
                        "link": "no",
                        "multicast": "yes",
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.00": "USB 2.0",
                        "ethernet": true,
                        "physical": "Physical interface"
                    }
                }
            ],
            "display": [
                {
                    "id": "display",
                    "class": "display",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.1",
                    "description": "VGA compatible controller",
                    "product": "MGA G200eH3",
                    "vendor": "Matrox Electronics Systems Ltd.",
                    "physid": "0.1",
                    "businfo": "pci@0000:c1:00.1",
                    "logicalname": "/dev/fb0",
                    "version": "02",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "depth": "32",
                        "driver": "mgag200",
                        "latency": "0",
                        "resolution": "1024,768"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "vga_controller": true,
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "fb": "framebuffer"
                    }
                }
            ],
            "generic": [
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:00:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:00:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:01:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:01:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:01:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:01:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:02:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:02:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:02:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:02:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usb:1",
                    "class": "generic",
                    "handle": "USB:4:4",
                    "description": "Generic USB device",
                    "product": "Hub Controller",
                    "vendor": "Microchip Tech",
                    "physid": "4",
                    "businfo": "usb@4:2.4",
                    "version": "2.00",
                    "configuration": {
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.01": true
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:40:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:40:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:41:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:41:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:41:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:41:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:42:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:42:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:42:00.1",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse Cryptographic Coprocessor PSPCPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.1",
                    "businfo": "pci@0000:42:00.1",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ccp",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:2",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:42:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:42:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "usb",
                    "class": "generic",
                    "handle": "USB:2:3",
                    "description": "Generic USB device",
                    "product": "Hub Controller",
                    "vendor": "Microchip Tech",
                    "physid": "4",
                    "businfo": "usb@2:1.4",
                    "version": "2.00",
                    "configuration": {
                        "speed": "480Mbit/s"
                    },
                    "capabilities": {
                        "usb-2.01": true
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:80:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:80:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:82:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:82:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:82:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:82:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:81:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:81:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:81:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:81:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic",
                    "class": "generic",
                    "handle": "PCI:0000:c0:00.2",
                    "description": "IOMMU",
                    "product": "Starship/Matisse IOMMU",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c0:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "msi": "Message Signalled Interrupts",
                        "ht": "HyperTransport",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.0",
                    "description": "System peripheral",
                    "product": "Integrated Lights-Out Standard Slave Instrumentation & System Support",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0",
                    "businfo": "pci@0000:c1:00.0",
                    "version": "07",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "hpwdt",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c1:00.2",
                    "description": "System peripheral",
                    "product": "Integrated Lights-Out Standard Management Processor Support and Messaging",
                    "vendor": "Hewlett-Packard Company",
                    "physid": "0.2",
                    "businfo": "pci@0000:c1:00.2",
                    "version": "07",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "hpilo",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:c2:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse PCIe Dummy Function",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:c2:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c2:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c2:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:0",
                    "class": "generic",
                    "handle": "PCI:0000:c3:00.0",
                    "description": "Non-Essential Instrumentation",
                    "product": "Starship/Matisse Reserved SPP",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0",
                    "businfo": "pci@0000:c3:00.0",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "cap_list": "PCI capabilities listing"
                    }
                },
                {
                    "id": "generic:1",
                    "class": "generic",
                    "claimed": true,
                    "handle": "PCI:0000:c3:00.2",
                    "description": "Encryption controller",
                    "product": "Starship/Matisse PTDMA",
                    "vendor": "Advanced Micro Devices, Inc. [AMD]",
                    "physid": "0.2",
                    "businfo": "pci@0000:c3:00.2",
                    "version": "00",
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "driver": "ptdma",
                        "latency": "0"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "pciexpress": "PCI Express",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing"
                    }
                }
            ],
            "input": [
                {
                    "id": "input:0",
                    "class": "input",
                    "claimed": true,
                    "product": "Power Button",
                    "physid": "3",
                    "logicalname": [
                        "input2",
                        "/dev/input/event2"
                    ],
                    "capabilities": {
                        "platform": true
                    }
                },
                {
                    "id": "input:1",
                    "class": "input",
                    "claimed": true,
                    "product": "Power Button",
                    "physid": "4",
                    "logicalname": [
                        "input3",
                        "/dev/input/event3"
                    ],
                    "capabilities": {
                        "platform": true
                    }
                },
                {
                    "id": "input:2",
                    "class": "input",
                    "claimed": true,
                    "product": "PC Speaker",
                    "physid": "5",
                    "logicalname": [
                        "input4",
                        "/dev/input/event4"
                    ],
                    "capabilities": {
                        "isa": "ISA bus"
                    }
                }
            ],
            "memory": [
                {
                    "id": "firmware",
                    "class": "memory",
                    "claimed": true,
                    "description": "BIOS",
                    "vendor": "HPE",
                    "physid": "4",
                    "version": "A43",
                    "date": "10/30/2020",
                    "units": "bytes",
                    "size": 65536,
                    "capacity": 67108864,
                    "capabilities": {
                        "pci": "PCI bus",
                        "pnp": "Plug-and-Play",
                        "upgrade": "BIOS EEPROM can be upgraded",
                        "shadowing": "BIOS shadowing",
                        "escd": "ESCD",
                        "cdboot": "Booting from CD-ROM/DVD",
                        "bootselect": "Selectable boot path",
                        "edd": "Enhanced Disk Drive extensions",
                        "int13floppy360": "5.25\" 360KB floppy",
                        "int13floppy1200": "5.25\" 1.2MB floppy",
                        "int13floppy720": "3.5\" 720KB floppy",
                        "int5printscreen": "Print Screen key",
                        "int9keyboard": "i8042 keyboard controller",
                        "int14serial": "INT14 serial line control",
                        "int17printer": "INT17 printer control",
                        "int10video": "INT10 CGA/Mono video",
                        "acpi": "ACPI",
                        "usb": "USB legacy emulation",
                        "biosbootspecification": "BIOS boot specification",
                        "netboot": "Function-key initiated network service boot",
                        "uefi": "UEFI specification is supported"
                    }
                },
                {
                    "id": "memory",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:000F",
                    "description": "System Memory",
                    "physid": "f",
                    "slot": "System board or motherboard",
                    "units": "bytes",
                    "size": 137438953472,
                    "capacity": 2199023255552,
                    "configuration": {
                        "errordetection": "multi-bit-ecc"
                    },
                    "capabilities": {
                        "ecc": "Multi-bit error-correcting code (ECC)"
                    }
                },
                {
                    "id": "bank:0",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001A",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "0",
                    "serial": "373B9805",
                    "slot": "PROC 1 DIMM 1",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:1",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001B",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "1",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 2",
                    "width": 64
                },
                {
                    "id": "bank:2",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001C",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "2",
                    "serial": "373B993F",
                    "slot": "PROC 1 DIMM 3",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:3",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001D",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "3",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 4",
                    "width": 64
                },
                {
                    "id": "bank:4",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001E",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "4",
                    "serial": "373BAB2B",
                    "slot": "PROC 1 DIMM 5",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:5",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:001F",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "5",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 6",
                    "width": 64
                },
                {
                    "id": "bank:6",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0020",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "6",
                    "serial": "373BAC2C",
                    "slot": "PROC 1 DIMM 7",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:7",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0021",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "7",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 8",
                    "width": 64
                },
                {
                    "id": "bank:8",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0022",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "8",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 9",
                    "width": 64
                },
                {
                    "id": "bank:9",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0023",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "9",
                    "serial": "373B9A64",
                    "slot": "PROC 1 DIMM 10",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:10",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0024",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "a",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 11",
                    "width": 64
                },
                {
                    "id": "bank:11",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0025",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "b",
                    "serial": "373B99E2",
                    "slot": "PROC 1 DIMM 12",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:12",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0026",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "c",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 13",
                    "width": 64
                },
                {
                    "id": "bank:13",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0027",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "d",
                    "serial": "373BA7F6",
                    "slot": "PROC 1 DIMM 14",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "bank:14",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0028",
                    "description": "DIMM Synchronous [empty]",
                    "product": "NOT AVAILABLE",
                    "vendor": "UNKNOWN",
                    "physid": "e",
                    "serial": "NOT AVAILABLE",
                    "slot": "PROC 1 DIMM 15",
                    "width": 64
                },
                {
                    "id": "bank:15",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0029",
                    "description": "DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)",
                    "product": "M393A2K40DB3-CWE",
                    "vendor": "Samsung",
                    "physid": "f",
                    "serial": "373B869F",
                    "slot": "PROC 1 DIMM 16",
                    "units": "bytes",
                    "size": 17179869184,
                    "width": 64,
                    "clock": 3200000000
                },
                {
                    "id": "cache:0",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:003E",
                    "description": "L1 cache",
                    "physid": "3e",
                    "slot": "L1-Cache",
                    "units": "bytes",
                    "size": 1048576,
                    "capacity": 1048576,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "1"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                },
                {
                    "id": "cache:1",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:003F",
                    "description": "L2 cache",
                    "physid": "3f",
                    "slot": "L2-Cache",
                    "units": "bytes",
                    "size": 8388608,
                    "capacity": 8388608,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "2"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                },
                {
                    "id": "cache:2",
                    "class": "memory",
                    "claimed": true,
                    "handle": "DMI:0040",
                    "description": "L3 cache",
                    "physid": "40",
                    "slot": "L3-Cache",
                    "units": "bytes",
                    "size": 134217728,
                    "capacity": 134217728,
                    "clock": 1000000000,
                    "configuration": {
                        "level": "3"
                    },
                    "capabilities": {
                        "pipeline-burst": "Pipeline burst",
                        "internal": "Internal",
                        "write-back": "Write-back",
                        "unified": "Unified cache"
                    }
                }
            ],
            "multimedia": [],
            "network": [
                {
                    "id": "network:0",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:05:00.0",
                    "description": "Ethernet interface",
                    "product": "82576 Gigabit Network Connection",
                    "vendor": "Intel Corporation",
                    "physid": "0",
                    "businfo": "pci@0000:05:00.0",
                    "logicalname": "p2p1",
                    "version": "01",
                    "serial": "90:e2:ba:93:c9:34",
                    "units": "bit/s",
                    "size": 1000000000,
                    "capacity": 1000000000,
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "igb",
                        "driverversion": "5.14.21-150400.24.38.1.25440.1.",
                        "duplex": "full",
                        "firmware": "1.2.1",
                        "latency": "0",
                        "link": "yes",
                        "multicast": "yes",
                        "port": "twisted pair",
                        "speed": "1Gbit/s"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "tp": "twisted pair",
                        "10bt": "10Mbit/s",
                        "10bt-fd": "10Mbit/s (full duplex)",
                        "100bt": "100Mbit/s",
                        "100bt-fd": "100Mbit/s (full duplex)",
                        "1000bt-fd": "1Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "disabled": true,
                    "claimed": true,
                    "handle": "PCI:0000:05:00.1",
                    "description": "Ethernet interface",
                    "product": "82576 Gigabit Network Connection",
                    "vendor": "Intel Corporation",
                    "physid": "0.1",
                    "businfo": "pci@0000:05:00.1",
                    "logicalname": "p2p2",
                    "version": "01",
                    "serial": "90:e2:ba:93:c9:35",
                    "units": "bit/s",
                    "capacity": 1000000000,
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "igb",
                        "driverversion": "5.14.21-150400.24.38.1.25440.1.",
                        "firmware": "1.2.1",
                        "latency": "0",
                        "link": "no",
                        "multicast": "yes",
                        "port": "twisted pair"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "tp": "twisted pair",
                        "10bt": "10Mbit/s",
                        "10bt-fd": "10Mbit/s (full duplex)",
                        "100bt": "100Mbit/s",
                        "100bt-fd": "100Mbit/s (full duplex)",
                        "1000bt-fd": "1Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:0",
                    "class": "network",
                    "disabled": true,
                    "claimed": true,
                    "handle": "PCI:0000:06:00.0",
                    "description": "Ethernet interface",
                    "product": "82576 Gigabit Network Connection",
                    "vendor": "Intel Corporation",
                    "physid": "0",
                    "businfo": "pci@0000:06:00.0",
                    "logicalname": "p2p3",
                    "version": "01",
                    "serial": "90:e2:ba:93:c9:36",
                    "units": "bit/s",
                    "capacity": 1000000000,
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "igb",
                        "driverversion": "5.14.21-150400.24.38.1.25440.1.",
                        "firmware": "1.2.1",
                        "latency": "0",
                        "link": "no",
                        "multicast": "yes",
                        "port": "twisted pair"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "tp": "twisted pair",
                        "10bt": "10Mbit/s",
                        "10bt-fd": "10Mbit/s (full duplex)",
                        "100bt": "100Mbit/s",
                        "100bt-fd": "100Mbit/s (full duplex)",
                        "1000bt-fd": "1Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "disabled": true,
                    "claimed": true,
                    "handle": "PCI:0000:06:00.1",
                    "description": "Ethernet interface",
                    "product": "82576 Gigabit Network Connection",
                    "vendor": "Intel Corporation",
                    "physid": "0.1",
                    "businfo": "pci@0000:06:00.1",
                    "logicalname": "p2p4",
                    "version": "01",
                    "serial": "90:e2:ba:93:c9:37",
                    "units": "bit/s",
                    "capacity": 1000000000,
                    "width": 32,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "igb",
                        "driverversion": "5.14.21-150400.24.38.1.25440.1.",
                        "firmware": "1.2.1",
                        "latency": "0",
                        "link": "no",
                        "multicast": "yes",
                        "port": "twisted pair"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "msix": "MSI-X",
                        "pciexpress": "PCI Express",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "tp": "twisted pair",
                        "10bt": "10Mbit/s",
                        "10bt-fd": "10Mbit/s (full duplex)",
                        "100bt": "100Mbit/s",
                        "100bt-fd": "100Mbit/s (full duplex)",
                        "1000bt-fd": "1Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:0",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:86:00.0",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0",
                    "businfo": "pci@0000:86:00.0",
                    "logicalname": "mgmt1",
                    "version": "02",
                    "serial": "14:02:ec:da:b9:98",
                    "units": "bit/s",
                    "size": 25000000000,
                    "capacity": 25000000000,
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "connector": "non separable",
                        "driver": "qede",
                        "driverversion": "[storm 8.59.1.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "maxlength": "3m",
                        "module": "CUFCP32-CHB01-EF",
                        "multicast": "yes",
                        "slave": "yes",
                        "speed": "25Gbit/s"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "1000bx-fd": "1Gbit/s (full duplex)",
                        "10000bx-fd": "10Gbit/s (full duplex)",
                        "25000bx-fd": "25Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "disabled": true,
                    "claimed": true,
                    "handle": "PCI:0000:86:00.1",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0.1",
                    "businfo": "pci@0000:86:00.1",
                    "logicalname": "p1p2",
                    "version": "02",
                    "serial": "94:40:c9:5f:b5:df",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "[storm 8.59.1.0]",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "no",
                        "multicast": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:0",
                    "class": "network",
                    "claimed": true,
                    "handle": "PCI:0000:c6:00.0",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0",
                    "businfo": "pci@0000:c6:00.0",
                    "logicalname": "mgmt0",
                    "version": "02",
                    "serial": "14:02:ec:da:b9:98",
                    "units": "bit/s",
                    "size": 25000000000,
                    "capacity": 25000000000,
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "connector": "non separable",
                        "driver": "qede",
                        "driverversion": "[storm 8.59.1.0]",
                        "duplex": "full",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "yes",
                        "maxlength": "3m",
                        "module": "CUFCP32-CHB01-EF",
                        "multicast": "yes",
                        "slave": "yes",
                        "speed": "25Gbit/s"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "fibre": "optical fibre",
                        "1000bx-fd": "1Gbit/s (full duplex)",
                        "10000bx-fd": "10Gbit/s (full duplex)",
                        "25000bx-fd": "25Gbit/s (full duplex)",
                        "autonegotiation": "Auto-negotiation"
                    }
                },
                {
                    "id": "network:1",
                    "class": "network",
                    "disabled": true,
                    "claimed": true,
                    "handle": "PCI:0000:c6:00.1",
                    "description": "Ethernet interface",
                    "product": "FastLinQ QL41000 Series 10/25/40/50GbE Controller",
                    "vendor": "QLogic Corp.",
                    "physid": "0.1",
                    "businfo": "pci@0000:c6:00.1",
                    "logicalname": "p10p2",
                    "version": "02",
                    "serial": "14:02:ec:da:b9:99",
                    "width": 64,
                    "clock": 33000000,
                    "configuration": {
                        "autonegotiation": "on",
                        "broadcast": "yes",
                        "driver": "qede",
                        "driverversion": "[storm 8.59.1.0]",
                        "firmware": "mbi 8.50.78 [mfw 8.50.9.0]",
                        "latency": "0",
                        "link": "no",
                        "multicast": "yes"
                    },
                    "capabilities": {
                        "pm": "Power Management",
                        "msi": "Message Signalled Interrupts",
                        "pciexpress": "PCI Express",
                        "msix": "MSI-X",
                        "vpd": "Vital Product Data",
                        "bus_master": "bus mastering",
                        "cap_list": "PCI capabilities listing",
                        "rom": "extension ROM",
                        "ethernet": true,
                        "physical": "Physical interface",
                        "autonegotiation": "Auto-negotiation"
                    }
                }
            ],
            "power": [
                {
                    "id": "power:0",
                    "class": "power",
                    "description": "Power Supply 1",
                    "product": "865408-B21",
                    "vendor": "HPE",
                    "physid": "1",
                    "serial": "5WBXK0FLLDNFQM",
                    "units": "mWh",
                    "capacity": 500
                },
                {
                    "id": "power:1",
                    "class": "power",
                    "description": "Power Supply 2",
                    "product": "865408-B21",
                    "vendor": "HPE",
                    "physid": "2",
                    "serial": "5WBXK0FLLDMAFR",
                    "units": "mWh",
                    "capacity": 500
                }
            ],
            "processor": [
                {
                    "id": "cpu",
                    "class": "processor",
                    "claimed": true,
                    "handle": "DMI:0041",
                    "description": "CPU",
                    "product": "AMD EPYC 7302P 16-Core Processor",
                    "vendor": "Advanced Micro Devices [AMD]",
                    "physid": "41",
                    "businfo": "cpu@0",
                    "version": "23.49.0",
                    "slot": "Proc 1",
                    "units": "Hz",
                    "size": 1518584000,
                    "capacity": 3100000000,
                    "width": 64,
                    "clock": 100000000,
                    "configuration": {
                        "cores": "16",
                        "enabledcores": "16",
                        "microcode": "137367629",
                        "threads": "32"
                    },
                    "capabilities": {
                        "lm": "64bits extensions (x86-64)",
                        "fpu": "mathematical co-processor",
                        "fpu_exception": "FPU exceptions reporting",
                        "wp": true,
                        "vme": "virtual mode extensions",
                        "de": "debugging extensions",
                        "pse": "page size extensions",
                        "tsc": "time stamp counter",
                        "msr": "model-specific registers",
                        "pae": "4GB+ memory addressing (Physical Address Extension)",
                        "mce": "machine check exceptions",
                        "cx8": "compare and exchange 8-byte",
                        "apic": "on-chip advanced programmable interrupt controller (APIC)",
                        "sep": "fast system calls",
                        "mtrr": "memory type range registers",
                        "pge": "page global enable",
                        "mca": "machine check architecture",
                        "cmov": "conditional move instruction",
                        "pat": "page attribute table",
                        "pse36": "36-bit page size extensions",
                        "clflush": true,
                        "mmx": "multimedia extensions (MMX)",
                        "fxsr": "fast floating point save/restore",
                        "sse": "streaming SIMD extensions (SSE)",
                        "sse2": "streaming SIMD extensions (SSE2)",
                        "ht": "HyperThreading",
                        "syscall": "fast system calls",
                        "nx": "no-execute bit (NX)",
                        "mmxext": "multimedia extensions (MMXExt)",
                        "fxsr_opt": true,
                        "pdpe1gb": true,
                        "rdtscp": true,
                        "x86-64": "64bits extensions (x86-64)",
                        "constant_tsc": true,
                        "rep_good": true,
                        "nopl": true,
                        "nonstop_tsc": true,
                        "cpuid": true,
                        "extd_apicid": true,
                        "aperfmperf": true,
                        "rapl": true,
                        "pni": true,
                        "pclmulqdq": true,
                        "monitor": true,
                        "ssse3": true,
                        "fma": true,
                        "cx16": true,
                        "sse4_1": true,
                        "sse4_2": true,
                        "movbe": true,
                        "popcnt": true,
                        "aes": true,
                        "xsave": true,
                        "avx": true,
                        "f16c": true,
                        "rdrand": true,
                        "lahf_lm": true,
                        "cmp_legacy": true,
                        "svm": true,
                        "extapic": true,
                        "cr8_legacy": true,
                        "abm": true,
                        "sse4a": true,
                        "misalignsse": true,
                        "3dnowprefetch": true,
                        "osvw": true,
                        "ibs": true,
                        "skinit": true,
                        "wdt": true,
                        "tce": true,
                        "topoext": true,
                        "perfctr_core": true,
                        "perfctr_nb": true,
                        "bpext": true,
                        "perfctr_llc": true,
                        "mwaitx": true,
                        "cpb": true,
                        "cat_l3": true,
                        "cdp_l3": true,
                        "hw_pstate": true,
                        "ssbd": true,
                        "mba": true,
                        "ibrs": true,
                        "ibpb": true,
                        "stibp": true,
                        "vmmcall": true,
                        "fsgsbase": true,
                        "bmi1": true,
                        "avx2": true,
                        "smep": true,
                        "bmi2": true,
                        "cqm": true,
                        "rdt_a": true,
                        "rdseed": true,
                        "adx": true,
                        "smap": true,
                        "clflushopt": true,
                        "clwb": true,
                        "sha_ni": true,
                        "xsaveopt": true,
                        "xsavec": true,
                        "xgetbv1": true,
                        "xsaves": true,
                        "cqm_llc": true,
                        "cqm_occup_llc": true,
                        "cqm_mbm_total": true,
                        "cqm_mbm_local": true,
                        "clzero": true,
                        "irperf": true,
                        "xsaveerptr": true,
                        "rdpru": true,
                        "wbnoinvd": true,
                        "amd_ppin": true,
                        "arat": true,
                        "npt": true,
                        "lbrv": true,
                        "svm_lock": true,
                        "nrip_save": true,
                        "tsc_scale": true,
                        "vmcb_clean": true,
                        "flushbyasid": true,
                        "decodeassists": true,
                        "pausefilter": true,
                        "pfthreshold": true,
                        "avic": true,
                        "v_vmsave_vmload": true,
                        "vgif": true,
                        "v_spec_ctrl": true,
                        "umip": true,
                        "rdpid": true,
                        "overflow_recov": true,
                        "succor": true,
                        "smca": true,
                        "cpufreq": "CPU Frequency scaling"
                    }
                }
            ],
            "system": [
                {
                    "id": "ncn-m001",
                    "class": "system",
                    "claimed": true,
                    "handle": "DMI:0053",
                    "description": "Rack Mount Chassis",
                    "product": "ProLiant DL325 Gen10 Plus (P18606-B21)",
                    "vendor": "HPE",
                    "serial": "MXQ03000TF",
                    "width": 64,
                    "configuration": {
                        "boot": "normal",
                        "chassis": "rackmount",
                        "family": "ProLiant",
                        "sku": "P18606-B21",
                        "uuid": "36383150-3630-584d-5130-333030305446"
                    },
                    "capabilities": {
                        "smbios-3.4.0": "SMBIOS version 3.4.0",
                        "dmi-3.4.0": "DMI version 3.4.0",
                        "smp": "Symmetric Multi-Processing",
                        "vsyscall32": "32-bit processes"
                    }
                },
                {
                    "id": "pnp00:00",
                    "class": "system",
                    "claimed": true,
                    "product": "PnP device PNP0b00",
                    "physid": "0",
                    "configuration": {
                        "driver": "rtc_cmos"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                },
                {
                    "id": "pnp00:01",
                    "class": "system",
                    "claimed": true,
                    "product": "PnP device PNP0c02",
                    "physid": "1",
                    "configuration": {
                        "driver": "system"
                    },
                    "capabilities": {
                        "pnp": true
                    }
                }
            ],
            "_id": "MXQ03000TF",
            "blockdevices": [
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "NJ05NA019I150642Y",
                    "size": 480103981056,
                    "driverPath": "/dev/sda",
                    "byId": [
                        "/dev/disk/by-id/ata-VK000480GWTHA_NJ05NA019I150642Y",
                        "/dev/disk/by-id/wwn-0x5ace42e025178ded"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-5",
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-5.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "NJ05NA019I150642X",
                    "size": 480103981056,
                    "driverPath": "/dev/sdb",
                    "byId": [
                        "/dev/disk/by-id/ata-VK000480GWTHA_NJ05NA019I150642X",
                        "/dev/disk/by-id/wwn-0x5ace42e025178dec"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-6.0",
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-6"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:pci",
                    "tran": "sata",
                    "hotplug": false,
                    "serial": "NJ05NA019I150642Z",
                    "size": 480103981056,
                    "driverPath": "/dev/sdc",
                    "byId": [
                        "/dev/disk/by-id/ata-VK000480GWTHA_NJ05NA019I150642Z",
                        "/dev/disk/by-id/wwn-0x5ace42e025178dee"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-7",
                        "/dev/disk/by-path/pci-0000:83:00.0-ata-7.0"
                    ]
                },
                {
                    "type": "disk",
                    "subsystems": "block:scsi:usb:pci",
                    "tran": "usb",
                    "hotplug": true,
                    "serial": "07010B5A07013A06",
                    "size": 990787338240,
                    "driverPath": "/dev/sdd",
                    "byId": [
                        "/dev/disk/by-id/usb-PNY_USB_3.1_FD_07010B5A07013A06-0:0"
                    ],
                    "byPath": [
                        "/dev/disk/by-path/pci-0000:42:00.3-usb-0:1.1:1.0-scsi-0:0:0:0"
                    ]
                }
            ]
        }
    ]
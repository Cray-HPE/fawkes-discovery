#!/bin/bash
#
# MIT License
#
# (C) Copyright 2023 Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included
# in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.

set -euo pipefail

OUTPUT="{}"
CLASSES=("bridge"
         "bus"
         "communication"
         "display"
         "generic"
         "input"
         "memory"
         "multimedia"
         "network"
         "power"
         "processor"
         "system"
        )

# get IPMI info
IPMIDUMP=$(fawkes-client)
OUTPUT=$(jq ". += {bmc: ${IPMIDUMP}}" <<< "${OUTPUT}")

### lshw output begin ###
# get lshw classes listed in $CLASSES
for class in "${CLASSES[@]}"; do
    class_data=$(lshw -json -c ${class})
    OUTPUT=$(jq ". += {${class}: ${class_data}}" <<< "${OUTPUT}")
done

# set "_id" to the value of the "serial" field
OUTPUT=$(jq -r '. += {"_id": .system[] | select(.serial) | .serial}' <<< "${OUTPUT}")
### lshw output end ###

### lsblk output begin ###
# one document with one object for each block device
# does include USB, does not include loop and network block devices
export LSBLK=$(lsblk -b -l -d -o PATH,TYPE,SUBSYSTEMS,TRAN,HOTPLUG,SERIAL,SIZE -e7 -e43 -e252 --json)

# get just the block device names. e.g. /dev/sda
export BLOCK_DEVICES=($(jq -r '.blockdevices[].path' <<< "${LSBLK}"))

# loop over block devices and find symlinks in /dev/disk that point to the block devices
for blkdev in "${BLOCK_DEVICES[@]}"; do
    export blkdev
    export SYMS=($(find -L /dev/disk/ -samefile "${blkdev}" -printf "%p "))

    # insert the symlink paths into the existing block device document e.g. /dev/disk/by-path/pci-0000:83:00.0-ata-7.0
    export count=1
    for sym in "${SYMS[@]}"; do
        export sym
        LSBLK=$(jq \
            --arg sym "${sym}" \
            --arg count "${count}" \
            --arg path "${blkdev}" \
            --arg newpath "path${count}" \
            '(.blockdevices[] | select(.path == ($path))) += {($newpath): ($sym)}' \<<< "${LSBLK}")
        ((count++))
    done
done

# add the block device objects to the parent json document
OUTPUT=$(jq ". += ${LSBLK}" <<< "${OUTPUT}")
### lsblk output end ###

# print the entire json document
jq -r '.' <<< "${OUTPUT}"
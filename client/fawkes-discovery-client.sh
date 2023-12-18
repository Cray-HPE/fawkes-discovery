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
export LSBLK=$(lsblk \
                 -o PATH,TYPE,SUBSYSTEMS,TRAN,HOTPLUG,SERIAL,SIZE \
                 -b \
                 -l \
                 -d \
                 -e7 \
                 -e43 \
                 -e252 \
                 --json | \
                  jq '.blockdevices |= map(. + {deviceMapper: .path}) | del(.blockdevices[].path)')

# get just the block device names. e.g. /dev/sda
export BLOCK_DEVICES=($(jq -r '.blockdevices[].deviceMapper' <<< "${LSBLK}"))
BLOCK_DEVICES=($( tr ' ' '\n' <<< "${BLOCK_DEVICES[*]}" | sort | uniq))

# loop over block devices and find symlinks in /dev/disk that point to the block devices
for blkdev in "${BLOCK_DEVICES[@]}"; do
    export blkdev
    export BY_ID=($(find -L /dev/disk/by-id -samefile "${blkdev}" -printf "%p "))
    export BY_PATH=($(find -L /dev/disk/by-path -samefile "${blkdev}" -printf "%p "))

    # create empty arrays for by-id and by-path values
    LSBLK=$(jq --arg blkdev "${blkdev}" '(.blockdevices[] | select(.deviceMapper == ($blkdev))) += {"byId": []}' <<< "${LSBLK}")
    LSBLK=$(jq --arg blkdev "${blkdev}" '(.blockdevices[] | select(.deviceMapper == ($blkdev))) += {"byPath": []}' <<< "${LSBLK}")

    # insert the symlink paths into the existing block device document
    for sym in "${BY_ID[@]}"; do
        export sym
        LSBLK=$(jq \
            --arg sym "${sym}" \
            --arg blkdev "${blkdev}" \
            '(.blockdevices[] | select(.deviceMapper == $blkdev).byId) += [($sym)]' <<< "${LSBLK}")
    done

    for sym in "${BY_PATH[@]}"; do
        export sym
        LSBLK=$(jq \
            --arg sym "${sym}" \
            --arg blkdev "${blkdev}" \
            '(.blockdevices[] | select(.deviceMapper == $blkdev).byPath) += [($sym)]' <<< "${LSBLK}")
    done
done

# add the block device objects to the parent json document
OUTPUT=$(jq ". += ${LSBLK}" <<< "${OUTPUT}")
### lsblk output end ###

# minify and remove color
OUTPUT=$(jq -c -M '.' <<< "${OUTPUT}")

# print the entire json document
printf '%s' "${OUTPUT}"
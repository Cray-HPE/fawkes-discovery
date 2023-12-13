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

FAWKES_CLIENT=$(fawkes-client)
if [[ -z  "${FAWKES_CLIENT}" ]]; then
  echo "No IPMI device found."
  echo "Exitting..."
  exit 1
else
  OUTPUT=$(jq ". += ${FAWKES_CLIENT}" <<< "${OUTPUT}")
fi

# Get lshw classes listed in $CLASSES
for class in "${CLASSES[@]}"; do
    class_data=$(lshw -json -c ${class})
    OUTPUT=$(jq ". += {${class}: ${class_data}}" <<< "${OUTPUT}")
done

# Set "_id" to the value of the "serial" field
jq -r '. += {"_id": .system[] | select(.serial) | .serial}' <<< "${OUTPUT}"

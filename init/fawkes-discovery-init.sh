#!/bin/bash
# MIT License
#
# (C) Copyright 2022 Hewlett Packard Enterprise Development LP
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
set -euf -o pipefail

if [ $# -lt 2 ]; then
    echo >&2 "usage: fawkes-discovery-init PIDFILE CIDFILE [CONTAINER [VOLUME]]"
    exit 1
fi

DISCOVERY_PIDFILE="$1"
DISCOVERY_CIDFILE="$2"
DISCOVERY_CONTAINER_NAME="${3:-fawkes-discovery}"
DISCOVERY_CONFIG="fawkes-discovery.yml"
DISCOVERY_IMAGE_NAME="fawkes-discovery"

DISCOVERY_IMAGE_PATH="@@fawkes-discovery-path@@"
DISCOVERY_IMAGE="@@fawkes-discovery-image@@"

DISCOVERY_VOLUME_MOUNT_CONFIG="/etc/fawkes-discovery/${DISCOVERY_CONFIG}:/app/${DISCOVERY_CONFIG}:ro"

command -v podman >/dev/null 2>&1 || { echo >&2 "${0##*/}: command not found: podman"; exit 1; }

# Load fawkes-discovery image if it doesn't already exist
if ! podman image inspect "$DISCOVERY_IMAGE" &>/dev/null; then
    # get the image id (there may be more than one in certain situations)
    DISCOVERY_IMAGE_ID=()
    read -r -a DISCOVERY_IMAGE_ID <<< "$(podman images --noheading --format "{{.Id}}" --filter label="org.label-schema.name=$DISCOVERY_IMAGE_NAME")"

    # if more than one image is found, clear them out
    if [ ${#DISCOVERY_IMAGE_ID[@]} -gt 1 ]; then
        podman image rm --force --ignore "${DISCOVERY_IMAGE_ID[@]}"
    fi

    # otherwise, load and tag the image
    podman load -i "$DISCOVERY_IMAGE_PATH" || exit
    # get the image ID
    read -r -a DISCOVERY_IMAGE_ID <<< "$(podman images --noheading --format "{{.Id}}" --filter label="org.label-schema.name=$DISCOVERY_IMAGE_NAME")"
    # tag the image appropriately
    podman tag "${DISCOVERY_IMAGE_ID[@]}" "$DISCOVERY_IMAGE"
fi

# always ensure fresh files
# since this runs in a container and called from a systemd service,
# the container could have been created with malformed json or some other error
# clearing it out everytime and making a fresh container allows for a clean start
podman stop --ignore -t 10 "$DISCOVERY_CONTAINER_NAME"
podman rm --force --ignore "$DISCOVERY_CONTAINER_NAME"

rm -f "$DISCOVERY_PIDFILE" 
rm -f "$DISCOVERY_CIDFILE"

# create a fresh container in case the previous failed to start due to malformed json
podman create \
    --conmon-pidfile "$DISCOVERY_PIDFILE" \
    --cidfile "$DISCOVERY_CIDFILE" \
    --cgroups=no-conmon \
    --net host \
    --volume "$DISCOVERY_VOLUME_MOUNT_CONFIG" \
    --name "$DISCOVERY_CONTAINER_NAME" \
    --env GIN_MODE="${GIN_MODE:-release}" \
    "$DISCOVERY_IMAGE"

# start the container so we can get the exit code
podman start "$DISCOVERY_CONTAINER_NAME"

# exit this script with the exit code from the container so it is passed appropriately to systemd
rc=""
rc=$(podman inspect --type container "${DISCOVERY_CONTAINER_NAME}" --format "{{.State.ExitCode}}")
exit "${rc}"
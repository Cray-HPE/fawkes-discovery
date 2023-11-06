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

FRONTEND_VERSION="@@frontend-version@@"
FRONTEND_IMAGE="artifactory.algol60.net/fawkes-docker/stable/fawkes-discovery:${FRONTEND_VERSION}"
FRONTEND_IMAGE_PATH="/var/lib/cray/container-images/fawkes-discovery/fawkes-discovery-${FRONTEND_VERSION}.tar"

# Load fawkes frontend image if it doesn't already exist
if ! podman image inspect "$FRONTEND_IMAGE" &>/dev/null; then
    # load the image
    podman load -i "$FRONTEND_IMAGE_PATH" || exit
    # get the tag
    FRONTEND_IMAGE_ID=$(podman images --noheading --format "{{.Id}}" --filter label="org.label-schema.name=fawkes-discovery
")
    # tag the image
    podman tag "$FRONTEND_IMAGE_ID" "$FRONTEND_IMAGE"
fi

# Update containerPort and hostPort in podman config.
# input from values in: /etc/fawkes-discovery/fawkes-discovery.yml
# output: /etc/fawkes-discovery/discovery-frontend.yml
FRONTEND_CONFIG="/etc/fawkes-discovery/fawkes-discovery.yml"
FRONTEND_PODMAN_TEMPLATE="/etc/fawkes-discovery/discovery-frontend-template.yml"
FRONTEND_PODMAN_CONFIG="/etc/fawkes-discovery/discovery-frontend.yml"

PORT=$(yq '.bind | sub("^:", "")' ${FRONTEND_CONFIG})
PARENT_KEY=".spec.template.spec.containers[].ports[]"

yq "${PARENT_KEY}.containerPort = ${PORT}, \
    ${PARENT_KEY}.hostPort = ${PORT}" \
    "${FRONTEND_PODMAN_TEMPLATE}" > "${FRONTEND_PODMAN_CONFIG}"

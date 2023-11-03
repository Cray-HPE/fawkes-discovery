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

# Update containerPort and hostPort in podman config.
# input from values in: /etc/fawkes-discovery/fawkes-discovery.yml
# output: /etc/fawkes-discovery/discovery-frontend.yml
FAWKES_FRONTEND_CONFIG="/etc/fawkes-discovery/fawkes-discovery.yml"
FAWKES_FRONTEND_PODMAN_TEMPLATE="/etc/fawkes-discovery/discovery-frontend-template.yml"
FAWKES_FRONTEND_PODMAN_CONFIG="/etc/fawkes-discovery/discovery-frontend.yml"

PORT=$(yq '.bind | sub("^:", "")' ${FAWKES_FRONTEND_CONFIG})
PARENT_KEY=".spec.template.spec.containers[].ports[]"

yq "${PARENT_KEY}.containerPort = ${PORT}, \
    ${PARENT_KEY}.hostPort = ${PORT}" \
    "${FAWKES_FRONTEND_PODMAN_TEMPLATE}" > "${FAWKES_FRONTEND_PODMAN_CONFIG}"
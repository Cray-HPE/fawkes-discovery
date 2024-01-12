#!/bin/bash
#
# MIT License
#
# (C) Copyright 2024 Hewlett Packard Enterprise Development LP
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

export BASE_DIR=$(git rev-parse --show-toplevel)
export JENKINSFILE="${BASE_DIR}/Jenkinsfile.github"
export DB_TEMPLATE_DIR="test/"
export IMAGE_DB_TAG=$(gawk -F '=' '/IMAGE_DB_TAG/{gsub("\"", ""); gsub(" ", ""); print $2}' ${JENKINSFILE})
export DB_REGISTRY_PATH="docker.io/library/mongo:${IMAGE_DB_TAG}"

function setup {
    docker run -dit --rm -p 27017:27017 --name mongodb -d "mongo:${IMAGE_DB_TAG}"
}

function teardown {
    docker stop mongodb
}

case $1 in 
    "setup")
      setup
      ;;
    "teardown")
      teardown
      ;;
    *)
      echo "Usage:"
      echo "    $0 setup"
      echo "    OR"
      echo "    $0 teardown"
esac
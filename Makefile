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
# There is no reason GOROOT should be set anymore. Unset it so it doesn't mess
# with our go toolchain detection/usage.

SHELL := /bin/bash -o pipefail
ifneq ($(GOROOT),)
	export GOROOT=
endif

lc =$(subst A,a,$(subst B,b,$(subst C,c,$(subst D,d,$(subst E,e,$(subst F,f,$(subst G,g,$(subst H,h,$(subst I,i,$(subst J,j,$(subst K,k,$(subst L,l,$(subst M,m,$(subst N,n,$(subst O,o,$(subst P,p,$(subst Q,q,$(subst R,r,$(subst S,s,$(subst T,t,$(subst U,u,$(subst V,v,$(subst W,w,$(subst X,x,$(subst Y,y,$(subst Z,z,$1))))))))))))))))))))))))))

.PHONY: \
	all \
	default \
	clean \
	doc \
	help \
	fmt \
	tools \
	tidy \
	vet

default: build

all: build lint test

help:
	@echo 'Usage: make <OPTIONS> ... <TARGETS>'
	@echo ''
	@echo 'Available targets are:'
	@echo ''
	@echo '    help               Show this help screen.'
	@echo
	@echo '    build              Build a go binary.'
	@echo
	@echo '    clean              Remove binaries, artifacts and releases.'
	@echo '    test               Run unit tests.'
	@echo '    tools              Install tools needed by the project.'
	@echo '    vet                Run go vet.'
	@echo '    lint               Run golint.'
	@echo '    fmt                Run go fmt.'
	@echo '    tidy               Run go mod tidy.'
	@echo '    doc                Start Go documentation server on port 8080.'
	@echo ''
# Used to force some rules to run every time
FORCE: ;

############################################################################
# Vars
############################################################################

export NAME ?= $(shell basename $(shell pwd))
export RELEASE = 1

# RPMs don't like hyphens, might as well just be consistent everywhere; strip leading v.
export VERSION ?= $(shell git describe --tags | tr -s '-' '~' | sed 's/^v//')
TEST_OUTPUT_DIR ?= $(CURDIR)/build/results

# There may be more than one tag. Only use one that starts with 'v' followed by
# a number, e.g., v0.9.3.
git_dirty := $(shell git status -s)

############################################################################
# OS/ARCH detection
############################################################################

ifeq ($(OS),)
export OS=$(shell uname -s)
endif

# Determine what GOOS should be if the user hasn't set it.
ifeq ($(GOOS),)
	ifeq ($(OS),Darwin)
		export GOOS := $(call lc,$(OS))
	else ifeq ($(OS),Linux)
		export GOOS := $(call lc,$(OS))
	else ifeq (,$(findstring MYSYS_NT-10-0-, $(OS)))
		export GOOS=windows
	else
		$(error unsupported OS: $(OS))
	endif
endif

ifeq ($(ARCH),)
	export ARCH= $(shell uname -m)
endif

# Determine what GOARCH should be if the user hasn't set it.
ifeq ($(GOARCH),)
	ifeq "$(ARCH)" "arm64"
		export GOARCH=arm64
	else ifeq "$(ARCH)" "aarch64"
		export GOARCH=arm64
	else ifeq "$(ARCH)" "x86_64"
		export GOARCH=amd64
	else
		$(error unsupported ARCH: $(ARCH))
	endif
endif

ifeq ($(GOOS),windows)
	go_bin_dir = $(go_dir)/go/bin
	exe=".exe"
else
	go_bin_dir = $(go_dir)/bin
	exe=
endif

go_path := PATH="$(go_bin_dir):$(PATH)"

goenv = $(shell PATH="$(go_bin_dir):$(PATH)" go env $1)

############################################################################
# Determine go flags
############################################################################

# Flags passed to all invocations of go test
go_test_flags :=
ifeq ($(NIGHTLY),)
	# Cap unit-test timout to 60s unless we're running nightlies.
	go_test_flags += -timeout=60s
endif

go_flags :=
ifneq ($(GOPARALLEL),)
	go_flags += -p=$(GOPARALLEL)
endif

ifneq ($(GOVERBOSE),)
	go_flags += -v
endif

# Determine the ldflags passed to the go linker. The git tag and hash will be
# provided to the linker unless the git status is dirty.
go_ldflags := -s -w
go_ldflags += -X github.com/Cray-HPE/fawkes-discovery/pkg/version.GitTag=$(VERSION)
ifeq ($(git_dirty),)
	go_ldflags += -X github.com/Cray-HPE/fawkes-discovery/pkg/version.GitTreeState='clean'
else
	go_ldflags += -X github.com/Cray-HPE/fawkes-discovery/pkg/version.GitTreeState='dirty'
endif

#############################################################################
# Build Targets
#############################################################################

binaries := ${NAME}

.PHONY: build
build: tidy $(binaries)

go_build := $(go_path) go build $(go_flags) -ldflags '$(go_ldflags)' -o

%: cmd/% FORCE
	@echo Building $@…
	$(E)$(go_build) $@$(exe) ./$<
	cp $@$(exe) $@-$(GOOS)-$(GOARCH)$(exe)

clean:
	go clean -i ./...
	rm -vf \
	  $(CURDIR)/build/results/coverage/* \
	  $(CURDIR)/build/results/unittest/*
	rm -rf \
	  $(binaries) \
	  $(NAME)-$(GOOS)-$(GOARCH)$(exe)

test: tools unit functional integration edge

unit: build
	mkdir -pv $(TEST_OUTPUT_DIR)/unittest $(TEST_OUTPUT_DIR)/coverage
	go test ./cmd/... ./pkg/... -v -coverprofile $(TEST_OUTPUT_DIR)/coverage.out -covermode count | tee "$(TEST_OUTPUT_DIR)/testing.out"
	cat "$(TEST_OUTPUT_DIR)/testing.out" | go-junit-report | tee "$(TEST_OUTPUT_DIR)/unittest/testing.xml" | tee "$(TEST_OUTPUT_DIR)/unittest/testing.xml"
	gocover-cobertura < $(TEST_OUTPUT_DIR)/coverage.out > "$(TEST_OUTPUT_DIR)/coverage/coverage.xml"
	go tool cover -html=$(TEST_OUTPUT_DIR)/coverage.out -o "$(TEST_OUTPUT_DIR)/coverage/coverage.html"

functional: build
	./spec/support/bin/launch_tests.sh functional

integration: build
	./spec/support/bin/launch_tests.sh integration

edge: build
	./spec/support/bin/launch_tests.sh edge

tools:
	go install golang.org/x/lint/golint@latest
	go install github.com/t-yuki/gocover-cobertura@latest
	go install github.com/jstemmer/go-junit-report@latest

vet:
	go vet -v ./...

lint: tools
	golint -set_exit_status ./cmd/...
	golint -set_exit_status ./pkg/...

fmt:
	go fmt ./...

tidy:
	go mod tidy

doc:
	godoc -http=:8080 -index

#############################################################################
# Package Build Targets
#############################################################################

ifeq ($(TIMESTAMP),)
export TIMESTAMP := $(shell date '+%Y%m%d%H%M%S')
endif

ifeq ($(GO_VERSION),)
GO_VERSION := $(shell awk -v replace="'" '/goVersion/{gsub(replace,"", $$NF); print $$NF; exit}' Jenkinsfile.github)
endif

ifeq ($(IMAGE_VERSION),)
IMAGE_VERSION := $(shell git describe --tags | tr -s '-' '_' | sed 's/^v//')
endif

package: container_image rpm

SPEC_FILE := ${NAME}.spec
SOURCE_NAME := ${NAME}-${VERSION}

BUILD_DIR ?= $(PWD)/dist/rpmbuild
SOURCE_PATH := ${BUILD_DIR}/SOURCES/${SOURCE_NAME}.tar.bz2

rpm: rpm_package_source rpm_build_source rpm_build

prepare:
	@echo $(NAME)
	rm -rf $(BUILD_DIR)
	mkdir -p $(BUILD_DIR)/SPECS $(BUILD_DIR)/SOURCES
	cp $(SPEC_FILE) $(BUILD_DIR)/SPECS/

# touch the archive before creating it to prevent 'tar: .: file changed as we read it' errors
rpm_package_source:
	touch $(SOURCE_PATH)
	tar --transform 'flags=r;s,^,/$(SOURCE_NAME)/,' --exclude .nox --exclude dist/rpmbuild --exclude ${SOURCE_NAME}.tar.bz2 -cvjf $(SOURCE_PATH) .

rpm_build_source:
	rpmbuild -bs $(BUILD_DIR)/SPECS/$(SPEC_FILE) --target ${ARCH} --define "_topdir $(BUILD_DIR)"

rpm_build:
	rpmbuild -ba $(BUILD_DIR)/SPECS/$(SPEC_FILE) --target ${ARCH} --define "_topdir $(BUILD_DIR)"

container_image:
	docker buildx build \
		${BUILD_ARGS} \
		${DOCKER_ARGS} \
		--build-arg NAME=${NAME} \
		--build-arg GO_VERSION="${GO_VERSION}" \
		--cache-to type=local,dest=docker-build-cache  \
		--platform linux/amd64,linux/arm64 \
		--builder $$(docker buildx create --platform linux/amd64,linux/arm64) \
		--pull \
		 .

	docker buildx create --use

	docker buildx build \
		${BUILD_ARGS} \
		${DOCKER_ARGS} \
		--build-arg NAME=${NAME} \
		--build-arg GO_VERSION="${GO_VERSION}" \
		--cache-from type=local,src=docker-build-cache \
		--platform linux/amd64 \
		--pull \
		--load \
		-t ${NAME}:latest \
		-t ${NAME}:${IMAGE_VERSION} \
		-t ${NAME}:${IMAGE_VERSION}-${TIMESTAMP} \
		.
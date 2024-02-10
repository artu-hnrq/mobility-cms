# Development management facilities
#
# This file specifies useful routines to streamline development management.
# See https://www.gnu.org/software/make/.


# Consume environment variables
ifneq (,$(wildcard .env))
	include .env
endif

# Tool configuration
SHELL := /bin/bash
GNUMAKEFLAGS += --no-print-directory

# Path record
ROOT_DIR ?= $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
TEMP_DIR ?= .tmp
NODE_MODULES ?= node_modules

# Target files
ENV_FILE ?= .env
EPHEMERAL_ARCHIVES ?= \
	$(TEMP_DIR) \
	import_error_log_*
EXPORT_FILE_NAME ?= strapi-cms-export
EXPORT_FILE ?= $(EXPORT_FILE_NAME).tar.gz.enc

# Behavior setup
EXPORT_FILE_ENCRYPTION_KEY = $(shell cat $(ENV_FILE) | grep -oP 'EXPORT_FILE_ENCRYPTION_KEY=\K.*')
## PROJECT_NAME ?= $(shell basename $(ROOT_DIR) | tr a-z A-Z)

# Executables definition
GIT ?= git
NPM ?= npm

%: # Treat unrecognized targets
	@ printf "\033[31;1mUnrecognized routine: '$(*)'\033[0m\n"
	$(MAKE) help

help:: ## Show this help
	@ printf "\033[33;1m$(PROJECT_NAME)'s GNU-Make available routines:\n"
	egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[37;1m%-20s\033[0m %s\n", $$1, $$2}'

prepare:: ## Inicialize virtual environment
	test -r $(ENV_FILE) -o ! -r $(ENV_FILE).example || cp $(ENV_FILE).example $(ENV_FILE)

init:: veryclean prepare ## Configure development environment
	$(GIT) submodule update --init --recursive
	$(NPM) install

up:: build execute ## Build and execute service

build:: clean ## Build service running environment

execute:: setup run ## Setup and run application

setup:: clean import ## Process source code into an executable program

compile:: ## Treat file generation

run:: ## Launch application locally
	$(NPM) run develop

finish:: ## Stop application execution

status:: ## Present service running status

ping:: ## Verify service reachability

test:: ## Verify application's behavior requirements completeness

release:: ## Release a new project version

publish:: ## Publish current project version

deploy:: ## Deploy service on remote server

clean:: ## Delete project ephemeral archives
	-rm --force --recursive $(EPHEMERAL_ARCHIVES)

veryclean:: clean ## Delete all generated files
	-rm --force --recursive $(NODE_MODULES)

import:: clean ## Import data from external sources
	$(NPM) run strapi import -- --file $(EXPORT_FILE) --key $(EXPORT_FILE_ENCRYPTION_KEY) --force

export:: ## Export data to external sources
	$(NPM) run strapi export -- --file $(EXPORT_FILE_NAME) --key $(EXPORT_FILE_ENCRYPTION_KEY)


.EXPORT_ALL_VARIABLES:
.ONESHELL:
.PHONY: help prepare init up build execute setup compile run finish status ping test release publish deploy clean veryclean
#!/bin/bash

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# temporary script for start all services
kitty yarn --cwd $SCRIPTPATH/api upgrade && yarn --cwd $SCRIPTPATH/api build && yarn --cwd $SCRIPTPATH/api run start & 

kitty yarn --cwd $SCRIPTPATH/frontend upgrade && yarn --cwd $SCRIPTPATH/frontend build && yarn --cwd $SCRIPTPATH/frontend/ start & 

kitty yarn --cwd $SCRIPTPATH/websockets/ upgrade && yarn --cwd $SCRIPTPATH/websockets/ start &

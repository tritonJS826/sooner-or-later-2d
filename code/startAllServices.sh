#!/bin/bash

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# script for start all services
# script must be placed in the root of yarn workspaces
yarn

#kitty --title="rest api" yarn --cwd $SCRIPTPATH/api build && yarn --cwd $SCRIPTPATH/api run start & 

kitty --title="frontend" yarn --cwd $SCRIPTPATH/frontend build && yarn --cwd $SCRIPTPATH/frontend/ start & 

kitty --title="websockets" yarn --cwd $SCRIPTPATH/websockets/ start &

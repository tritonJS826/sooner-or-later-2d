#!/bin/bash

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# script for start all services
# script must be placed in the root of yarn workspaces
yarn

kitty --title='static data server' yarn --cwd $SCRIPTPATH/staticDataServer/ run start & 

kitty --title='frontend' yarn --cwd $SCRIPTPATH/frontend/ run start & 

kitty --title='lobbyWSS' yarn --cwd $SCRIPTPATH/lobbyWSS/ run start &

kitty --title='gameWSS' yarn --cwd $SCRIPTPATH/gameWSS/ run start &

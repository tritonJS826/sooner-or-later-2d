#!/bin/bash

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# script for start all services
# script must be placed in the root of yarn workspaces
yarn

bash -ic "kitty --title='static data server' yarn --cwd $SCRIPTPATH/staticDataServer/ run start" & 

bash -ic "kitty --title='frontend' yarn --cwd $SCRIPTPATH/frontend/ run start" & 

bash -ic "kitty --title='lobbyWSS' yarn --cwd $SCRIPTPATH/lobbyWSS/ run start" &

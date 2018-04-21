#!/bin/bash

export PORT=5092
export MIX_ENV=prod
export GIT_PATH=/home/followsoccer/src/followsoccer

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "followsoccer" ]; then
	echo "Error: must run as user 'followsoccer'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/followsoccer ]; then
	echo mv ~/www/followsoccer ~/old/$NOW
	mv ~/www/followsoccer ~/old/$NOW
fi

mkdir -p ~/www/followsoccer
REL_TAR=~/src/followsoccer/_build/prod/rel/followsoccer/releases/0.0.1/followsoccer.tar.gz
(cd ~/www/followsoccer && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/followsoccer/src/followsoccer/start.sh
CRONTAB

#. start.sh

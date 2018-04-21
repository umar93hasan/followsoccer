#!/bin/bash

export PORT=5092

cd ~/www/followsoccer
./bin/followsoccer stop || true
./bin/followsoccer start

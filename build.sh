#!/usr/bin/env sh
# Produce Docker Image for webapp-back
docker build -t frontapp:latest -f ./dockerbuild .

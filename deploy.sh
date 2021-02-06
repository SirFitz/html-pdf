#!/bin/bash

PORT="${PORT:-3007}"
git pull
docker build -t html-pdf-img .
docker kill html-pdf
docker rm html-pdf
docker run -d -p $PORT:3007 --restart=unless-stopped --name=html-pdf html-pdf-img

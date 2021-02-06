#!/bin/bash

docker run -d -p 3007:3007 --name html-pdf --restart unless-stopped html-pdf-img

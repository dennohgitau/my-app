#!/bin/bash
cd /var/www/html/my-app
pm2 stop my-app || true
pm2 start src/index.js --name my-app
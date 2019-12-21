#!/bin/sh

node proxy.js &
sleep 1s
npx ng serve

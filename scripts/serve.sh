#!/usr/bin/env bash
set -euo pipefail

# start the webserver pointing to the build directory
ws -c -p 8080 -d build


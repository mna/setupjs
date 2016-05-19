#!/usr/bin/env bash
set -euo pipefail

nodemon -e js,jade,sass -w src -x 'npm run --silent build' &
npm run --silent serve


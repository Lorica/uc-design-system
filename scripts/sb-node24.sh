#!/usr/bin/env bash
# Launch Storybook on Node 24 with the OpenSSL legacy provider that webpack 4 needs.
# Used by .claude/launch.json for the Preview tool. Respects $PORT (autoPort).
set -e
cd "$(dirname "$0")/.."
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 24.15.0 >/dev/null 2>&1 || true
export NODE_OPTIONS=--openssl-legacy-provider
export PATH="$PWD/node_modules/.bin:$PATH"
exec start-storybook -p "${PORT:-6006}" --ci

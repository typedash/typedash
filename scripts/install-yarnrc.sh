#!/bin/sh

echo "npmAuthToken: \"$NPM_TOKEN\"
npmRegistryServer: https://registry.npmjs.org" > $HOME/.yarnrc.yml

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > $HOME/.npmrc
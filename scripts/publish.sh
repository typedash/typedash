#!/bin/sh

yarn build:changed # Executes TypeScript and allows lint to work properly
yarn lint:changed
yarn test:changed
yarn _changeset version
yarn _changeset publish
git push --follow-tags

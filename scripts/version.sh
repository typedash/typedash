#!/bin/sh

# Update versions, this commits the changes (based on `.changeset/config.json`).
changeset version

# Need the immutable installs flag so CI doesn't fail when installing.
YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install

# Commit `yarn.lock` changes.
git add --all
git commit -m "yarn.lock [skip ci]" || exit 0
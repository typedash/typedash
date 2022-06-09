#!/bin/sh

###############################################################################
## Functions ##################################################################
###############################################################################

installingFromBrew () {
  echo "✅ 'brew' found, installing 'hygen' globally..."
  brew tap jondot/tap
  brew install hygen
}

installingFromNpm () {
  echo "✅ 'npm' found, installing 'hygen' globally..."
  npm i -g hygen
}

useYarnDlx () {
  echo "❌ 'brew' and/or 'npm' could not be found, you can install either of them and run this again to have 'hygen' installed globally. 
    In the meantime, you can use 'hygen' via 'yarn dlx'. For example 'yarn dlx hygen generator new foo-bar'".
}

###############################################################################
## Script #####################################################################
###############################################################################

echo "👷‍♂️ Running setup script..."

husky install

# Yarn Berry setup for VSCode (still need to select version in editor)
yarn dlx @yarnpkg/sdks vscode

# Globally install scaffolding tool.
if [[ $OSTYPE == 'darwin'* ]]; then
  if command -v brew &> /dev/null; then
    installingFromBrew
  elif command -v npm &> /dev/null; then
    installingFromNpm
  else
    useYarnDlx
  fi 
else
  if command -v npm &> /dev/null; then
    installingFromNpm
  else
    useYarnDlx
  fi
fi

echo "✅ Done!"

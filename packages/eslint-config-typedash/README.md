# @typedash/eslint-config-typedash

Centralized and shared ESLint configuration.

## Install

```sh
npm install --save-dev @typedash/eslint-config-typedash
```

```sh
yarn add --dev @typedash/eslint-config-typedash
```

## Usage: Monorepo

Using this package in the monorepo is slightly different than outside because we leverage a root level `.eslintrc.js` file that all the packages read from. So when you make a new package, you don't need to do anything related with that file, just make sure you have `eslint` and this package in your `devDependencies` list. Note, if you use `hygen` to generate your package, this is done for you and there's nothing you need to do to have `eslint` wired up.

`package.json`

```json
{
  "devDependencies": {
    "@typedash/eslint-config-typedash": "1.0.0",
    "eslint": "8.9.0"
  }
}
```

## Usage: External Project

After installing this dev dependency, you'll just need to make sure you also install `eslint`. After doing so, both should be in your `devDependencies` list (see above). From there, you'll just need to create an `eslint` configuration file and reference this package in your `extends` block.

`.eslintrc.js`

```js
// @ts-ignore
module.exports = {
  extends: ['@typedash/eslint-config-typedash'],
}
```

Wire up some `scripts` to run `eslint` and you're all set!

`package.json`

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "lint:fix": "yarn lint --fix"
  },
  "devDependencies": {
    "@typedash/eslint-config-typedash": "1.0.0",
    "eslint": "8.9.0"
  }
}
```

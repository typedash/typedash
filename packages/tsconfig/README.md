# @typedash/tsconfig

Centralized and shared TypeScript configuration.

## Install

```sh
npm install --save-dev @typedash/tsconfig
```

```sh
yarn add --dev @typedash/tsconfig
```

## Usage: Monorepo

If you're consuming this package from inside the monorepo, then we can leverage a root level configuration (that extends this package's tsconfig) that adds paths. This allows for any package in the monorepo to perform a `build` without building all the sibling dependencies first! This is accomplished via the `paths` configuration that maps `@typedash` to sibling `src` directories (instead of the `dist`).

`tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/esm"
  },
  "include": ["./src"]
}
```

If you intend on publishing your project/package, you should also include a `cjs` configuration to emit both `esm` and `commonjs`.

`tsconfig.cjs.json`

```json
{
  "extends": "../../tsconfig.cjs.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/cjs"
  },
  "include": ["./src"]
}
```

_NOTE:_ Don't forget to add local path `"references"` to the sibling packages you depend on. See the [README.md at the root of this monorepo](../../README.md#dependency-management) for more information.

## Usage: External Project

Configuration for usage outside the monorepo is exactly the same, except you'll refer to this package directly. Here's the normal usage for a project that doesn't intend on publishing consumable assets.

`tsconfig.json`

```json
{
  "extends": "@typedash/tsconfig/tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/esm"
  },
  "include": ["./src"]
}
```

If you intend on publishing your project/package, you should also include a `cjs` configuration to emit both `esm` and `commonjs`.

`tsconfig.cjs.json`

```json
{
  "extends": "@typedash/tsconfig/tsconfig.cjs.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/cjs"
  },
  "include": ["./src"]
}
```

---
to: packages/<%= name %>/package.json
---

{
  "name": "@typedash/<%= name %>",
  "version": "0.0.0",
  "description": "<%= h.changeCase.titleCase(name) %>",
  "license": "MIT",
  "sideEffects": false,
  "files": [
    "src",
    "dist"
  ],
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/cjs/index.d.ts",
  "scripts": {
    "prepublish": "yarn build",
    "clean": "rm -rf dist",
    "build": "echo \"Building...\" && yarn clean && run-p build:cjs build:esm && echo \"Done building!\"",
    "build:cjs": "yarn tsc --build ./tsconfig.cjs.json",
    "build:esm": "yarn tsc --build ./tsconfig.json",
    "dev": "onchange -i \"src/**/*.ts\" -- yarn build",
    "lint": "eslint \"src/**/*.ts\"",
    "lint:fix": "yarn lint --fix",
    "format": "prettier --write . !./dist",
    "test": "echo \"N/A\""
  },
  "dependencies": {
    "@typedash/typedash": "<%= versions.typedash %>",
    "axios": "0.24.0",
    "zod": "3.14.2"
  },
  "devDependencies": {
    "@typedash/eslint-config-typedash": "<%= versions.eslintConfigtypedash %>",
    "@typedash/prettier": "<%= versions.prettier %>",
    "@typedash/tsconfig": "<%= versions.tsconfig %>",
    "eslint": "8.9.0",
    "npm-run-all": "4.1.5",
    "onchange": "7.1.0",
    "prettier": "2.5.1",
    "typescript": "^4.8.4"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}

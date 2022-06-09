---
to: packages/<%= name %>/tsconfig.json
---

{
  "extends": "../../tsconfig.json",
  "references": [{ "path": "../typedash" }],
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/esm"
  },
  "include": ["./src"]
}

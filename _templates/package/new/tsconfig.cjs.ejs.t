---
to: packages/<%= name %>/tsconfig.cjs.json
---

{
  "extends": "../../tsconfig.cjs.json",
  "references": [{ "path": "../typedash" }],
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/cjs"
  },
  "include": ["./src"]
}

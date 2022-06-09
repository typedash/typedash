---
to: packages/<%= name %>/tsconfig.cjs.json
---

{
  "extends": "../../tsconfig.cjs.json",
  "references": [{ "path": "../utils" }],
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/cjs"
  },
  "include": ["./src"]
}

---
to: packages/<%= name %>/tsconfig.json
---

{
  "extends": "../../tsconfig.json",
  "references": [{ "path": "../utils" }],
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist/esm"
  },
  "include": ["./src"]
}

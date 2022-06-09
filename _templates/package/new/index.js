const esbuildPackage = require('../../../packages/esbuild/package.json')
const eslintConfigtypedashPackage = require('../../../packages/eslint-config-typedash/package.json')
const prettierPackage = require('../../../packages/prettier/package.json')
const tsconfigPackage = require('../../../packages/tsconfig/package.json')
const utilsPackage = require('../../../packages/utils/package.json')

module.exports = {
  params: ({ args }) => ({
    ...args,
    versions: {
      esbuild: esbuildPackage.version,
      eslintConfigtypedash: eslintConfigtypedashPackage.version,
      prettier: prettierPackage.version,
      tsconfig: tsconfigPackage.version,
      utils: utilsPackage.version,
    },
  }),
}

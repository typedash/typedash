const eslintConfigTypedashPackage = require('../../../packages/eslint-config-typedash/package.json')
const prettierPackage = require('../../../packages/prettier/package.json')
const tsconfigPackage = require('../../../packages/tsconfig/package.json')
const typedashPackage = require('../../../packages/typedash/package.json')

module.exports = {
  params: ({ args }) => ({
    ...args,
    versions: {
      eslintConfigTypedash: eslintConfigTypedashPackage.version,
      prettier: prettierPackage.version,
      tsconfig: tsconfigPackage.version,
      typedash: typedashPackage.version,
    },
  }),
}

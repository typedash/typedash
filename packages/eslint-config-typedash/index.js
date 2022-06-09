module.exports = {
  // NOTE: Need this for the monorepo, need to validate it works outside
  //       https://github.com/eslint/eslint/issues/13385#issuecomment-641252879
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
    '@typescript-eslint',
    'import',
    'prettier',
    // https://github.com/yannickcr/eslint-plugin-react
    'react',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks',
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'jsx-a11y',
    // https://github.com/testing-library/eslint-plugin-testing-library
    'testing-library',
    // https://github.com/testing-library/eslint-plugin-jest-dom
    'jest-dom',
    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  settings: {
    react: {
      // Tells `eslint-plugin-react` to detect the version of React to use.
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': ['error', { excludeTags: ['example'] }],
    'jsdoc/no-types': 'error',
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': ['error', { descriptionStyle: 'tag' }],
    // NOTE: Off due to amount of existing code that doesn't comply.
    // 'jsdoc/require-example': 'error',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // allow node `require`s for config files like esbuild (build.js)
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      },
    },
  ],
}

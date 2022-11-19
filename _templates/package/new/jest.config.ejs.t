---
to: packages/<%= name %>/jest.config.js
---

const path = require('path')

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    // https://github.com/samhh/fp-ts-std/issues/89#issue-1064440505
    'fp-ts-std/(.*)': 'fp-ts-std/dist/cjs/$1',
    '^@typedash/(.*)$': path.join(__dirname, '../$1/src'),
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

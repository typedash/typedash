const esmDeps = ['mem', 'p-memoize', 'mimic-fn'].join('|')

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    // https://github.com/samhh/fp-ts-std/issues/89#issue-1064440505
    'fp-ts-std/(.*)': 'fp-ts-std/dist/cjs/$1',
  },
  transformIgnorePatterns: [`.*node_modules/(?!(${esmDeps}).*)`],
  transform: {
    // use babel to transform esm syntax in js files
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['@babel/preset-env'] }],
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
}

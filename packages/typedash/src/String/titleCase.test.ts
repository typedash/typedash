import { titleCase } from './titleCase'

test.each([
  ['something', 'Something'],
  ['something-dashed', 'Something Dashed'],
  ['something_underscored', 'Something Underscored'],
  ['something spaced', 'Something Spaced'],
  ['has23numbers', 'Has23numbers'],
  ['someUppers', 'SomeUppers'],
  ['', ''],
  ['   ', '   '],
])('(%p) => %p', (x, expected) => {
  expect(titleCase(x)).toEqual(expected)
})

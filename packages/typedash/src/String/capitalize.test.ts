import { capitalize } from './capitalize'

test.each([
  ['something', 'Something'],
  ['has23numbers', 'Has23numbers'],
  ['someUppers', 'SomeUppers'],
  ['', ''],
  ['   ', '   '],
])('(%p) => %p', (x, expected) => {
  expect(capitalize(x)).toEqual(expected)
})

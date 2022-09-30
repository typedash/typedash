import { removeSpecialCharacters } from './removeSpecialCharacters'

test.each([
  ['something', 'something'],
  ['cinc-123_foobar', 'cinc-123_foobar'],
  ['Has23Numbers', 'has23numbers'],
  ['SomeUppers', 'someuppers'],
  ['has.a.dot', 'hasadot'],
  ['!@#$%^&*()', ''],
])('(%p) => %p', (x, expected) => {
  expect(removeSpecialCharacters(x)).toEqual(expected)
})

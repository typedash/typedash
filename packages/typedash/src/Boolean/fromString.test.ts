import { fromString } from './fromString'

test.each([
  ['true', true],
  ['false', false],
  ['wat', false],
  [undefined, false],
])('(%p) => %p', (x, expected) => {
  expect(fromString(x)).toEqual(expected)
})

import { rotateLeft } from './rotateLeft.js'

test.each([
  [0, [], []],
  [0, [1], [1]],
  [0, [1, 2], [1, 2]],
  [1, [1, 2, 3], [2, 3, 1]],
  [1, [1], [1]],
  [1, [], []],
  [2, [1, 2, 3], [3, 1, 2]],
  [3, [1, 2, 3], [1, 2, 3]],
])('(%p)(%p) => %p', (n, xs, expected) => {
  expect(rotateLeft(n)(xs)).toEqual(expected)
})

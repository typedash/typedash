import { rotate } from './rotate'

test.each([
  [
    [1, 2, 3],
    [2, 3, 1],
  ],
  [[1], [1]],
  [[], []],
])('%p => %p', (xs, expected) => {
  expect(rotate(xs)).toEqual(expected)
})

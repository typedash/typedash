import { isOdd } from './isOdd'

test.each([
  [2, false],
  [1, true],
  [0, false],
  [958, false],
  [877, true],
  [-2, false],
  [-1, true],
])('%p => %p', (data, expected) => {
  expect(isOdd(data)).toEqual(expected)
})

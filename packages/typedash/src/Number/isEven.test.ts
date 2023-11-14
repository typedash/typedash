import { isEven } from './isEven'

test.each([
  [2, true],
  [1, false],
  [0, true],
  [958, true],
  [877, false],
  [-2, true],
  [-1, false],
])('%p => %p', (data, expected) => {
  expect(isEven(data)).toEqual(expected)
})

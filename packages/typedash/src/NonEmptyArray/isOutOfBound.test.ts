import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import * as NEA from './_external'
import { isOutOfBound } from './isOutOfBound'

test.each([
  [1, [1, 2, 3], O.some(false)],
  [3, [1, 2, 3], O.some(true)],
  [-2, [1, 2, 3], O.some(true)],
])('isOutOfBound', (i, as, expected) => {
  const data = pipe(
    as,
    NEA.fromArray,
    O.map((x) => isOutOfBound(i, x)),
  )
  expect(data).toEqual(expected)
})

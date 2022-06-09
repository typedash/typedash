import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import * as NEA from './_external'
import { lookup } from './lookup'

test.each([
  [1, [1, 2, 3], O.some(2)],
  [3, [1, 2, 3], O.none],
  [-1, [1, 2, 3], O.some(3)],
  [-3, [1, 2, 3], O.some(1)],
  [-4, [1, 2, 3], O.none],
])('lookup', (i, as, expected) => {
  const data = pipe(as, NEA.fromArray, O.chain(lookup(i)))
  expect(data).toEqual(expected)
})

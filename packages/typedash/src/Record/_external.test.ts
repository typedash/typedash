import * as A from '../Array/_external'
import { pipe } from '../function/_external'
import * as R from './_external'
import { prop as R_prop } from './prop'

describe('values', () => {
  test('should return an array of values', () => {
    expect(R.values({ foo: 1, bar: 2, baz: 3 })).toEqual([1, 2, 3])
  })

  test('should have types flow', () => {
    const data: Record<string, { numbers: Array<number> }> = {
      numbers: { numbers: [5, 6, 7] },
    }
    expect(
      pipe(
        data,
        R.values,
        A.map(R_prop('numbers')),
        A.flatten,
        A.mapWithIndex((i, pageNumber) => pageNumber - i - 1),
      ),
    ).toEqual([4, 4, 4])
  })
})

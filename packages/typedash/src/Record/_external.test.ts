import * as A from '../Array/_external'
import { pipe } from '../function/_external'
import * as R from './_external'
import { prop as R_prop } from './prop'

describe('values', () => {
  test('should return an array of values', () => {
    expect(R.values({ foo: 1, bar: 2, baz: 3 })).toEqual([1, 2, 3])
  })

  test('`omitRecord` with `values` types flowing', () => {
    const data: Record<string, { numbers: Array<number> }> = {
      numbers: { numbers: [5, 6, 7] },
    }
    const omitProp = 'someProp' as string
    expect(
      pipe(
        data,
        R.omitRecord([omitProp]),
        R.values,
        A.map(R_prop('numbers')),
        A.flatten,
        A.mapWithIndex((i, number) => number - i - 1),
      ),
    ).toEqual([4, 4, 4])
  })
})

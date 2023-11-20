import { equals, flow, pipe } from '../function/_external'
import { prop as R_prop } from '../Record/prop'
import { reject } from './reject'

test('rejects items from the array for which the predicate holds', () => {
  const isEven = (n: number) => n % 2 === 0
  expect(reject(isEven)([1, 2, 3, 4])).toEqual([1, 3])
})

test('handles types well', () => {
  type Foo = {
    bar: {
      id: number
    }
  }
  const foos: Array<Foo> = [
    {
      bar: {
        id: 1,
      },
    },
    {
      bar: {
        id: 2,
      },
    },
  ]
  expect(
    pipe(foos, reject(flow(R_prop('bar'), R_prop('id'), equals(2)))),
  ).toEqual([
    {
      bar: {
        id: 1,
      },
    },
  ])
})

import { pipe } from '../function/_external.js'
import * as A from './_external.js'

/**
 * @description
 * Like `A.map`, but handles an iterator that returns a promise (or not).
 * This will run the operations in a sequence, not parallel
 *
 * @example
 * await pipe(
 *   [1, 2, 3],
 *   A.mapPSeq((x: number) => Promise.resolve(x + 1)),
 *   // [2, 3, 4]
 * )
 */
export const mapPSeq =
  <T, R>(xf: (value: T) => Promise<R> | R) =>
  (data: Array<T>): Promise<Array<R>> =>
    pipe(
      data == null ? [] : data,
      A.reduce(
        Promise.resolve([] as Array<R>),
        (acc: Promise<Array<R>>, x: T) =>
          acc.then(async (res: Array<R>) => {
            const xr = await xf(x)
            return [...res, xr]
          }),
      ),
    )

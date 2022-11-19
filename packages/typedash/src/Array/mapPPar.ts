import { pipe } from '../function/_external'
import * as A from './_external'

/**
 * @description
 * Like `A.map`, but handles an iterator that returns a promise (or not).
 * Runs operations in parallel
 *
 * @example
 * await pipe(
 *   [1, 2, 3],
 *   A.mapPSeq((x: number) => Promise.resolve(x + 1)),
 * ) // [2, 3, 4]
 */
export const mapPPar =
  <T, R>(xf: (value: T) => Promise<R> | R) =>
  (data: Array<T>): Promise<Array<R>> =>
    pipe(data == null ? [] : data, A.map(xf), (x) => Promise.all(x))

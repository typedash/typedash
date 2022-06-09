import { pipe } from '../function/_external'
import { prop } from '../Record/prop'
import * as A from './_external'

/**
 * @description
 * Shuffles the order of an array using Math.random
 *
 * @example
 * A.shuffle([0, 1, 2, 3])
 * // [3, 0, 1, 2]
 */
export const shuffle = <T = unknown>(arr: Array<T>): Array<T> =>
  pipe(
    arr,
    A.map((value) => ({
      value,
      sort: Math.random(),
    })),
    A.sortBy(prop('sort')),
    A.map(prop('value')),
  )

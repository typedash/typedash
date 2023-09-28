import { flow, pipe } from '../function/_external'
import * as O from '../Option'
import * as E from './_external'

/**
 * @description Allows binding an option more easily.
 *
 * @example
 * pipe(
 *   E.Do,
 *   E.bindValue('numArray', () => [1, 2, 3]),
 *   E.bindOption('headNumber', ({ numArray }) =>
 *     A.head(numArray)
 *   )
 * )
 */
export const bindOption =
  <N extends string, A, E, B>(
    name: Exclude<N, keyof A>,
    f: (a: A) => O.Option<B>,
  ) =>
  (ma: E.Either<E, A>) =>
    pipe(ma, E.bindW(name, flow(f, E.right)))

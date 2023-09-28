import { flow, pipe } from '../function/_external'
import * as O from '../Option'
import * as TE from './_external'

/**
 * @description Allows binding an option more easily.
 *
 * @example
 * pipe(
 *   TE.Do,
 *   TE.bindValue('numArray', () => [1, 2, 3]),
 *   TE.bindOption('headNumber', ({ numArray }) =>
 *     A.head(numArray)
 *   )
 * )
 */
export const bindOption =
  <N extends string, A, E, B>(
    name: Exclude<N, keyof A>,
    f: (a: A) => O.Option<B>,
  ) =>
  (ma: TE.TaskEither<E, A>) =>
    pipe(ma, TE.bindW(name, flow(f, TE.right)))

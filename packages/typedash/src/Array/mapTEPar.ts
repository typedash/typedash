import { pipe } from '../function/_external'
import * as TE from '../TaskEither/_external'
import * as A from './_external'

/**
 * @description
 * Like `A.map`, but handles an iterator that returns a TaskEither.
 * Runs operations in parallel.
 *
 * @example
 * await pipe(
 *   [1, 2, 3],
 *   A.mapTEPar((x) => TE.of(x + 1)),
 * ) // [2, 3, 4]
 */
export const mapTEPar =
  <E, A, B>(xf: (a: A) => TE.TaskEither<E, B>) =>
  (fa: Array<A>): TE.TaskEither<E, Array<B>> =>
    pipe(fa, A.map(xf), A.sequence(TE.ApplicativePar))

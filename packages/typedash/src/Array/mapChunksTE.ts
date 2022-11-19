import * as DATE from '../Date/_external'
import { flow, pipe } from '../function/_external'
import * as TE from '../TaskEither/_external'
import { tapSleep as TE_tapSleep } from '../TaskEither/tapSleep'
import * as A from './_external'
import { mapTEPar } from './mapTEPar'
import { mapTESeq } from './mapTESeq'

/**
 * @description
 * Allows you to map over an array, apply a TE returning function to
 * each element, and perform the function in chunks while waiting after
 * each chunk. This can be useful for working with "10 per second" rate
 * limit APIs.
 *
 * @see A.mapTESeq
 * @see A.mapTEPar
 *
 * @example
 * const mapChunksTE = mapChunksTE2({
 *   chunks: 9,
 *   ms: Date.mkMilliseconds 1000
 * })
 *
 * await pipe(
 *   [1, 2, 3],
 *   mapChunksTE((x) => TE.of(x + 1)),
 * ) // [2, 3, 4]
 */
export const mapChunksTE2 =
  ({ chunksOf, ms }: { chunksOf: number; ms: DATE.Milliseconds }) =>
  <E, A, B>(xf: (a: A) => TE.TaskEither<E, B>) =>
  (fa: Array<A>): TE.TaskEither<E, Array<B>> =>
    pipe(
      fa,
      A.chunksOf(chunksOf),
      mapTESeq(flow(mapTEPar(xf), TE_tapSleep(ms))),
      TE.map(A.flatten),
    )

import * as DATE from '../Date/_external'
import { flow, pipe } from '../function/_external'
import * as P from '../Promise/_external'
import { tapSleep as P_tapSleep } from '../Promise/tapSleep'
import * as A from './_external'
import { mapPPar } from './mapPPar'
import { mapPSeq } from './mapPSeq'

/**
 * @description
 * Allows you to map over an array, apply a Promise returning function to
 * each element, and perform the function in chunks while waiting after
 * each chunk. This can be useful for working with "10 per second" rate
 * limit APIs.
 *
 * @see A.mapPSeq
 * @see A.mapPPar
 *
 * @example
 * const mapChunksP = mapChunksP2({
 *   chunks: 9,
 *   ms: Date.mkMilliseconds 1000
 * })
 *
 * await pipe(
 *   [1, 2, 3],
 *   mapChunksP((x) => Promise.resolve(x + 1)),
 * ) // [2, 3, 4]
 */
export const mapChunksP2 =
  ({ chunksOf, ms }: { chunksOf: number; ms: DATE.Milliseconds }) =>
  <A, B>(xf: (a: A) => Promise<B>) =>
  (fa: Array<A>): Promise<Array<B>> =>
    pipe(
      fa,
      A.chunksOf(chunksOf),
      mapPSeq(flow(mapPPar(xf), P_tapSleep(ms))),
      P.then(A.flatten),
    )

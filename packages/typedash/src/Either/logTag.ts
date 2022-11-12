/* eslint-disable no-console */
import { pipe } from '../function/_external'
import { tapLogTag } from '../function/tapLogTag'
import * as E from './_external'

/**
 * @description
 * Logs the value inside the E.
 *
 * @example
 * pipe(
 *   E.right('userId_5'),
 *   E.logTag('tag'), // console.log('tag', 'userId_5')
 *   E.map((x) => x), // x is still `userId_5`
 *   ...
 * )
 */
export const logTag =
  (tag: string) =>
  <E, A>(ma: E.Either<E, A>): E.Either<E, A> =>
    pipe(ma, E.map(tapLogTag(tag)))

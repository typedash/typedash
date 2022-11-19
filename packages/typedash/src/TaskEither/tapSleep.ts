import * as DATE from '../Date/_external'
import { pipe } from '../function/_external'
import * as T from '../Task/_external'
import * as TE from './_external'

/**
 * @description
 * Wait for the specified number of seconds before resolving.
 * Helper for `TE.chainFirstTaskK(() => T.sleep(DATE.mkMilliseconds(1000)))`
 *
 * @example
 * pipe(
 *   TE.of('foo'),
 *   TE.tapSleep(DATE.mkMilliseconds(1_000)),
 * )
 */
export const tapSleep =
  (n: DATE.Milliseconds) =>
  <E, A>(ma: TE.TaskEither<E, A>): TE.TaskEither<E, A> =>
    pipe(
      ma,
      TE.chainFirstTaskK(() => T.sleep(n)),
    )

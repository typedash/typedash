import * as DATE from '../Date/_external'
import { pipe } from '../function/_external'
import * as T from '../Task/_external'
import * as TO from './_external'

/**
 * @description
 * Wait for the specified number of seconds before resolving.
 * Helper for `TO.chainFirstTaskK(() => T.sleep(DATE.mkMilliseconds(1000)))`
 *
 * @example
 * pipe(
 *   TO.of('foo'),
 *   TO.tapSleep(DATE.mkMilliseconds(1_000)),
 * )
 */
export const tapSleep =
  (n: DATE.Milliseconds) =>
  <A>(ma: TO.TaskOption<A>): TO.TaskOption<A> =>
    pipe(
      ma,
      TO.chainFirstTaskK(() => T.sleep(n)),
    )

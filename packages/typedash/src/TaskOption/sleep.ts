import * as DATE from '../Date/_external'
import { sleep as P_sleep } from '../Promise/sleep'
import * as TO from './_external'

/**
 * @description
 * Wait for the specified number of seconds before resolving.
 * Helper for `TO.chainFirstTaskK(() => T.sleep(DATE.mkMilliseconds(1000)))`
 *
 * @see T.sleep
 *
 * @example
 * pipe(
 *   TO.of('foo'),
 *   TO.chainFirst(TO.sleep(mkMilliseconds(1_000))),
 * )
 */
export const sleep = (n: DATE.Milliseconds) => () =>
  TO.tryCatch(() => P_sleep(n))

import * as DATE from '../Date/_external'
import { throwNewErrorThunk } from '../function'
import { sleep as P_sleep } from '../Promise/sleep'
import * as TE from './_external'

/**
 * @description
 * Wait for the specified number of seconds before resolving.
 * Helper for `TE.chainFirstTaskK(() => T.sleep(DATE.mkMilliseconds(1000)))`
 *
 * @see T.sleep
 *
 * @example
 * pipe(
 *   TE.of('foo'),
 *   TE.chainFirst(TE.sleep(mkMilliseconds(1_000))),
 * )
 */
export const sleep = (n: DATE.Milliseconds) => () =>
  TE.tryCatch(() => P_sleep(n), throwNewErrorThunk('Not possible'))

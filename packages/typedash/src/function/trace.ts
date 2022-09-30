import * as O from '../Option/_external'
import { stringify } from '../String/stringify'
import { defaultTo, pipe } from './_external'

/**
 * @description
 *   Useful for logging inside a pipe/_
 *
 * @note
 *   Not using `Logger` because this function should not know about that module,
 *   only specify what is going to be used. You can leave out the `logger` and
 *   this method will just use `console`.
 */
export const trace =
  ({
    logger,
    tag,
  }: {
    logger?: { info: (data: unknown) => void }
    tag?: string
  } = {}) =>
  <A>(x: A): A => {
    const logger_ = defaultTo(console, logger)

    pipe(tag, O.fromNullable, O.map(logger_.info))
    pipe(x, stringify, logger_.info)

    return x
  }

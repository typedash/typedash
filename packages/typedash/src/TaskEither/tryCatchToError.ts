import * as E from '../Either'
import { Lazy } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Alias for `TE.tryCatch` that loads a sane default for the
 * error handler (`E.toError`)
 *
 * @example
 * pipe(
 *  TE.tryCatchToError(() => new Promise(5)),
 *  TE.map(x => x + 1),
 * )
 */
export const tryCatchToError = <A>(fn: Lazy<Promise<A>>) =>
  TE.tryCatch(fn, E.toError)

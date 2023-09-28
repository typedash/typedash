import * as E from '../Either'
import * as TE from './_external'

/**
 * @description
 * Alias for `TE.tryCatchK` that loads a sane default for the
 * error handler (`E.toError`)
 *
 * @example
 * pipe(
 *  12345,
 *  TE.tryCatchKToError(fetchUserById),
 *  TE.map(R.prop('name')),
 * )
 */
export const tryCatchKToError = <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Promise<B>,
) => TE.tryCatchK(f, E.toError)

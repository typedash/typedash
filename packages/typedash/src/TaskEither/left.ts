import * as TE from './_external'

/**
 * @description
 * Same as `fp-ts.Either.left` but doesn't allow for the "right" to be inferred
 * so you always end up with `TE.TaskEither<E, never>`. The original `left`
 * method is exported as `TE._left` if you need it.
 *
 * @example
 * pipe(
 *   TE.left(new Error('Danger Will Robinson'))
 *   TE.map(x => x),
 * )
 */
export const left = <E = never>(e: E) => TE._left<E, never>(e)

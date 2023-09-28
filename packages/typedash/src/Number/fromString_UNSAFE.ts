import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import * as N from './_external'

/**
 * @description Eagerly unwraps the `Option` from `N.fromString`
 *
 * @example
 * pipe(
 *   '5',
 *   N.fromString_UNSAFE,
 * ) // 5
 */
export const fromString_UNSAFE = (string: string) =>
  pipe(string, N.fromString, O.unsafeUnwrap)

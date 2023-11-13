import { pipe } from '../function/_external'
import * as O from '../Option/_external'
import * as N from './_external'

/**
 * @description Eagerly unwraps the `Option` from `N.integerFromString`
 *
 * @example
 * pipe(
 *   '5.5',
 *   N.integerFromString_UNSAFE,
 * ) // 5
 */
export const integerFromString_UNSAFE = (string: string) =>
  pipe(string, N.integerFromString, O.unsafeUnwrap)

import { P, match } from 'ts-pattern'
import { constFalse, constTrue } from '../function/_external'

/**
 * @description Convert string to a boolean.
 *
 * @example
 * B.fromString('true') => true
 * B.fromString('false') => false
 * B.fromString('wat') => false
 * B.fromString(undefined) => false
 */
export const fromString = (data: string | undefined): boolean =>
  match(data)
    .with(undefined, constFalse)
    .when((x) => x === 'true', constTrue)
    .when((x) => x === 'false', constFalse)
    .with(P.string, constFalse)
    .exhaustive()

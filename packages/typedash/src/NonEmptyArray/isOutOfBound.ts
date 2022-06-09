import * as NEA from './_external'

/**
 * @description
 * Predicate to tell if an index is out of bounds of an array.
 *
 * @internal
 * TODO: Could export this.
 */
export const isOutOfBound = <A>(i: number, as: NEA.NonEmptyArray<A>): boolean =>
  i < 0 || i >= as.length

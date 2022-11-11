import * as NEA from '../NonEmptyArray/_external'

export const fromNonEmptyArray = <T>(x: NEA.NonEmptyArray<T>): Array<T> =>
  x.slice()

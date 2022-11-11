import { pipe } from '../function'
import * as NEA from '../NonEmptyArray/_external'
import * as RNEA from '../ReadonlyNonEmptyArray/_external'
import { fromNonEmptyArray } from './fromNonEmptyArray'

export const fromReadonlyNonEmptyArray = <T>(
  x: RNEA.ReadonlyNonEmptyArray<T>,
): Array<T> => pipe(x, NEA.fromReadonlyNonEmptyArray, fromNonEmptyArray)

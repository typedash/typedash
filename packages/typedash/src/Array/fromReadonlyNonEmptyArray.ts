import { pipe } from '../function/index.js'
import * as NEA from '../NonEmptyArray/_external.js'
import * as RNEA from '../ReadonlyNonEmptyArray/_external.js'
import { fromNonEmptyArray } from './fromNonEmptyArray.js'

export const fromReadonlyNonEmptyArray = <T>(
  x: RNEA.ReadonlyNonEmptyArray<T>,
): Array<T> => pipe(x, NEA.fromReadonlyNonEmptyArray, fromNonEmptyArray)

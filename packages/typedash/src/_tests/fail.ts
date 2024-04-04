import { tapLogData } from '../function/tapLogData'
import { R, pipe, throwError } from '../index'

export const fail = <
  T extends { constructor: unknown; toString: unknown; format: unknown },
>(
  x: T,
) =>
  pipe(x, R.omit(['constructor', 'toString', 'format']), tapLogData, throwError)

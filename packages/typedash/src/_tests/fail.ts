import { tapLog } from '../function/tapLogData'
import { R, flow, throwError } from '../index'

export const fail = flow(
  R.omit(['constructor', 'toString', 'format']),
  tapLog,
  throwError,
)

import { tapLog } from '../function/tapLog'
import { R, flow, throwError } from '../index'

export const fail = flow(
  R.omit(['constructor', 'toString', 'format']),
  tapLog,
  throwError,
)

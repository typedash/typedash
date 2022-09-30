import { R, flow, throwError, trace } from '../index'

export const fail = flow(
  R.omit(['constructor', 'toString', 'format']),
  trace(),
  throwError,
)

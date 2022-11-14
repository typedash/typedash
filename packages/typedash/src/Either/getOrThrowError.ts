import { throwError } from '../function/throwError.js'
import * as E from './_external.js'

export const getOrThrowError = <E, A>(data: E.Either<E, A>): A | never =>
  E.getOrElseW(throwError)(data)

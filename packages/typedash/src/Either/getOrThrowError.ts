import { throwError } from '../function/throwError'
import * as E from './_external'

export const getOrThrowError = <E, A>(data: E.Either<E, A>): A | never =>
  E.getOrElseW(throwError)(data)

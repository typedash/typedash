import { pipe } from '../function/_external.js'
import { throwError } from '../function/throwError.js'
import * as T from '../Task/_external.js'
import * as TE from './_external.js'

export const getOrThrowError = <E, A>(
  data: TE.TaskEither<E, A>,
): T.Task<A> | never => pipe(data, TE.getOrElse(throwError))

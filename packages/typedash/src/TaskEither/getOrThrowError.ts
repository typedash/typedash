import { pipe } from '../function/_external'
import { throwError } from '../function/throwError'
import * as T from '../Task/_external'
import * as TE from './_external'

export const getOrThrowError = <E, A>(
  data: TE.TaskEither<E, A>,
): T.Task<A> | never => pipe(data, TE.getOrElse(throwError))

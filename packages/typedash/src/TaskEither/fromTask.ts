import * as _TE from 'fp-ts/TaskEither'
import * as T from '../Task/_external'
import * as TE from './_external'

export const fromTask = <A>(task: T.Task<A>): TE.TaskEither<never, A> =>
  _TE.fromTask(task)

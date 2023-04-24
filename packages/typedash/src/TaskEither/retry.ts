import { RetryPolicy, RetryStatus } from 'retry-ts'
import { retrying } from 'retry-ts/Task'
import { isLeft } from '../Either/_external'
import { pipe } from '../function'
import * as TE from './_external'
import { fromTask } from './fromTask'

const defaultActionLog = console.log

export const retry =
  (
    retryPolicy: RetryPolicy,
    actionLog: (status: RetryStatus) => unknown = defaultActionLog,
  ) =>
  <Args extends Array<unknown>, E, A>(
    fn: (...args: Args) => TE.TaskEither<E, A>,
  ) =>
  (...args: Args) =>
    pipe(
      retrying(
        retryPolicy,
        (status) => pipe(actionLog(status), () => fn(...args)),
        isLeft,
      ),
      fromTask,
      TE.chain(TE.fromEither),
    )

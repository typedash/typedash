import { newError } from '../function'
import * as TE from './_external'

const defaultOnRejected = (reason: unknown) =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  newError(`An error was encountered. ${reason}`)

export const lift =
  <OnRejected extends (error: unknown) => Error>(onRejected?: OnRejected) =>
  <Args extends Array<unknown>, Data>(fn: (...args: Args) => Promise<Data>) =>
  (...args: Args): TE.TaskEither<Error, Data> =>
    TE.tryCatch(() => fn(...args), onRejected || defaultOnRejected)

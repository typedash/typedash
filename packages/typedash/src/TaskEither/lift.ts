import { newError } from '../function'
import * as TE from './_external'

const defaultOnRejected = (reason: unknown) =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  newError(`An error was encountered. ${reason}`)

export const lift =
  <
    ProvidedOnRejected extends (error: unknown) => unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    OnRejected extends ProvidedOnRejected extends Function
      ? ProvidedOnRejected
      : typeof defaultOnRejected,
  >(
    onRejected?: ProvidedOnRejected,
  ) =>
  <Args extends Array<unknown>, Data>(fn: (...args: Args) => Promise<Data>) =>
  (...args: Args) => {
    const whenRejected = (onRejected ?? defaultOnRejected) as OnRejected
    return TE.tryCatch(() => fn(...args), whenRejected) as TE.TaskEither<
      ReturnType<OnRejected>,
      Data
    >
  }

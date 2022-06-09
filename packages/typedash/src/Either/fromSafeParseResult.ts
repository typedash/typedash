import { match } from 'ts-pattern'
import { SafeParseReturnType, ZodError } from 'zod'
import { left, right } from './_external'
import type { Either } from './_external'

/**
 * @description
 * Translate a Zod result to the Either Monad
 */
export const fromSafeParseResult = <Input, Output>(
  safeParseResult: SafeParseReturnType<Input, Output>,
): Either<ZodError<Input>, Output> =>
  match(safeParseResult)
    .with({ success: true }, ({ data }) => right(data))
    .with({ success: false }, ({ error }) => left(error))
    .exhaustive()

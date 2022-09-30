import { match } from 'ts-pattern'
import { ZodError } from 'zod'
import { Option, none, some } from './_external'

export type SafeParseResult_Success<Output> = {
  success: true
  data: Output
}
export type SafeParseResult_Error<Input> = {
  success: false
  error: ZodError<Input>
}
export type SafeParseResult<Output, Input> =
  | SafeParseResult_Success<Output>
  | SafeParseResult_Error<Input>

/**
 * @description
 * Translate a Zod result to the Option Monad
 */
export const fromSafeParseResult = <Output, Input>(
  safeParseResult: SafeParseResult<Output, Input>,
): Option<Output> =>
  match(safeParseResult)
    .with({ success: true }, ({ data }) => some(data))
    .with({ success: false }, () => none)
    .exhaustive()

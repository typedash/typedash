import { ParseParams, ZodError, ZodTypeAny } from 'zod'
import { pipe } from '../function/_external.js'
import * as TE from './_external.js'
import { fromSafeParseResult } from './fromSafeParseResult.js'

/**
 * @description
 * Constructs a TE by using a Zod Type to `parse` some
 * data and then translate the result.
 *
 * @example
 * pipe(
 *   'foo',
 *   TE.fromZodParse(z.string),
 *   TE.map(...) // data is 'foo'
 * )
 */
export const fromZodParse =
  <T extends ZodTypeAny>(schema: T, safeParams?: Partial<ParseParams>) =>
  (data: unknown): TE.TaskEither<ZodError<T['_input']>, T['_output']> =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    pipe(schema.safeParse(data, safeParams), (x) => x, fromSafeParseResult)

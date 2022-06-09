import { ParseParams, ZodError, ZodTypeAny } from 'zod'
import { pipe } from '../function/_external'
import { fromSafeParseResult } from './fromSafeParseResult'
import type { Either } from './_external'

/**
 * @description
 * Constructs a E by using a Zod Type to `parse` some
 * data and then translate the result.
 *
 * @example
 * pipe(
 *   'foo',
 *   E.fromZodParse(z.string),
 *   E.map(...) // data is 'foo'
 * )
 */
export const fromZodParse =
  <T extends ZodTypeAny>(schema: T, safeParams?: Partial<ParseParams>) =>
  (data: unknown): Either<ZodError<T['_input']>, T['_output']> =>
    pipe(schema.safeParse(data, safeParams), fromSafeParseResult)

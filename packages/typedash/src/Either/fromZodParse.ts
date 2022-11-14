import { ParseParams, ZodError, ZodTypeAny } from 'zod'
import { pipe } from '../function/_external.js'
import * as E from './_external.js'
import { fromSafeParseResult } from './fromSafeParseResult.js'

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
  (data: unknown): E.Either<ZodError<T['_input']>, T['_output']> =>
    pipe(schema.safeParse(data, safeParams), fromSafeParseResult)

import { ParseParams, ZodTypeAny } from 'zod'
import { pipe } from '../function/_external'
import { fromSafeParseResult } from './fromSafeParseResult'
import type { Option } from './_external'

/**
 * @description
 * Constructs an Option by using a Zod Type to `parse` some
 * data and then translate the result.
 *
 * @example
 * pipe(
 *   'foo',
 *   O.fromZodParse(z.string),
 *   O.map(...) // data is 'foo'
 * )
 */
export const fromZodParse =
  <T extends ZodTypeAny>(schema: T, safeParams?: Partial<ParseParams>) =>
  (data: unknown): Option<T['_output']> =>
    pipe(schema.safeParse(data, safeParams), fromSafeParseResult)

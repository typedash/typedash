import { ParseParams, ZodTypeAny } from 'zod'
import { pipe } from '../function/_external'
import * as TO from './_external'
import { fromSafeParseResult } from './fromSafeParseResult'

/**
 * @description
 * Constructs a TO by using a Zod Type to `parse` some
 * data and then translate the result.
 *
 * @example
 * pipe(
 *   'foo',
 *   TO.fromZodParse(z.string),
 *   TO.map(...) // data is 'foo'
 * )
 */
export const fromZodParse =
  <T extends ZodTypeAny>(schema: T, safeParams?: Partial<ParseParams>) =>
  (data: unknown): TO.TaskOption<T['_output']> =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    pipe(schema.safeParse(data, safeParams), (x) => x, fromSafeParseResult)

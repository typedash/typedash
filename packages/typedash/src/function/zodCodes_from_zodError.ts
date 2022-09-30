import { ZodError, ZodIssueCode } from 'zod'
import * as A from '../Array/_external'
import { prop as R_prop } from '../Record/prop'
import { pipe } from './_external'

export const zodCodes_from_zodError = <Input = unknown>(
  error: ZodError<Input>,
): Array<ZodIssueCode> => pipe(error, R_prop('errors'), A.map(R_prop('code')))

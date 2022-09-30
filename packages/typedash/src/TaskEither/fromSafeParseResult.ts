import { fromSafeParseResult as E_fromSafeParseResult } from '../Either/fromSafeParseResult'
import { flow } from '../function/_external'
import * as TE from './_external'

/**
 * @description
 * Helper for the common use case of translating a Zod
 * result straight to a TaskEither Monad.
 */
export const fromSafeParseResult = flow(E_fromSafeParseResult, TE.fromEither)

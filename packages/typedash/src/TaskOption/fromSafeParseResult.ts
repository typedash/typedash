import { fromSafeParseResult as E_fromSafeParseResult } from '../Either/fromSafeParseResult'
import { flow } from '../function/_external'
import * as TO from './_external'

/**
 * @description
 * Helper for the common use case of translating a Zod
 * result straight to a TaskOption Monad.
 */
export const fromSafeParseResult = flow(E_fromSafeParseResult, TO.fromEither)

import { lt as _lt } from 'ramda'
import { flip } from '../function/_external'

/**
 * @note This is a `flip` version of `ramda.lt`
 */
export const lt = flip(_lt)

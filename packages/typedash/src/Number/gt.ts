import { gt as _gt } from 'ramda'
import { flip } from '../function/_external'

/**
 * @note This is a `flip` version of `ramda.gt`
 */
export const gt = flip(_gt)

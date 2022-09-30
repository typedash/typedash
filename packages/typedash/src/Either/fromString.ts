import { z } from 'zod'
import { fromZodParse } from './fromZodParse'

export const fromString = fromZodParse(z.string().min(1))

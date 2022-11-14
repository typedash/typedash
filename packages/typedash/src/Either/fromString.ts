import { z } from 'zod'
import { fromZodParse } from './fromZodParse.js'

export const fromString = fromZodParse(z.string().min(1))

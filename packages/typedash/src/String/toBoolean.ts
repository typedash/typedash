import { match } from 'ts-pattern'
import { constFalse, constTrue } from '../function/_external'

export const toBoolean = (data: string): boolean =>
  match(data)
    .with('true', 'yes', 'y', '1', constTrue)
    .with('false', 'no', 'n', '0', constFalse)
    .otherwise(constFalse)

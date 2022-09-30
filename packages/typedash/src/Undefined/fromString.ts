import { P, match } from 'ts-pattern'
import { identity } from '../function/_external'

export const fromString = (data: string | undefined): string | undefined =>
  match(data)
    .with('', () => undefined)
    .with(P._, identity)
    .exhaustive()

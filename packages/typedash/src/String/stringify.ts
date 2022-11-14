// import stringifyObject from 'stringify-object'
import { P, match } from 'ts-pattern'
import * as A from '../Array/_external.js'
import { isArray, isFunction, isNaN, pipe } from '../function/_external.js'
import { getFunctionName } from '../function/getFunctionName.js'
import * as S from '../String/_external.js'

const stringifyArray = (data: Array<unknown>) =>
  pipe(data, A.map(stringify), A.join(', '), (x) => `[${x}]`)

const stringifyObject_ = <T>(data: Exclude<T, Array<unknown>>) =>
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  // stringifyObject(data, { indent: '  ', inlineCharacterLimit: 50 })
  JSON.stringify(data, null, 2)

/**
 * @description
 * Stringify any value to a human readable format. NOT JSON COMPLIANT
 *
 * @todo
 * Make sure this isn't string objects
 * @todo
 * Maybe name `of` to be clear it's a constructor
 */
export const stringify = (data: unknown): string =>
  match(data)
    .when(S.isString, (x) => `'${x}'`)
    .when(isNaN, () => 'NaN')
    .when(isArray, stringifyArray)
    .when(isFunction, getFunctionName)
    .with(P._, stringifyObject_)
    .exhaustive()

/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as A from '../Array/_external'
import { pipe } from '../function/_external'
import * as R from './_external'

export type RenameByMap<T, U> = {
  // @ts-ignore
  [K in keyof U as K extends keyof T
    ? T[K] extends string
      ? T[K]
      : never
    : K]: K extends keyof U ? U[K] : never
}
export const renameByMap =
  <T>(keysMap: T) =>
  <U>(obj: U): RenameByMap<T, U> =>
    // @ts-ignore
    pipe(
      obj,
      // @ts-ignore
      R.keys,
      A.reduce({}, (acc, key) => ({
        ...acc,
        //@ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...{ [keysMap[key] || key]: obj[key] },
      })),
    )

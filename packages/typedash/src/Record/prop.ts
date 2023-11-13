/* eslint-disable @typescript-eslint/ban-types */
/**
 * @description
 * Like `prop` from ramda but manually curried.
 *
 * @example
 * pipe(
 *   { foo: 5 },
 *   R.prop('foo'),
 * ) // 5
 */
export const prop =
  <TObject extends object, TKey extends keyof TObject>(key: TKey) =>
  (object: TObject): TObject[TKey] =>
    object[key]

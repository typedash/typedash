/* eslint-disable @typescript-eslint/ban-types */
/**
 * @description:
 * Like `prop` from ramda but manually curried.
 *
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/fp.d.ts#L2979
 *
 * @example
 * pipe(
 *   { foo: 5 },
 *   R.prop('foo'),
 * ) // 5
 */
type Magic<TObject, TKey extends keyof TObject> = (
  object: TObject,
) => TObject[TKey]

export const prop =
  <TObject extends object, TKey extends keyof TObject>(
    key: TKey,
  ): Magic<TObject, TKey> =>
  (object) =>
    object[key]

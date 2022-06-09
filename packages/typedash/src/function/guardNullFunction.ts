/**
 * @description
 * Used to safely call a function that may be nil
 */
export const guardNullFunction =
  <Params extends Array<unknown>, Return>(
    fn: ((...args: Params) => Return) | undefined,
    functionName = 'Function',
  ) =>
  (...params: Params) =>
    fn == null
      ? console.error(`guardNullFunction: ${functionName} is undefined`)
      : fn(...params)

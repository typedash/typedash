/**
 * @description Use it like `console.log`
 *
 * @example
 * const fn = (data: string) => {
 *   log(data)
 *   ...
 * }
 *
 * @todo
 * Use `stringify`. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const logData = (data: unknown) => {
  console.log(data)
}

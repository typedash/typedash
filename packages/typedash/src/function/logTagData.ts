/**
 * @description Use it like `console.log`, with a tag
 *
 * @example
 * const fn = (data: string) => {
 *   log('tag')(data)
 *   ...
 * }
 *
 * @todo
 * Use `stringify`. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const logTagData = (tag: string) => (data: unknown) => {
  console.log(tag, data)
}

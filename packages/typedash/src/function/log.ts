import inspect from 'browser-util-inspect'

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
 * Use `stringify`... maybe. `inspect` works. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const log = (data: unknown) => {
  if (typeof data === 'object') {
    console.log(inspect(data, { showHidden: false, depth: null, colors: true }))
  } else {
    console.log(data)
  }
}

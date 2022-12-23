import inspect from 'browser-util-inspect'

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
 * Use `stringify`... maybe. `inspect` works. It errors with:
 * "Cannot find module t". Likely a circular dep.
 */
export const logTag = (tag: string) => (data: unknown) => {
  if (typeof data === 'object') {
    console.log(
      tag,
      inspect(data, { showHidden: false, depth: null, colors: true }),
    )
  } else {
    console.log(tag, data)
  }
}

import { logTag } from './logTag'

/**
 * @description log data and return it unchanged
 *
 * @example
 * pipe(
 *   'foo',
 *   tapLogTag('made it here'),
 *   S.toUpperCase,
 * ) // 'FOO'
 */
export const tapLogTag =
  (tag: string) =>
  <T>(data: T): T => {
    logTag(tag)
    return data
  }

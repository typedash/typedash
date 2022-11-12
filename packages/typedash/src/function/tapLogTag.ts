import { logTag } from './logTag'

/**
 * @description log data with a tag and return it unchanged
 * @example
 * pipe(
 *   'foo',
 *   logTag('tag'), // console.log('tag', 'foo')
 *   S.toUpperCase,
 * ) // 'FOO'
 */
export const tapLogTag =
  (tag: string) =>
  <T>(data: T) => {
    logTag(tag)(data)
    return data
  }

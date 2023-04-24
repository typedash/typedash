import { logTagData } from './logTagData'

/**
 * @description log data with a tag and return it unchanged
 *
 * @example
 * pipe(
 *   'foo',
 *   logTag('tag'), // console.log('tag', 'foo')
 *   S.toUpperCase,
 * ) // 'FOO'
 */
export const tapLogTagData =
  (tag: string) =>
  <T>(data: T) => {
    logTagData(tag)(data)
    return data
  }

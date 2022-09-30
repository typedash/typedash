import { logTag } from './logTag'

/**
 * @example
 * pipe(
 *   'foo',
 *   tapLogTag('MY LOG'),
 *   // still 'foo'
 * )
 */
export const tapLogTag =
  (tag: string) =>
  <T>(data: T) => {
    logTag(tag)(data)
    return data
  }

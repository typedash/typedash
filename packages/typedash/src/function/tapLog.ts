/* eslint-disable no-console */
import { log } from './log'

/**
 * @description log data and return it unchanged
 * @example
 * pipe(
 *   'foo',
 *   tapLog, // console.log('foo')
 *   S.toUpperCase,
 * ) // 'FOO'
 */
export const tapLog = <T>(data: T) => {
  log(data)
  return data
}

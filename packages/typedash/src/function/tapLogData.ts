import { logData } from './logData'

/**
 * @description log data and return it unchanged
 *
 * @example
 * pipe(
 *   'foo',
 *   tapLogData, // console.log('foo')
 *   S.toUpperCase,
 * ) // 'FOO'
 */
export const tapLogData = <T>(data: T) => {
  logData(data)
  return data
}

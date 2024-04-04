/**
 * @description Is the number odd
 *
 * @example
 * if (isOdd(3)) {
 *   console.log('odd')
 * } else {
 *   console.log('even')
 * }
 */
export const isOdd = (data: number) => Math.abs(data % 2) === 1

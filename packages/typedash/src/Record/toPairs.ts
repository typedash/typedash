export const toPairs = <T>(
  obj: Record<string | number, T>,
): Array<[string, T]> => {
  return Object.entries(obj)
}

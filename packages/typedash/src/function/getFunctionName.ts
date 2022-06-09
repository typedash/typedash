/**
 * @description
 * Derives the function name from a function definition
 */
export const getFunctionName = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: Function & { readonly displayName?: string },
) => (data.displayName ?? data.name) || '<fn>'

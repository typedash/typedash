declare module 'browser-util-inspect' {
  function inspect(
    data: unknown,
    options: { showHidden: boolean; depth: number | null; colors: boolean },
  ): void

  export default inspect
}

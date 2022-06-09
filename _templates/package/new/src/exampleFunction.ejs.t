---
to: packages/<%= name %>/src/exampleFunction.ts
---

import { A, pipe } from '@typedash/typedash'

// TODO: Just an example of adding a function file, remove
export const exampleFunction = (): Array<number> =>
  pipe(
    [1],
    A.map((x) => x),
  )

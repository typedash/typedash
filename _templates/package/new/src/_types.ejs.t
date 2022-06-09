---
to: packages/<%= name %>/src/_types.ts
---

import { z } from 'zod'

// TODO: Remove, this is just an example
export const Example = z.object({})
export type Example = z.infer<typeof Example>

# Frequently Asked Questions (FAQ)

This document is meant to capture gotchas and other common monorepo questions/issues.

## Yarn

### "The remote archive doesn't match the expected checksum" Error

If you see the below error:

```
➤ YN0000: ┌ Fetch step
➤ YN0018: │ @types/lodash@npm:4.14.177: The remote archive doesn't match the expected checksum
➤ YN0000: └ Completed
➤ YN0000: Failed with errors in 0s 238ms
```

Just navigate to `.yarn/cache` and remove the `.zip` of the dependency and then do a `yarn install` again to get the dependency downloaded again.

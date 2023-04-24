---
'@typedash/typedash': major
---

🪵 Logging names overhaul to allow for `logTag` methods to only log a string and not all the data inside Monads.

⚠️ This is a breaking change because some of the logging method names were repurposed and their interfaces changed. `*.logTag` used to log a tag and the data, now it only logs the tag. `*.logTagData` has taken it's place in all modules.

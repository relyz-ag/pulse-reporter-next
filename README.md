# @relyz-pulse/reporter-next

Reports a Next.js app's runtime and dependency versions to Relyz Pulse. For Next.js 16+ with the App Router, on the Node.js runtime. Payload projects use `@relyz-pulse/reporter-payload` instead. Read-only release mirror.

## Install

```jsonc
// package.json
"dependencies": {
  "@relyz-pulse/reporter-next": "github:relyz-ag/pulse-reporter-next#semver:^1.0.0"
},
"scripts": {
  "postinstall": "pulse-reporter snapshot",
  "build": "pulse-reporter snapshot && next build"
}
```

The snapshot records installed versions at build time in `src/pulse-manifest.json` (or `pulse-manifest.json` without a `src/` folder; gitignore it; `--out <file>` for another path).

```ts
// app/api/pulse/report/route.ts
import { createReportHandler } from '@relyz-pulse/reporter-next'

import manifest from '@/pulse-manifest.json'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const GET = createReportHandler({ manifest })
```

## Set up

1. Set `PULSE_TOKEN` in production to the project's token from Pulse. Without it the endpoint answers `404`.
2. In Pulse, set the report endpoint URL to `https://<production-domain>/api/pulse/report` and click **Test reporter**.

## Pitfalls

- Middleware/proxy (i18n redirects, auth, basic auth on staging) must not intercept `/api/pulse/report`; exclude it in the `matcher`.
- `basePath` or i18n prefixes change the endpoint URL.
- Docker builds that install with `--ignore-scripts` must run `pulse-reporter snapshot` before `next build`.
- `output: 'export'` (static export) isn't supported: there is no server to answer.

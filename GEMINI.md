# Project: Hello Vercel (Next.js)

## Core Requirements
- **Framework**: Next.js (App Router).
- **Deployment**: Vercel (Auto-deploy via GitHub integration).
- **Feature**: 90s-style "Hit Counter" to track site visits.
- **Storage**: Vercel KV (Redis) for persistent visit counts.

## Architectural Decisions
- **Server Components**: Used `app/page.js` as an async Server Component to perform server-side incrementing of the visit counter without requiring client-side `useEffect` or API routes.
- **Dynamic Rendering**: `export const dynamic = 'force-dynamic'` is set to ensure the counter increments on every page load rather than being statically cached at build time.
- **Styling**: Inline CSS in `layout.js` and `page.js` to maintain a "primitive" 90s feel and keep the setup minimal (no Tailwind or CSS modules).

## Conventions
- **Naming**: Standard Next.js file conventions.
- **Verification**: Local testing requires `.env.local` with KV credentials; production uses Vercel's integrated environment variables.

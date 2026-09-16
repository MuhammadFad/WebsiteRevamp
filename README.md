# Devlogix Website Revamp

This repository contains the frontend for our website revamp.

Picking up work here? See [CONTRIBUTING.md](CONTRIBUTING.md) for where things go (component
folders, data-layer conventions, design tokens) and [CLAUDE.md](CLAUDE.md) for the design system,
known handoff issues, and accessibility/SEO requirements.

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Framer Motion (scroll entrance animation)
- Storybook + Vitest (component smoke tests, accessibility gate, and plain unit tests)
- Playwright (E2E: navigation, forms, responsive, accessibility)
- GitHub Actions (`.github/workflows/ci.yml`) — lint, typecheck, build, unit tests, and E2E run
  on every PR into `main`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Pages: `/` (home), `/about`, `/industries`, `/services` (+ 5 service detail pages), `/blog`
(+ post pages), `/contact`, `/careers`.

## Backend

The Contact and Careers forms post to `/api/v1/contact` and `/api/v1/careers/apply`. By default
(no env var set) these are served by this app's own route handlers under `src/app/api/v1/`,
which mirror the real backend's request/response contract exactly — so the site runs and its
forms work end-to-end with **no backend clone or setup required**.

To point at the real Express backend instead, copy `.env.local.example` to `.env.local` and set
`NEXT_PUBLIC_API_URL` (e.g. `http://localhost:5000/api/v1` for a locally running backend, or a
deployed URL). See `src/lib/api/config.ts`. Blog content stays on local static data
(`src/data/blogs.ts`) regardless — the backend contract explicitly excludes blog/content
endpoints pending a Sanity CMS integration.

## Testing

```bash
npm run build          # production build — must pass (this runs the full TypeScript check too;
                        #   don't run `tsc --noEmit` standalone before a build/dev has run at
                        #   least once — Next generates ambient types like `LayoutProps` into
                        #   .next/types/, so a fresh checkout fails tsc with "Cannot find name
                        #   'LayoutProps'" even on correct code)
npm run lint            # ESLint (Next + Storybook rules)
npm test                # everything below except E2E (Storybook stories + plain unit tests)
npm run test:storybook  # component smoke tests + a11y gate (Storybook stories via Vitest)
npm run test:unit       # plain Vitest unit tests (src/**/*.test.ts) — validation, data helpers
npm run test:e2e        # Playwright: nav/links, contact + careers forms, responsive, axe-core
npm run test:e2e:ui     # same, with the Playwright UI runner
npm run storybook       # component gallery at http://localhost:6006
```

All of the above run on every pull request into `main` via `.github/workflows/ci.yml`, split
across three parallel jobs (`lint-and-build`, `unit-tests`, `e2e-tests`).

## Reference material

`/Development Material/` (gitignored, not in this repo) holds the Figma exports, developer
handoff doc, and SEO audit this build was implemented against — see `CLAUDE.md` for the full
brief, known handoff issues, and design tokens.

## Team

We are Squad Orion.

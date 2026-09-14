# Devlogix Website Revamp

This repository contains the frontend for our website revamp.

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Framer Motion (scroll entrance animation)
- Storybook + Vitest (component smoke tests + accessibility gate)
- Playwright (E2E: navigation, forms, responsive, accessibility)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Pages: `/` (home), `/about`, `/industries`, `/contact`, `/careers`.

## Testing

```bash
npm run build        # production build — must pass
npm run lint          # ESLint (Next + Storybook rules)
npm test              # component smoke tests + a11y gate (Storybook stories via Vitest)
npm run test:e2e       # Playwright: nav/links, contact + careers forms, responsive, axe-core
npm run test:e2e:ui   # same, with the Playwright UI runner
npm run storybook     # component gallery at http://localhost:6006
```

## Reference material

`/Development Material/` (gitignored, not in this repo) holds the Figma exports, developer
handoff doc, and SEO audit this build was implemented against — see `CLAUDE.md` for the full
brief, known handoff issues, and design tokens.

## Team

We are Squad Orion.

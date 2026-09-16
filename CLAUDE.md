# DevLogix Website Revamp — Project Brief

## Context & mandate

This is a company website revamp (MERN stack, Next.js + Tailwind CSS frontend). You are
implementing against a Figma developer handoff that is **known to be flawed**: inconsistent
auto-layout, non-existent responsiveness, some ambiguous/contradictory specs, and at least one
confirmed color/token mismatch (see "Known handoff issues" below). Your job is not to reproduce
the handoff literally where it's wrong — it's to implement the *intent* correctly, following the
standards in this file whenever the handoff is silent, inconsistent, or produces a broken result.

**When the handoff and this file's engineering standards conflict, this file wins on
mechanics (responsiveness, accessibility, semantic structure). The handoff wins on visual
intent (colors, spacing values, copy, layout composition) unless flagged below as broken.**

All reference material — Figma exports, the developer handoff doc, the SEO audit, and the
Screaming Frog issue CSVs — lives in `/Development Material/` (gitignored). Treat that folder
as the current source of truth; it will be updated in place as new material comes in
(revised Figma, new issue lists). Re-read it fresh each session rather than relying on a
prior summary of it.

## Tech stack

- Next.js (App Router) + React
- Tailwind CSS
- MERN — backend is largely pre-existing; most of this site is static/content-driven, not
  data-driven. Only the contact/lead-capture form actually posts data.

## Design tokens (from DevLogix Design System v1.0)

### Typography
- Font: Poppins (Google Fonts), weights 400/500/600/700, `font-display: swap`
- H1 Hero: `text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight`
- H2 Section: `text-3xl md:text-4xl font-bold tracking-tight`
- H3 Card: `text-lg md:text-xl font-bold`
- Subheadline: `text-lg md:text-xl font-light`
- Body: `text-sm md:text-base font-normal`
- Kicker/Label: `text-xs font-bold tracking-[0.3em]`

### Color
- Primary Teal `#0D938C` — CTAs, accents, hover, icons, links
- Primary Dark `#0A706B` — header CTA hover
- Nav Hover `#14B8A6` — nav hover text, mega-menu highlights
- Navy/Deep Dark `#0B1221` — body bg, hero, blog headers, footer, contact panel
- Black `#000000` — hero video overlay, card backgrounds
- Slate 900 `#0F172A` — dark card backgrounds
- White `#FFFFFF`, Slate 50 `#F8FAFC`
- Teal Tint Light `#F0F9F9`, Teal Tint `#E0F5F4`, Teal Border `#D2EEED` — success states only
- Text: Heading Dark = slate-900, Body Dark = slate-800, Body Mid = slate-500,
  Body Light = slate-400, Muted = slate-300, White = #fff on dark bg

### Glassmorphism/overlays
- Glass bg `bg-white/5`, border `border-white/10`, hover border `border-white/20`,
  blur `backdrop-blur-[10px]`
- Dark overlay `bg-black/40`; Hero gradient `from-black via-black/80 to-transparent`
- Card image overlay `from-black/80 via-black/20 to-transparent`
- Ambient Teal Glow: `#0d938c` @ 5% opacity, `blur-150px`

### Spacing & layout
- Max content width `max-w-[1920px]`
- Page padding `px-6 md:px-12 xl:px-20`
- Section padding `pt-20 pb-12` (varies per section, follow handoff per-section notes)
- Border radius: `rounded-[4px]` buttons/footer cards · `rounded-xl` content cards ·
  `rounded-full` icon buttons · `rounded-lg` header CTA
- Card gap `gap-6` (24px)

### Animations
- Fade In Up: 0.5s ease-out, translateY(20px) → 0 (hero entrance)
- Logo ticker: 40s linear infinite
- Standard hover: 300ms default
- Premium CTA: 500ms cubic-bezier(0.4,0,0.2,1)
- Press scale: instant, `active:scale-95`
- Scroll entrance: 0.6s, Framer Motion `whileInView`

Full component-level specs (button states, form field states, card anatomy per homepage
section) are in the developer handoff doc in `/Development Material/` — read that for anything
not summarized above rather than guessing.

## Known handoff issues — do not implement literally

The handoff itself flags these; treat them as authoritative "fix, don't copy":

1. **Primary CTA duplication**: "Partner with us" appears in both Hero and Contact panel —
   must be ONE shared component, not two divergent implementations.
2. **Header CTA label mismatch**: nav CTA says "GET IN TOUCH" but token spec says "Get Started"
   — same visual spec, confirm actual copy per instance rather than assuming they're the same
   button reused with different text hardcoded wrong.
3. **Hero decorative glow color**: spec says Ambient Glow token should render teal; the
   annotated screenshot shows a warm red/maroon glow. Use the **teal token value** — the
   screenshot rendering is the error, not the spec.
4. **Contact form submit button**: handoff says white bg/dark text, but the Solid Dark Button
   token spec says dark bg by default. **Follow the token spec (dark bg)** — the screenshot
   is inconsistent with the documented design system.
5. **Insight card image reuse**: `insight-card-earth-orbit` asset appears reused as a second
   thumbnail elsewhere — confirm this isn't accidental duplication before reusing it verbatim.
6. **General auto-layout inconsistency**: sections built by different people will not have
   consistent padding/alignment/spacing rhythm even when the doc implies they should. When in
   doubt, follow the Spacing & Layout tokens above over what any specific annotated screenshot
   shows.

When you hit an ambiguity not listed here (conflicting instruction, a spec that doesn't
match its own screenshot, a component whose states aren't fully defined), **make the
reasonable engineering call using the tokens above, implement it, and leave a short comment
in the code (`// HANDOFF-AMBIGUOUS: ...`) explaining what you assumed and why** — don't block
on it, and don't silently guess without a trace.

## Responsiveness

- Breakpoints: use Tailwind defaults — `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`,
  `2xl 1536px`. The handoff's `md:` / `xl:` token usage aligns with these.
- Every section must be visually correct and usable at minimum at: 375px (mobile), 768px
  (tablet), 1440px (desktop). Treat this as a hard requirement — the handoff's own layouts
  were not responsiveness-tested and cannot be trusted to degrade gracefully as-is; carousels,
  multi-column sections, and the stat row in particular need real mobile layouts designed in,
  not just scaled down.
- No horizontal scroll/overflow at any breakpoint unless it's an intentional carousel.

## Accessibility

- Target: WCAG 2.1 AA.
- Semantic HTML first: real `<button>`/`<nav>`/`<header>`/`<footer>`, one `<h1>` per page,
  sequential heading order (no skipping levels) — this also directly fixes SEO issues below.
- All interactive elements keyboard-navigable with visible focus states (use the documented
  Focus token styles, don't remove outlines without replacing them).
- All images require meaningful `alt` text; decorative images get `alt=""`.
- Color contrast: verify white-on-teal-hover and muted text-on-dark combos meet AA contrast
  — do not assume the design tokens above already pass, check them.
- Explicit width/height (or aspect-ratio) on every image and icon — required by the SEO audit
  (CLS) and by accessibility layout stability.

## SEO requirements

Full audit is in `/Development Material/` (`DevLogix_Technical_SEO_Audit_Report.docx`), plus
raw Screaming Frog issue CSVs (`content_low_content_pages.csv`, `h1_duplicate.csv`,
`h1_over_70_characters.csv`) listing the specific affected URLs — check these directly rather
than relying only on the summary below when working on a specific page.

**Non-negotiable, build these in from the start (don't retrofit):**
- Exactly one `<h1>` per page, always.
- Title tags: 30–60 characters, unique per page, pattern `{Page Name} | DevLogix` unless a
  page-specific brief says otherwise.
- Meta descriptions: under 150 characters, unique per page — no duplicates across pages.
- `robots.txt` must NOT block `/_next/image/` paths (current live site blocks 94 image URLs
  this way — do not repeat this in the new build).
- Global security headers (`X-Frame-Options`, CSP, `X-Content-Type-Options`, `Referrer-Policy`)
  set via `next.config.js` `headers()`, applied site-wide.
- All images through Next.js `<Image />` with explicit dimensions, served as WebP/AVIF.
- No dead internal links / no internal links pointing to 404s. Fix or remove the old
  `/about/board` and `/industries` (no parent category) links; `/careers` must resolve
  directly, not 307-redirect to home.
- Core content pages (services, industries) need ≥500 words of real content — the old site's
  service pages sat at 163–198 words, which is a known thin-content problem to fix now, not
  carry forward.
- Schema markup (JSON-LD) per the marketing/SEO brief once received — check
  `/Development Material/` for whether that brief has landed yet.

## Testing requirements

Given time constraints, in priority order:
1. **Build/lint must pass** — non-negotiable gate, every PR.
2. **E2E (Playwright)** for critical paths: homepage loads, nav links resolve (no 404s),
   contact form submits successfully and shows validation/error states correctly.
3. **Component smoke tests** (Storybook test-runner or RTL) for shared components — Primary
   CTA, Header CTA, form inputs, card components — render without error across defined states
   (default/hover/focus/error/disabled).
4. **Responsive check**: manually or via Playwright viewport testing, verify no overflow/broken
   layout at 375/768/1440px for each page as it's built.
5. Accessibility: run `axe-core` against each page at minimum once before marking it done.

Skip deep unit test coverage and visual regression snapshotting unless time allows — not
worth the setup cost today.

## Working conventions

- This project has other contributors working on other components/pages in parallel. Don't
  assume a component doesn't exist yet — check the existing codebase structure before creating
  a new one that might duplicate a teammate's.
- Match existing code patterns/conventions already in the repo over introducing new ones,
  unless the existing pattern is itself broken (see "Known handoff issues").
- Reference material in `/Development Material/` may be updated (revised Figma files, new
  issue lists) — always treat the current file contents as authoritative over anything
  summarized in this file or in a past session, since design and audit inputs are actively
  changing during this build.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

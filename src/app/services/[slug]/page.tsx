import { notFound } from 'next/navigation';

// Every slug this app actually serves (artificial-intelligence, cloud-solutions,
// digital-transformation, software-development, ui-ux-design) has its own literal route under
// src/app/services/<slug>/page.tsx, and Next.js always resolves a literal folder route over a
// [slug] dynamic segment for an exact path match. That made this file's old logic — which
// duplicated the same 5-slug lookup against servicesDataMap/coreServicesData — entirely
// unreachable dead code (confirmed: both data sources cover the identical 5 slugs, and the
// "fallback" branch below that was also unreachable). Kept only as a safety net for any other
// slug, which correctly falls through to the 404 page.
export default function ServiceSlugFallbackPage(): never {
  notFound();
}

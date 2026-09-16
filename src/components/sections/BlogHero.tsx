import { Search } from "lucide-react";
import { Section } from "@/components/layout/Section";
import Container from "@/components/ui/Container";

type Props = {
  label: string;
  title: string;
  description: string;
  searchLabel?: string;
  searchPlaceholder?: string;
};

// `label` stays in the props contract (blog/page.tsx still passes it) even though the eyebrow
// it used to render is gone — kept for API stability rather than touching every call site.
export function BlogHero({
  title,
  description,
  searchLabel = "Search Transmissions",
  searchPlaceholder = "Enter keywords...",
}: Props) {
  return (
    <Section bg="navy" className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          {/* Title block. Personal instruction (standing sitewide rule): every non-homepage
              hero has its precursor element removed — this used to show a small eyebrow label
              above the h1. */}
          <div className="lg:col-span-2">
            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          </div>

          {/* Search — a plain GET form, so it works without JavaScript.
              Submitting goes to /blog?q=... and the grid picks it up. */}
          <form action="/blog" method="get" className="w-full">
            <label
              htmlFor="blog-search"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-teal-hover sm:text-xs"
            >
              {searchLabel}
            </label>

            <div className="relative">
              <input
                id="blog-search"
                name="q"
                type="search"
                placeholder={searchPlaceholder}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-3 pl-4 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-brand-teal-dark text-white transition-colors hover:bg-brand-teal-dark"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}

import { Search } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

type Props = {
  label: string;
  title: string;
  description: string;
  searchLabel?: string;
  searchPlaceholder?: string;
};

export function BlogHero({
  label,
  title,
  description,
  searchLabel = "Search Transmissions",
  searchPlaceholder = "Enter keywords...",
}: Props) {
  return (
    <Section bg="navy" className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          {/* Title block */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
              {label}
            </p>

            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
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
              className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400 sm:text-xs"
            >
              {searchLabel}
            </label>

            <div className="relative">
              <input
                id="blog-search"
                name="q"
                type="search"
                placeholder={searchPlaceholder}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-3 pl-4 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-emerald-600 text-white transition-colors hover:bg-emerald-700"
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

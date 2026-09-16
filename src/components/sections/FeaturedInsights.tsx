import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import BlogCard from "../cards/BlogCard";

// Only the 3 insight titles that were actually documented in the developer handoff are used
// here — the export's 4th ("bottom-right") card slot had no title anywhere in either source
// file, so rather than invent headline copy it was dropped instead of shipping a blank/fake card.
const FEATURED = {
  title: "10 Practical Principles for Reliable Microservices Web Apps",
  excerpt: "Engineering patterns for building microservices that hold up under real load.",
  tag: "Engineering",
  href: "/blog",
  image: "/images/services/insight-1.png",
};

const SECONDARY = [
  {
    title: "Why Most Digital Transformations Fail",
    excerpt: "The strategic and organizational gaps that derail enterprise modernization.",
    tag: "Strategy",
    href: "/blog",
    image: "/images/services/insight-2.png",
  },
  {
    title: "Zero-Trust Cloud Architecture",
    excerpt: "A practical blueprint for securing modern, distributed cloud environments.",
    tag: "Security",
    href: "/blog",
    image: "/images/services/insight-3.png",
  },
];

export default function FeaturedInsights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Kicker tone="light">Resources</Kicker>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Featured Insights
            </h2>
            <p className="max-w-xl text-lg font-light text-slate-500">
              Explore our latest thinking on technology, engineering, and digital
              transformation.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold tracking-[0.12em] text-brand-teal-dark uppercase underline decoration-transparent underline-offset-4 transition hover:decoration-brand-teal-dark"
          >
            View all insights &rarr;
          </Link>
        </Reveal>

        {/* Secondary cards use the "horizontal" variant (compact, fixed-height row) rather than
            "vertical" (full-width top image + padding) — the vertical variant's tall stacked
            pair forced this whole grid row to CSS-grid-stretch to match, which is what made the
            featured card balloon to a near-doubled height. Horizontal keeps both columns roughly
            proportionate to the main card. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <BlogCard variant="overlay" {...FEATURED} className="h-full" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {SECONDARY.map((post, i) => (
              <Reveal key={post.title} delay={0.1 + i * 0.1}>
                <BlogCard variant="horizontal" {...post} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

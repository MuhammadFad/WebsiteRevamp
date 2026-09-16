import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import BlogCard from "../cards/BlogCard";

export type InsightItem = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
};

export type InsightsGridProps = {
  kicker: string;
  heading: string;
  items: InsightItem[];
};

export default function InsightsGrid({ kicker, heading, items }: InsightsGridProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <BlogCard variant="vertical" {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

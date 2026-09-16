import type { LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import IconCard from "../cards/IconCard";

export type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  linkLabel?: string;
};

export type ValuesGridProps = {
  kicker: string;
  heading: string;
  body?: string;
  items: ValueItem[];
  tone?: "light" | "dark";
};

export default function ValuesGrid({ kicker, heading, body, items, tone = "light" }: ValuesGridProps) {
  return (
    <section className={`py-16 md:py-20 ${tone === "dark" ? "bg-brand-navy" : "bg-slate-50"}`}>
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Kicker tone={tone}>{kicker}</Kicker>
          <h2
            className={`text-3xl font-bold tracking-tight md:text-4xl ${
              tone === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={`max-w-2xl text-lg font-light md:text-xl ${
                tone === "dark" ? "text-slate-300" : "text-slate-500"
              }`}
            >
              {body}
            </p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <IconCard
                icon={<item.icon />}
                title={item.title}
                description={item.description}
                href={item.href}
                linkLabel={item.linkLabel}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

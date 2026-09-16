import type { LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export type DoctrineValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type DoctrineStatementProps = {
  lines: string[];
  values: DoctrineValue[];
};

/**
 * Per DEVELOPMENT MATERIAL/Figma JSONs/doctrine-section-structure.json: the display headline
 * paired with a 3-item value list (Integrity, Innovation, Dedication), row-composed — headline
 * left, list right, dividers between items. A prior session dropped the list here because its
 * copy overlapped the earlier "Our Values" grid; product has since confirmed both should ship as
 * written, so this renders the doctrine list verbatim from the supplied JSON.
 */
export default function DoctrineStatement({ lines, values }: DoctrineStatementProps) {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
        <Reveal className="shrink-0">
          <p className="text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {lines.map((line, i) => (
              <span key={line} className={i === lines.length - 1 ? "text-brand-teal-hover" : ""}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-1 flex-col">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`flex flex-col gap-3 py-6 first:pt-0 last:pb-0 ${
                i < values.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <value.icon className="h-6 w-6 shrink-0 text-brand-teal-hover" aria-hidden />
                <h3 className="text-lg font-semibold text-white md:text-xl">{value.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

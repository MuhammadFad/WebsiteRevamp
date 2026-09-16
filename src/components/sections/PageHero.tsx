import type { ReactNode } from "react";
import Container from "../ui/Container";
import AmbientGlow from "../ui/AmbientGlow";
import Button from "../ui/Button";

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: ReactNode;
};

// Personal instruction: every non-homepage hero has its precursor element (kicker/tag/
// breadcrumb) removed entirely — this component intentionally renders no such element.
export default function PageHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visual,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <AmbientGlow className="left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />
      <Container
        className={`relative grid grid-cols-1 items-center gap-10 pt-20 pb-16 md:pt-28 md:pb-20 ${
          visual ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""
        }`}
      >
        <div className="flex flex-col gap-6">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-lg font-light text-slate-300 md:text-xl">{subtitle}</p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outlineLight" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {visual && <div className="relative">{visual}</div>}
      </Container>
    </section>
  );
}

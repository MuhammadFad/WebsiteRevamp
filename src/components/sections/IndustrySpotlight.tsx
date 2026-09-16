import { Building2 } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export type IndustrySpotlightProps = {
  heading: string;
  body: string;
  industryName: string;
  industryBody: string;
  services: string[];
  learnMoreHref: string;
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
  caseStudyHref: string;
};

/**
 * HANDOFF-AMBIGUOUS: the source modeled this as an 8-tab interactive selector, but only one
 * tab (Banking & Financial Services) had real detail content anywhere in the design material —
 * the other 7 panels were never exported. Building a tab UI that silently shows nothing (or
 * fabricated copy) for 7 of its 8 tabs would be worse than the handoff itself, so this ships as
 * a single, honestly-framed "spotlight" example instead of a fake multi-tab switcher.
 */
export default function IndustrySpotlight({
  heading,
  body,
  industryName,
  industryBody,
  services,
  learnMoreHref,
  caseStudyTag,
  caseStudyTitle,
  caseStudyBody,
  caseStudyHref,
}: IndustrySpotlightProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex max-w-3xl flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg font-light text-slate-500 md:text-xl">{body}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1} className="rounded-xl border border-slate-200 p-8">
            <p className="text-xs font-bold tracking-[0.3em] text-brand-teal-dark uppercase">
              Featured Industry
            </p>
            <h3 className="mt-3 text-xl font-bold text-slate-900 md:text-2xl">{industryName}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{industryBody}</p>

            <p className="mt-6 text-sm font-semibold text-slate-900">Services</p>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-slate-600">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                  {service}
                </li>
              ))}
            </ul>

            <a
              href={learnMoreHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-dark"
            >
              Learn More &rarr;
            </a>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col rounded-xl bg-linear-to-br from-brand-teal-fill to-brand-teal-dark p-8 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
              <Building2 className="h-5 w-5" aria-hidden />
            </div>
            <p className="mt-4 text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase">
              {caseStudyTag}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-snug">{caseStudyTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{caseStudyBody}</p>
            <a
              href={caseStudyHref}
              className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em]"
            >
              Read More &rarr;
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

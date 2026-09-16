"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export type SpotlightIndustry = {
  name: string;
  body: string;
  services: string[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
};

export type IndustrySpotlightProps = {
  heading: string;
  body: string;
  industries: SpotlightIndustry[];
  learnMoreHref: string;
  caseStudyHref: string;
};

/**
 * Tab-driven spotlight covering all industries served (the canonical six from IndustriesServed
 * on the homepage), not just a single hardcoded Banking example — a prior session had limited
 * this to one tab because only Banking had exported detail copy; content for the remaining five
 * has since been written up to match, so this ships as a real multi-tab switcher.
 */
export default function IndustrySpotlight({
  heading,
  body,
  industries,
  learnMoreHref,
  caseStudyHref,
}: IndustrySpotlightProps) {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal className="flex max-w-3xl flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg font-light text-slate-500 md:text-xl">{body}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div role="tablist" aria-label="Industry spotlight" className="flex flex-wrap gap-2">
            {industries.map((industry, i) => (
              <button
                key={industry.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                  i === active
                    ? "border-brand-teal-fill bg-brand-teal-fill text-white"
                    : "border-slate-200 text-slate-600 hover:border-brand-teal-dark hover:text-brand-teal-dark"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1} className="rounded-xl border border-slate-200 p-8">
            <p className="text-xs font-bold tracking-[0.3em] text-brand-teal-dark uppercase">
              Featured Industry
            </p>
            <h3 className="mt-3 text-xl font-bold text-slate-900 md:text-2xl">{current.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{current.body}</p>

            <p className="mt-6 text-sm font-semibold text-slate-900">Services</p>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {current.services.map((service) => (
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

          <Reveal
            delay={0.2}
            className="flex flex-col rounded-xl bg-linear-to-br from-brand-teal-fill to-brand-teal-dark p-8 text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
              <Building2 className="h-5 w-5" aria-hidden />
            </div>
            <p className="mt-4 text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase">
              {current.caseStudyTag}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-snug">{current.caseStudyTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{current.caseStudyBody}</p>
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

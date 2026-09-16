"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ServiceCard from "../cards/ServiceCard";

// The Figma export contained a 5th card that exactly duplicated the 1st ("AI Transformation")
// and mixed in two different font families across siblings — treated as an editing mistake
// (see content-homepage.md flag) and collapsed to the 4 genuinely distinct services.
const SERVICES = [
  {
    title: "AI Transformation",
    description:
      "Drive measurable business value with scalable AI capabilities across GenAI, Predictive AI, ML, and automation to enhance decisions, productivity, and operational agility.",
    href: "/#services",
  },
  {
    title: "Data and Analytics",
    description:
      "Organise, analyse, and activate your data to uncover insights faster, make better decisions, and stay competitive in constantly changing markets.",
    href: "/#services",
  },
  {
    title: "Cloud Solutions",
    description:
      "From cloud migration to optimisation, we create secure, scalable environments that improve agility, reduce complexity, and support continuous innovation across your enterprise.",
    href: "/#services",
  },
  {
    title: "Digital Engineering",
    description:
      "We bring strategy, design, and technology into one cohesive approach, helping you modernize systems, improve customer experience, and deliver meaningful outcomes.",
    href: "/#services",
  },
];

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(index);
  };

  return (
    <section id="services" className="scroll-mt-24 bg-brand-navy py-20">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Our Services
          </h2>
          <a
            href="#"
            className="text-xs font-semibold tracking-[0.12em] text-brand-teal-hover uppercase underline decoration-transparent underline-offset-4 transition hover:decoration-brand-teal-hover"
          >
            Discover our full capabilities &rarr;
          </a>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Services carousel">
            {SERVICES.map((service, i) => (
              <button
                key={service.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show ${service.title}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy ${
                  i === active ? "w-6 bg-brand-teal-hover" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="!h-10 !w-10 !rounded-full !border-brand-teal !p-0 !text-brand-teal hover:!bg-brand-teal-fill hover:!text-white"
              aria-label="Previous service"
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="!h-10 !w-10 !rounded-full !border-brand-teal !p-0 !text-brand-teal hover:!bg-brand-teal-fill hover:!text-white"
              aria-label="Next service"
              onClick={() => scrollToIndex(Math.min(active + 1, SERVICES.length - 1))}
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

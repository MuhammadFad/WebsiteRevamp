"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Kicker from "../ui/Kicker";
import AmbientGlow from "../ui/AmbientGlow";
import Typewriter from "../ui/Typewriter";

// 5 distinct treatments stand in for the auto-rotating background slides described in the
// developer handoff docx — no real photography/slide assets were provided, so each "slide" is
// a different ambient-glow position/tint within the brand palette rather than dead decoration.
const SLIDES = [
  "left-1/4 top-0 bg-brand-teal",
  "right-1/4 top-10 bg-brand-teal-hover",
  "left-1/2 bottom-0 bg-brand-teal-dark",
  "right-0 top-1/3 bg-brand-teal",
  "left-0 bottom-1/4 bg-brand-teal-hover",
];

const CYCLING_WORDS = ["Forward", "Faster", "Better", "Smarter"];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        aria-hidden
        className={`pointer-events-none absolute h-80 w-80 rounded-full opacity-5 blur-[150px] transition-all duration-1000 ${SLIDES[slide]}`}
      />
      <AmbientGlow className="h-72 w-72 -translate-x-1/3 -translate-y-1/3 top-0 left-0" />

      <Container className="relative flex flex-col gap-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="flex max-w-3xl flex-col items-start gap-7">
          <Kicker tone="dark">Engineering Digital Solutions Since 2015</Kicker>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Building Digital Solutions
            <br />
            That Move Your Business{" "}
            <span className="text-brand-teal-hover">
              <Typewriter words={CYCLING_WORDS} />
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light text-slate-300 md:text-xl">
            DevLogix is a software and AI development company focused on building scalable,
            innovative, and business-driven digital solutions for the modern enterprise.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="glass"
              size="lg"
              premium
              className="hover:!border-brand-teal-fill hover:!bg-brand-teal-fill hover:shadow-[0_0_40px_rgba(12,132,126,0.35)]"
            >
              Partner with us
            </Button>
            <Button href="/#services" variant="outlineLight" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Hero background slide">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === slide}
              aria-label={`Show hero background ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy ${
                i === slide ? "w-6 bg-brand-teal-hover" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

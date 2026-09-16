import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ContactForm from "./ContactForm";

export default function ContactCta() {
  return (
    <section className="bg-brand-navy py-20">
      {/* items-start (not the grid default of stretch) — the form column is naturally taller
          than the heading+image column, and stretch was forcing the image's fixed aspect-ratio
          box to sit inside an over-tall cell with dead space below it, inflating the section. */}
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-lg text-lg font-light text-slate-300 md:text-xl">
              Tell us about your project and our team will get back to you within 24 hours.
              Let&apos;s build something exceptional together.
            </p>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-brand-card">
            <Image
              src="/images/services/cta-form.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-brand-navy/70 via-brand-navy/10 to-transparent"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] sm:p-8">
          <ContactForm tone="dark" />
        </Reveal>
      </Container>
    </section>
  );
}

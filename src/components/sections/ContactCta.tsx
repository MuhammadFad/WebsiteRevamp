import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import LeadForm from "./LeadForm";

export default function ContactCta() {
  return (
    <section className="bg-brand-navy py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
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

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-card via-brand-navy to-brand-teal-dark">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(13,147,140,0.3),transparent_60%)]"
            />
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center text-sm font-medium text-white/70">
              Office photo placeholder — source the real asset for this frame.
            </div>
          </div>

          {/* Known Handoff Issue #1: same shared "Partner with us" CTA component as the Hero,
              restored here per the docx's intent (the JSON export omitted this button entirely
              — see content-homepage.md §10). */}
          <Button
            href="/contact"
            variant="glass"
            size="lg"
            premium
            className="w-fit hover:!border-brand-teal-fill hover:!bg-brand-teal-fill hover:shadow-[0_0_40px_rgba(12,132,126,0.35)]"
          >
            Partner with us
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] sm:p-8">
          <LeadForm />
        </Reveal>
      </Container>
    </section>
  );
}

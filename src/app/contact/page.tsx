import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfoPanel from "@/components/sections/ContactInfoPanel";
import Testimonials from "@/components/sections/Testimonials";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project | DevLogix",
  description:
    "Tell DevLogix about your project and get routed to the right team. Software, AI, and digital transformation partners.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero
        title="Let's turn ideas into impact."
        subtitle="We turn complex challenges into scalable software, AI solutions, and digital products built for growth."
        activeTab="contact"
      />

      {/* Dark hero above, light section below for the direct-contact details and the form
          itself — both rendered as white cards on this elevated (slate-50) surface instead of
          the form floating alone as the one light element inside an otherwise-dark page. */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-10">
          <Reveal className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfoPanel kicker="Strategic Alliances" />
          </Reveal>
        </Container>
      </section>

      <Testimonials />
    </>
  );
}

import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
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
        panelKicker="Strategic Alliances"
        activeTab="contact"
      />

      <section className="bg-brand-navy pb-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] sm:p-10">
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <Testimonials />
    </>
  );
}

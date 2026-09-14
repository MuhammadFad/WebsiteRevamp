import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import CareersForm from "@/components/sections/CareersForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

// SEO known issue: "/careers" must resolve directly (200), not 307-redirect to home.
// This route does exactly that — a real, dedicated page, no redirect.
export const metadata: Metadata = {
  title: "Careers & Internships | DevLogix",
  description:
    "Join DevLogix. Explore open roles and internship tracks in software engineering, AI, and product design.",
};

export default function CareersPage() {
  return (
    <>
      <ContactHero
        title="Let's turn ideas into impact."
        subtitle="Join a team building sovereign, high-performance platforms for the modern enterprise — and grow your career doing it."
        panelKicker="Talent Acquisition"
        activeTab="careers"
      />

      <section className="bg-brand-navy pb-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] sm:p-10">
            <CareersForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

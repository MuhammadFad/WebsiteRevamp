import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import CareersForm from "@/components/sections/CareersForm";
import ContactInfoPanel from "@/components/sections/ContactInfoPanel";
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
        activeTab="careers"
      />

      {/* Dark hero above, light section below — see /contact for the same pairing. */}
      <section className="bg-slate-50 py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-10">
          <Reveal className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10">
            <CareersForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfoPanel kicker="Talent Acquisition" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

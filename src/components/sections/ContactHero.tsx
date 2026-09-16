import Link from "next/link";
import Container from "../ui/Container";
import AmbientGlow from "../ui/AmbientGlow";

export type ContactHeroProps = {
  title: string;
  subtitle: string;
  activeTab: "contact" | "careers";
};

// The "Reach us directly" address/email/phone panel used to live here, but that put contact
// details on the hero rather than next to the form where someone filling it out would actually
// look for them — it now renders as ContactInfoPanel beside the form on each page instead.
export default function ContactHero({ title, subtitle, activeTab }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <AmbientGlow className="right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3" />

      <Container className="relative flex flex-col gap-8 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg font-light text-slate-300 md:text-xl">{subtitle}</p>
        </div>

        <div
          role="tablist"
          aria-label="Contact type"
          className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 p-1"
        >
          <Link
            href="/contact"
            role="tab"
            aria-selected={activeTab === "contact"}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 ${
              activeTab === "contact" ? "bg-brand-teal-fill text-white" : "text-slate-300"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            role="tab"
            aria-selected={activeTab === "careers"}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-300 ${
              activeTab === "careers" ? "bg-brand-teal-fill text-white" : "text-slate-300"
            }`}
          >
            Job / Internship
          </Link>
        </div>
      </Container>
    </section>
  );
}

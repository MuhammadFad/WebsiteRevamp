import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import AmbientGlow from "../ui/AmbientGlow";

export type ContactHeroProps = {
  title: string;
  subtitle: string;
  panelKicker: string;
  activeTab: "contact" | "careers";
};

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Global HQ", value: "Gujranwala, Pakistan" },
  { icon: Mail, label: "Electronic Mail", value: "global@devlogix.com.pk" },
  { icon: Phone, label: "Secure Line", value: "+92 332 000 5121" },
];

export default function ContactHero({ title, subtitle, panelKicker, activeTab }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <AmbientGlow className="right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3" />

      <Container className="relative grid grid-cols-1 items-start gap-10 pt-20 pb-16 md:pt-28 md:pb-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg font-light text-slate-300 md:text-xl">{subtitle}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] sm:p-8">
          <div
            role="tablist"
            aria-label="Contact type"
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
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
              Job / Internship?
            </Link>
          </div>

          <p className="mt-6 text-2xl font-bold text-white">{panelKicker}</p>
          <p className="mt-1 text-sm font-semibold text-slate-400">Reach us directly</p>

          <div className="mt-6 flex flex-col gap-5">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-teal-hover">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-slate-400 uppercase">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

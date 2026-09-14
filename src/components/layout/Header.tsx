"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

// HANDOFF-AMBIGUOUS: the Figma export lists 4 primary nav links (Services, Industries,
// Insights, About) plus a Careers link, but no Services or Insights page was included in the
// provided design material — only Home, About, Industries, and the two Contact variants were.
// Rather than link to pages that don't exist (which would violate the SEO "no dead internal
// links" requirement) or invent unbriefed page content, Services/Insights point to the
// homepage sections that already cover that content.
const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/about" },
];

// HANDOFF-AMBIGUOUS: the header CTA read "GET IN TOUCH" in the export while the homepage's
// hero/contact-panel CTA ("Known Handoff Issue #1") reads "Partner with us" — three to four
// divergent CTA labels appear across the page exports ("Get In Touch", "GET IN TOUCH",
// "LET'S WORK TOGETHER"). Consolidated to two canonical labels used consistently everywhere:
// "Partner with us" for the homepage's flagship hero + closing-CTA pair (the one shared
// component per Issue #1), and "Get in Touch" for this global header CTA and every other
// page's closing CTA band.
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-[10px]">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        >
          Dev<span className="text-brand-teal-hover">Logix</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/careers"
            className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          >
            Careers
          </Link>
          <Button href="/contact" size="md" premium>
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-brand-navy lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded px-2 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-brand-teal-hover"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="rounded px-2 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-brand-teal-hover"
            >
              Careers
            </Link>
            <Button href="/contact" size="md" className="mt-4 w-full">
              Get in Touch
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

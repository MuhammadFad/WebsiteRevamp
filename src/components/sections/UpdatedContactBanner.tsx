import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export type UpdatedContactBannerProps = {
  heading?: string;
  subheading?: string;
  email?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

/**
 * Per DEVELOPMENT MATERIAL/Figma JSONs/updated-contact-banner.json: a white rounded card
 * replacing four previously-divergent "closing CTA" components (ClosingCta, HelpCta on /blog,
 * CtaBannerSection on /services, and ContactCta's own band) with one shared design used
 * everywhere. Spans the full content width (not a narrow centered card) — design review flagged
 * this as the site's final-banner separator between the last section and the footer, so it needs
 * to read as a full-width band rather than a card floating in the navy section around it.
 *
 * HANDOFF-AMBIGUOUS: the JSON only records each text node's own alignment (headline centered,
 * subhead/email left) with no x/y layout data to reconstruct the exact composition. Rendered as
 * a single centered stack — reads cleanly at any width without the ambiguity of a two-column
 * split the source data doesn't actually specify.
 */
export default function UpdatedContactBanner({
  heading = "Ready to shape your Horizon",
  subheading = "Let's build something intelligent together.",
  email = "strategic@devlogix.com.pk",
  ctaLabel = "Connect with Us",
  ctaHref = "/contact",
  className = "",
}: UpdatedContactBannerProps) {
  return (
    <section className={`bg-brand-navy py-16 md:py-20 ${className}`}>
      <Container>
        <Reveal>
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white px-8 py-12 text-center sm:px-14 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {heading}
            </h2>
            <p className="text-lg font-light text-slate-600 md:text-xl">{subheading}</p>

            <Button href={ctaHref} variant="teal" size="md" className="mt-2 !rounded-md">
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Button>

            {/* text-slate-600, not slate-400 — slate-400 on white measures 2.63:1, badly under
                the 4.5:1 AA threshold. This card was never scanned by the a11y suite before
                because Reveal's whileInView animation kept it at opacity:0 until scrolled into
                view, and the test didn't wait for that — see accessibility.spec.ts. */}
            <p className="text-xs font-light text-slate-600">
              Prefer email? Reach us at{" "}
              <a href={`mailto:${email}`} className="font-medium text-brand-teal-dark underline">
                {email}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export type ClosingCtaProps = {
  heading: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ClosingCta({
  heading,
  subtitle,
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}: ClosingCtaProps) {
  return (
    <section className="bg-black py-20 md:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
          {subtitle && (
            <p className="max-w-xl text-lg font-light text-slate-300 md:text-xl">{subtitle}</p>
          )}
          <Button href={ctaHref} size="lg" className="mt-2">
            {ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

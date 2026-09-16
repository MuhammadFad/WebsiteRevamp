import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function HelpCta({
  title,
  description,
  buttonLabel,
  buttonHref,
}: Props) {
  return (
    <Section bg="white" className="border-t border-slate-100">
      <Container className="text-center">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-emerald-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-emerald-700"
        >
          {buttonLabel}
        </Link>
      </Container>
    </Section>
  );
}

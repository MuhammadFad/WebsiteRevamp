import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";

export type FounderQuoteProps = {
  kicker: string;
  quote: string;
  body: string;
  name: string;
  title: string;
};

export default function FounderQuote({ kicker, quote, body, name, title }: FounderQuoteProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="bg-brand-navy py-16 md:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-70 lg:mx-0">
          <div
            aria-hidden
            className="flex aspect-3/4 w-full items-center justify-center rounded-xl bg-linear-to-br from-brand-card to-brand-teal-dark text-5xl font-bold text-white/40"
          >
            {initials}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <Kicker tone="dark">{kicker}</Kicker>
          <blockquote className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300">{body}</p>
          <footer className="text-sm">
            <span className="font-semibold text-white">{name}</span>
            <span className="text-slate-400"> &middot; {title}</span>
          </footer>
        </Reveal>
      </Container>
    </section>
  );
}

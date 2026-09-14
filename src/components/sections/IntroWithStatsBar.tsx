import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import StatCounter from "../cards/StatCounter";

export type IntroWithStatsBarProps = {
  kicker: string;
  heading: string;
  body: string;
  stats: { value: string; label: string }[];
};

export default function IntroWithStatsBar({
  kicker,
  heading,
  body,
  stats,
}: IntroWithStatsBarProps) {
  return (
    <section className="bg-slate-50">
      <Container className="py-16 md:py-20">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg font-light text-slate-500 md:text-xl">{body}</p>
        </Reveal>
      </Container>

      <div className="bg-brand-navy py-12">
        <Container>
          <Reveal className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="md:pl-6 md:first:pl-0">
                <StatCounter value={stat.value} label={stat.label} align="left" />
              </div>
            ))}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

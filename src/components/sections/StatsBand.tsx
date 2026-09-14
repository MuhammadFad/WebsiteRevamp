import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import StatCounter from "../cards/StatCounter";
import AmbientGlow from "../ui/AmbientGlow";

const STATS = [
  { value: "12+", label: "Industries verticalized" },
  { value: "7+", label: "Regional hubs" },
  { value: "300+", label: "Projects delivered" },
  { value: "50+", label: "Active clients" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20">
      <AmbientGlow className="right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3" />

      <Container className="relative flex flex-col gap-14">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Kicker tone="dark">Who We Are</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Partnering in Your <span className="text-brand-teal-hover">AI-First</span> Enterprise
            Transformation
          </h2>
          <p className="text-lg font-light text-slate-300 md:text-xl">
            DevLogix helps enterprises embrace a new way of operating. We modernize legacy
            applications, unify data across silos, automate workflows end-to-end, and embed AI
            at the core of every business function &mdash; so you can move faster, decide
            smarter, and scale further.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="md:pl-6 md:first:pl-0">
              <StatCounter value={stat.value} label={stat.label} />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import TeamCard from "../cards/TeamCard";

export type TeamGridProps = {
  kicker: string;
  heading: string;
  members: { name: string; role: string; linkedin?: string }[];
};

export default function TeamGrid({ kicker, heading, members }: TeamGridProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

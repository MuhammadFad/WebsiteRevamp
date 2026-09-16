import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Kicker from "../ui/Kicker";
import NumberedCard from "../cards/NumberedCard";

export type NumberedFeaturesProps = {
  kicker: string;
  heading: string;
  items: { title: string; description: string }[];
};

export default function NumberedFeatures({ kicker, heading, items }: NumberedFeaturesProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <Kicker tone="light">{kicker}</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <NumberedCard number={String(i + 1)} title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

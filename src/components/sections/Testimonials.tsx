import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "CTO, FinTech Innovations Ltd.",
    quote:
      "DevLogix transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched — delivery was on time, on spec, and exceeded expectations.",
  },
  {
    name: "Sarah Reynolds",
    role: "VP Operations, MediCore Systems",
    quote:
      "The AI integration roadmap DevLogix designed for us reduced our operational costs by 35% in under six months. They don't just deliver software — they deliver transformative outcomes.",
  },
  {
    name: "Omar Malik",
    role: "Director of Engineering, GovCloud Pakistan",
    quote:
      "From initial scoping to final deployment, DevLogix demonstrated a level of technical mastery and strategic clarity that set them apart from every other vendor we evaluated.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-navy py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading kicker="Client Voices" title="What Our Clients Say" tone="dark" align="center" className="mx-auto" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

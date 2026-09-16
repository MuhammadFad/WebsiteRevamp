import Container from "../ui/Container";
import LogoStrip from "../cards/LogoStrip";

const LOGOS = [
  { name: "TechCorp" },
  { name: "InnovateCo" },
  { name: "DataFlow" },
  { name: "CloudSync" },
  { name: "AI Labs" },
  { name: "QuantumDev" },
  { name: "NexGen" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-brand-navy py-10">
      <Container>
        <LogoStrip title="Trusted by Market Leaders" logos={LOGOS} tone="dark" marquee />
      </Container>
    </section>
  );
}

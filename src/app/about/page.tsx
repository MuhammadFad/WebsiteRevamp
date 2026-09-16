import type { Metadata } from "next";
import { Lightbulb, ShieldCheck, Star, Target, Users } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StatFeature from "@/components/sections/StatFeature";
import ValuesGrid from "@/components/sections/ValuesGrid";
import FounderQuote from "@/components/sections/FounderQuote";
import NumberedFeatures from "@/components/sections/NumberedFeatures";
import DoctrineStatement from "@/components/sections/DoctrineStatement";
import ImpactSection from "@/components/sections/ImpactSection";
import TeamGrid from "@/components/sections/TeamGrid";
import InsightsGrid from "@/components/sections/InsightsGrid";
import Testimonials from "@/components/sections/Testimonials";
import UpdatedContactBanner from "@/components/sections/UpdatedContactBanner";

export const metadata: Metadata = {
  title: "About Us — Story, Mission & Leadership | DevLogix",
  description:
    "Meet the team engineering sovereign, high-performance digital platforms for the modern enterprise at DevLogix.",
};

const VALUES = [
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "Pioneering AI-native and sovereign engineering solutions that redefine what is possible.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "No vaporware, no marketing assertions. We compile, execute, and verify systems directly.",
  },
  {
    title: "Excellence",
    icon: Star,
    description:
      "Strict adherence to deterministic, high-efficiency compute agreements and delivery standards.",
  },
  {
    title: "Collaboration",
    icon: Users,
    description:
      "Building deep, long-term partnerships with clients to co-create transformative solutions.",
  },
];

const DOCTRINE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "No vaporware, no marketing assertions. We compile, execute, and verify systems directly.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Developing on-premise execution nodes optimized for physical data sovereignty.",
  },
  {
    icon: Target,
    title: "Dedication",
    description: "Strict adherence to deterministic, high-efficiency compute agreements.",
  },
];

const STANDARDS = [
  {
    title: "Sovereign First",
    description: "Complete, in-house system control over critical deployment pipelines.",
  },
  {
    title: "Engineering-Led Coding",
    description: "Prioritizing strict system telemetry, security, and protocol over quick patches.",
  },
  {
    title: "Good Through Intelligence",
    description:
      "Deploying high-performance consolidated monoliths optimized for sub-millisecond API execution.",
  },
];

const LEADERSHIP = [
  { name: "Muhammad Ali Qamar", role: "Founder & CEO" },
  { name: "Lt. Col. James Harken (Ret.)", role: "VP Security Architecture" },
  { name: "Dr. Priya Deshmukh", role: "Head of Product" },
  { name: "Dr. Yuna Kim", role: "Chief AI Officer" },
];

const INSIGHTS = [
  {
    title: "Mapping the Next Wave of AI-Powered Business Intelligence",
    excerpt:
      "How organisations can harness data, insight, and decisions to stay ahead of rapidly shifting market conditions.",
    tag: "Whitepaper",
    href: "/#insights",
  },
  {
    title: "Modernising Legacy Systems Is Not a Technology Decision",
    excerpt:
      "This brief reframes modernisation as a business portfolio decision: where to sequence investment and how to measure success.",
    tag: "Executive Brief",
    href: "/#insights",
  },
  {
    title: "Critical Developments That Leaders Need to Tackle Now",
    excerpt:
      "The challenges facing top teams are significant, and precisely the ones well-funded programmes continue failing to address.",
    tag: "Case Study",
    href: "/#insights",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Beyond Code, We Engineer Legacies"
        subtitle="We build resilient, forward-thinking platforms, dedicated to innovation and sovereignty."
      />

      <StatFeature
        kicker="Our Mission"
        heading="To build persistent digital foundations."
        body="We deliver deterministic software architectures engineered to survive cloud vendor changes and maximize sovereign computing returns."
        statValue="100+"
        statLabel="Enterprise Projects Delivered"
        gradient
      />

      <StatFeature
        kicker="Our Vision"
        heading="A future of total architectural control."
        body="To eliminate outsourced complexity frameworks and establish in-house engineering capabilities for critical institutions."
        statValue="50+"
        statLabel="Countries Served Globally"
        reverse
        gradient
      />

      <ValuesGrid kicker="Our Values" heading="What Drives Us Forward" items={VALUES} />

      <FounderQuote
        kicker="From the Desk of the Founder"
        quote="Technology is not just a tool. It is your sovereignty."
        body="For too long, enterprise organizations have rented their logic models from global consulting syndicates. We started DevLogix to restore absolute platform ownership to the developers who build our world."
        name="Muhammad Ali Qamar"
        title="Founder & CEO"
      />

      <NumberedFeatures
        kicker="Discover More"
        heading="DevLogix Engineering Standards"
        items={STANDARDS}
      />

      <DoctrineStatement lines={["The", "DevLogix", "Doctrine."]} values={DOCTRINE_VALUES} />

      <ImpactSection
        kicker="Sustainability & Impact"
        heading="Engineering for Persistent Global Balance."
        body="We architect our core monoliths to limit CPU cycles, reducing overall server carbon tax by up to 40% globally."
        statKicker="Carbon Reduction"
        statValue="-40%"
        statLabel="Optimized telemetry cycles"
      />

      <TeamGrid
        kicker="Our Leadership"
        heading="Sovereign Architects & Lead Operators"
        members={LEADERSHIP}
      />

      <InsightsGrid kicker="Resources" heading="Featured Insights" items={INSIGHTS} />

      <Testimonials />

      <UpdatedContactBanner />
    </>
  );
}

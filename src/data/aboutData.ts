// Content for /about. Icon fields store an IconName key (see src/lib/icons.ts) rather than a
// component reference, so this stays a plain serializable shape a real backend/CMS could return
// as-is — the page resolves keys to components via getIcon() before handing them to sections.

import type { IconName } from "@/lib/icons";

export type AboutValue = {
  title: string;
  icon: IconName;
  description: string;
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    title: "Innovation",
    icon: "lightbulb",
    description:
      "Pioneering AI-native and sovereign engineering solutions that redefine what is possible.",
  },
  {
    title: "Integrity",
    icon: "shield-check",
    description:
      "No vaporware, no marketing assertions. We compile, execute, and verify systems directly.",
  },
  {
    title: "Excellence",
    icon: "star",
    description:
      "Strict adherence to deterministic, high-efficiency compute agreements and delivery standards.",
  },
  {
    title: "Collaboration",
    icon: "users",
    description:
      "Building deep, long-term partnerships with clients to co-create transformative solutions.",
  },
];

export type DoctrineValue = {
  icon: IconName;
  title: string;
  description: string;
};

export const DOCTRINE_VALUES: DoctrineValue[] = [
  {
    icon: "shield-check",
    title: "Integrity",
    description:
      "No vaporware, no marketing assertions. We compile, execute, and verify systems directly.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description: "Developing on-premise execution nodes optimized for physical data sovereignty.",
  },
  {
    icon: "target",
    title: "Dedication",
    description: "Strict adherence to deterministic, high-efficiency compute agreements.",
  },
];

export type EngineeringStandard = {
  title: string;
  description: string;
};

export const ENGINEERING_STANDARDS: EngineeringStandard[] = [
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

export type LeadershipMember = {
  name: string;
  role: string;
};

export const LEADERSHIP: LeadershipMember[] = [
  { name: "Muhammad Ali Qamar", role: "Founder & CEO" },
  { name: "Lt. Col. James Harken (Ret.)", role: "VP Security Architecture" },
  { name: "Dr. Priya Deshmukh", role: "Head of Product" },
  { name: "Dr. Yuna Kim", role: "Chief AI Officer" },
];

export type AboutInsight = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
};

export const ABOUT_INSIGHTS: AboutInsight[] = [
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

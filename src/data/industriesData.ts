// Content for /industries. Icon fields store an IconName key (see src/lib/icons.ts) rather than
// a component reference — see the same note in src/data/aboutData.ts.
//
// Canonical taxonomy: the source page listed three different, mutually-inconsistent industry
// lists (an 8-item grid, an 8-item sidebar with different members, and a 6-item footer list —
// see content-industries.md flag #1). This 8-item grid list is used consistently everywhere
// on the site now, with two names upgraded to their more descriptive sidebar variants.

import type { IconName } from "@/lib/icons";

export type Industry = {
  title: string;
  icon: IconName;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Banking & Financial Services",
    icon: "landmark",
    description:
      "Delivering secure, compliant, and scalable digital solutions for banks and fintechs, covering core platforms and fraud-aware architectures.",
  },
  {
    title: "Hospitality",
    icon: "concierge-bell",
    description:
      "Helping hotels, resorts, and travel businesses modernize guest experiences with smart booking systems and personalization engines.",
  },
  {
    title: "Communications",
    icon: "phone-call",
    description: "Building resilient, high-performance platforms for telecom and media companies.",
  },
  {
    title: "Healthcare & Life Sciences",
    icon: "activity",
    description:
      "Designing digital health platforms and AI-assisted tools that support providers with data accuracy, patient experience, and operational efficiency.",
  },
  {
    title: "Retail & CPG",
    icon: "shopping-bag",
    description:
      "Powering retail and e-commerce businesses with scalable storefronts, inventory tooling, and AI-driven personalization that drives conversion.",
  },
  {
    title: "Public Sector",
    icon: "building-2",
    description:
      "Partnering with government and public institutions to modernize legacy systems, improve service delivery, and build citizen-first digital infrastructure.",
  },
  {
    title: "Energy & Utilities",
    icon: "zap",
    description:
      "Enabling energy and utility providers to optimize grid operations, accelerate sustainability initiatives, and deliver smarter customer services.",
  },
  {
    title: "Education & EdTech",
    icon: "graduation-cap",
    description:
      "Transforming learning institutions and EdTech platforms with adaptive content delivery, learner analytics, and scalable virtual classroom solutions.",
  },
];

export type WhyUsPoint = {
  title: string;
  icon: IconName;
  description: string;
};

export const WHY_US: WhyUsPoint[] = [
  {
    title: "Deep Industry Expertise",
    icon: "building-2",
    description:
      "Our certified professionals bring real-world knowledge across banking, healthcare, retail, and public sector.",
  },
  {
    title: "Agile & Transparent Process",
    icon: "refresh-cw",
    description:
      "We work in sprints with constant communication, so you're never in the dark about progress or priorities.",
  },
  {
    title: "End-to-End Solutions",
    icon: "layers",
    description:
      "From strategy and design to development and support, we cover the full product lifecycle under one roof.",
  },
  {
    title: "Proven Track Record",
    icon: "award",
    description: "50+ projects delivered with measurable impact on efficiency, revenue, and customer satisfaction.",
  },
];

export type IndustrySpotlightEntry = {
  name: string;
  body: string;
  services: string[];
  caseStudyTag: string;
  caseStudyTitle: string;
  caseStudyBody: string;
};

export const INDUSTRY_SPOTLIGHT: IndustrySpotlightEntry[] = [
  {
    name: "Banking & Financial Services",
    body: "We help financial institutions modernise their core systems, elevate digital experiences, and build resilience. Our solutions drive compliance, agility, and innovation, so banks and financial firms can lead in a rapidly evolving landscape.",
    services: [
      "Core Modernisation",
      "Digital Banking Transformation",
      "Global Capacity Centre",
      "Risk & Compliance Technology",
      "Data Analytics & AI",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Accelerating digital transformation for a leading bank",
    caseStudyBody:
      "How DevLogix helped a top-tier bank modernise its core systems and launch a fully digital banking platform in under 18 months.",
  },
  {
    name: "Hospitality",
    body: "We help hotel groups, resorts, and travel businesses modernise guest-facing systems and back-of-house operations alike. Our solutions unify booking, loyalty, and property management so hospitality brands can deliver personalised experiences at scale.",
    services: [
      "Smart Booking Platforms",
      "Guest Experience & Personalisation",
      "Property Management Integration",
      "Loyalty & CRM Systems",
      "Revenue & Demand Analytics",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Modernising guest experience for a regional hotel group",
    caseStudyBody:
      "How DevLogix unified booking and loyalty systems across properties, cutting reservation friction and lifting repeat bookings.",
  },
  {
    name: "Communications",
    body: "We build resilient, high-performance platforms for telecom operators and media companies navigating rapid shifts in content delivery and connectivity. Our solutions modernise network operations and customer-facing systems without disrupting service.",
    services: [
      "Network Operations Modernisation",
      "Customer Experience Platforms",
      "Billing & OSS/BSS Systems",
      "Content Delivery Infrastructure",
      "Data Analytics & AI",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Rebuilding customer operations for a regional telecom provider",
    caseStudyBody:
      "How DevLogix replaced a legacy billing and support stack with a unified platform, reducing resolution time and churn.",
  },
  {
    name: "Healthcare & Life Sciences",
    body: "We design digital health platforms and AI-assisted tools that support providers with data accuracy, patient experience, and operational efficiency. Our solutions help healthcare organisations modernise securely, with compliance built in from day one.",
    services: [
      "Digital Health Platforms",
      "Patient Experience Systems",
      "Clinical Data & Interoperability",
      "AI-Assisted Diagnostics Tooling",
      "Regulatory & Compliance Technology",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Building a compliant patient data platform for a healthcare network",
    caseStudyBody:
      "How DevLogix unified fragmented patient records into one secure, interoperable platform across a multi-site provider network.",
  },
  {
    name: "Retail & CPG",
    body: "We power retail and e-commerce businesses with scalable storefronts, inventory tooling, and AI-driven personalisation that drives conversion. Our solutions connect the full commerce stack, from supply chain to checkout.",
    services: [
      "E-Commerce Platforms",
      "Inventory & Supply Chain Tooling",
      "AI-Driven Personalisation",
      "Omnichannel Integration",
      "Data Analytics & AI",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Scaling omnichannel commerce for a multi-brand retailer",
    caseStudyBody:
      "How DevLogix unified storefront and inventory systems across brands, enabling real-time stock visibility and faster checkout.",
  },
  {
    name: "Public Sector",
    body: "We partner with government and public institutions to modernise legacy systems, improve service delivery, and build citizen-first digital infrastructure. Our solutions balance security, compliance, and accessibility at scale.",
    services: [
      "Legacy System Modernisation",
      "Citizen-Facing Digital Services",
      "Data Security & Compliance",
      "Case Management Systems",
      "Data Analytics & AI",
      "Cloud Migration & Infrastructure",
    ],
    caseStudyTag: "Case Study",
    caseStudyTitle: "Modernising citizen services for a public sector agency",
    caseStudyBody:
      "How DevLogix replaced a paper-based intake process with a secure digital service, cutting processing time significantly.",
  },
];

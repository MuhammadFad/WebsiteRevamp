import type { Metadata } from "next";
import {
  Activity,
  Award,
  Building2,
  ConciergeBell,
  GraduationCap,
  Landmark,
  Layers,
  PhoneCall,
  RefreshCw,
  ShoppingBag,
  Zap,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import IntroWithStatsBar from "@/components/sections/IntroWithStatsBar";
import ValuesGrid from "@/components/sections/ValuesGrid";
import IndustrySpotlight from "@/components/sections/IndustrySpotlight";
import UpdatedContactBanner from "@/components/sections/UpdatedContactBanner";

export const metadata: Metadata = {
  title: "Industries We Serve — Solutions by Sector | DevLogix",
  description:
    "DevLogix delivers scalable technology and AI-driven solutions across banking, healthcare, retail, hospitality, and more.",
};

// Canonical taxonomy: the source page listed three different, mutually-inconsistent industry
// lists (an 8-item grid, an 8-item sidebar with different members, and a 6-item footer list —
// see content-industries.md flag #1). This 8-item grid list is used consistently everywhere
// on the site now, with two names upgraded to their more descriptive sidebar variants.
const INDUSTRIES = [
  {
    title: "Banking & Financial Services",
    icon: Landmark,
    description:
      "Delivering secure, compliant, and scalable digital solutions for banks and fintechs, covering core platforms and fraud-aware architectures.",
  },
  {
    title: "Hospitality",
    icon: ConciergeBell,
    description:
      "Helping hotels, resorts, and travel businesses modernize guest experiences with smart booking systems and personalization engines.",
  },
  {
    title: "Communications",
    icon: PhoneCall,
    description: "Building resilient, high-performance platforms for telecom and media companies.",
  },
  {
    title: "Healthcare & Life Sciences",
    icon: Activity,
    description:
      "Designing digital health platforms and AI-assisted tools that support providers with data accuracy, patient experience, and operational efficiency.",
  },
  {
    title: "Retail & CPG",
    icon: ShoppingBag,
    description:
      "Powering retail and e-commerce businesses with scalable storefronts, inventory tooling, and AI-driven personalization that drives conversion.",
  },
  {
    title: "Public Sector",
    icon: Building2,
    description:
      "Partnering with government and public institutions to modernize legacy systems, improve service delivery, and build citizen-first digital infrastructure.",
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    description:
      "Enabling energy and utility providers to optimize grid operations, accelerate sustainability initiatives, and deliver smarter customer services.",
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    description:
      "Transforming learning institutions and EdTech platforms with adaptive content delivery, learner analytics, and scalable virtual classroom solutions.",
  },
];

const WHY_US = [
  {
    title: "Deep Industry Expertise",
    icon: Building2,
    description:
      "Our certified professionals bring real-world knowledge across banking, healthcare, retail, and public sector.",
  },
  {
    title: "Agile & Transparent Process",
    icon: RefreshCw,
    description:
      "We work in sprints with constant communication, so you're never in the dark about progress or priorities.",
  },
  {
    title: "End-to-End Solutions",
    icon: Layers,
    description:
      "From strategy and design to development and support, we cover the full product lifecycle under one roof.",
  },
  {
    title: "Proven Track Record",
    icon: Award,
    description: "50+ projects delivered with measurable impact on efficiency, revenue, and customer satisfaction.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Solutions Built Around Your Industry"
        subtitle="DevLogix partners with organizations across sectors to solve complex challenges, delivering scalable technology and AI-driven solutions aligned with each industry's goals, regulations, and pace of change."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/#services" }}
        visual={
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-linear-to-br from-brand-card via-brand-navy to-brand-teal-dark">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.35),transparent_60%)]"
            />
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center text-sm font-medium text-white/70">
              Industry visual placeholder — source the real asset for this frame.
            </div>
          </div>
        }
      />

      <IntroWithStatsBar
        kicker="Who We Are"
        heading="We Understand Industries, Not Just Technology"
        body="DevLogix works closely with businesses across hospitality, communications, banking, healthcare, retail, and the public sector, helping each translate complex operational needs into scalable, secure digital products."
        stats={[
          { value: "8", label: "Industries Verticalized" },
          { value: "7+", label: "Regional Hubs" },
          { value: "15+", label: "Industry Experts" },
          { value: "50+", label: "Projects Delivered" },
        ]}
      />

      <ValuesGrid
        kicker="Industries We Serve"
        heading="Our Core Industries"
        body="We work alongside global enterprises across industries to navigate complex challenges with scalable, practical technology. With deep industry expertise and proven delivery, we build adaptable, resilient solutions that modernize operations, elevate customer interactions, and help businesses move forward with confidence."
        items={INDUSTRIES.map((industry) => ({
          ...industry,
          href: "/contact",
          linkLabel: "Explore More",
        }))}
      />

      <IndustrySpotlight
        heading="Creating Meaningful Impact Across Industries"
        body="We partner with enterprises across industries to solve complex challenges, delivering scalable technology services aligned with their goals to help them adapt, grow, and lead."
        industries={[
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
        ]}
        learnMoreHref="/contact"
        caseStudyHref="/contact"
      />

      <ValuesGrid
        kicker="Why Choose Us"
        heading="Why Work With DevLogix?"
        body="We partner with ambitious businesses to deliver technology that moves the needle, with the expertise, process, and commitment to back it up."
        items={WHY_US}
        tone="dark"
      />

      <UpdatedContactBanner />
    </>
  );
}

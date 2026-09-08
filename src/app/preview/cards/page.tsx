import {
  Activity,
  Award,
  Building2,
  Handshake,
  Landmark,
  Layers,
  Lightbulb,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";

import BlogCard from "@/components/cards/BlogCard";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import FeatureItem from "@/components/cards/FeatureItem";
import LogoStrip from "@/components/cards/LogoStrip";
import IconCard from "@/components/cards/IconCard";
import NumberedCard from "@/components/cards/NumberedCard";
import ServiceCard from "@/components/cards/ServiceCard";
import StatCard from "@/components/cards/StatCard";
import StatCounter from "@/components/cards/StatCounter";
import TeamCard from "@/components/cards/TeamCard";
import TestimonialCard from "@/components/cards/TestimonialCard";


export default function CardsPreviewPage() {
  return (
    <main className="min-h-screen bg-[#F6F8F9] px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16A97F]">
            Preview
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#0B1A2B]">
            Card components
          </h1>
        </header>

        {/* 1 — IconCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            IconCard — variant &quot;card&quot;
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Industries grid. First card uses <code>active</code>.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <IconCard
              icon={<Landmark />}
              title="Banking & Financial Services"
              description="Delivering secure, compliant, and scalable digital solutions for banks and fintechs."
              href="/industries/banking"
              linkLabel="Explore More"
              active
            />
            <IconCard
              icon={<Building2 />}
              title="Hospitality"
              description="Helping hotels, resorts, and travel businesses modernize guest experiences."
              href="/industries/hospitality"
              linkLabel="Explore More"
            />
            <IconCard
              icon={<PhoneCall />}
              title="Communications"
              description="Building resilient, high-performance platforms for telecom and media companies."
              href="/industries/communications"
              linkLabel="Explore More"
            />
            <IconCard
              icon={<Activity />}
              title="Healthcare"
              description="Designing digital health platforms and AI-assisted tools that support patient experience."
              href="/industries/healthcare"
              linkLabel="Explore More"
            />
          </div>

          <p className="mb-5 mt-10 text-sm text-[#5B6B7C]">
            Same component, no link — the four About values.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <IconCard
              icon={<Lightbulb />}
              title="Innovation"
              description="Pioneering AI-native and sovereign engineering solutions that redefine what is possible."
            />
            <IconCard
              icon={<ShieldCheck />}
              title="Integrity"
              description="No vaporware, no marketing assertions. We compile, execute, and verify systems directly."
            />
            <IconCard
              icon={<Star />}
              title="Excellence"
              description="Strict adherence to deterministic, high-efficiency compute agreements and delivery standards."
            />
            <IconCard
              icon={<Handshake />}
              title="Collaboration"
              description="Building deep, long-term partnerships with clients to co-create transformative solutions."
            />
          </div>
        </section>

        {/* 1b — IconCard rows on the mint doctrine strip */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            IconCard — variant &quot;row&quot;
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            The three doctrine rows on the About mint strip.
          </p>

          <div className="rounded-2xl bg-[#DDF3EA] p-8">
            <div className="space-y-7">
              <IconCard
                variant="row"
                icon={<ShieldCheck />}
                title="Integrity"
                description="No vaporware, no marketing assertions. We compile, execute, and verify systems directly."
              />
              <IconCard
                variant="row"
                icon={<Lightbulb />}
                title="Innovation"
                description="Developing on-premise execution modes optimized for physical data sovereignty."
              />
              <IconCard
                variant="row"
                icon={<Target />}
                title="Dedication"
                description="Strict adherence to deterministic, high-efficiency compute agreements."
              />
            </div>
          </div>
        </section>

        {/* 2 — FeatureItem */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            FeatureItem
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Left: variant &quot;check&quot; (Home). Right: variant
            &quot;icon&quot; (Industries).
          </p>

          <div className="grid gap-8 rounded-2xl bg-white p-8 md:grid-cols-2">
            <div className="space-y-5">
              <FeatureItem
                title="Expert Team"
                description="Skilled professionals with deep industry expertise and modern engineering stack."
              />
              <FeatureItem
                title="Client Focused"
                description="We prioritise your business objectives and deliver highly measurable outcomes."
              />
              <FeatureItem
                title="Agile Approach"
                description="Highly flexible, fully transparent, and iteratively managed product lifecycles."
              />
              <FeatureItem
                title="Quality & Security"
                description="Maintaining the absolute highest standard in quality assurance and data protection."
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <FeatureItem
                variant="icon"
                icon={<Landmark />}
                title="Deep Industry Expertise"
                description="Our certified professionals bring real-world knowledge across banking, healthcare, retail, and public sector."
              />
              <FeatureItem
                variant="icon"
                icon={<Layers />}
                title="End-to-End Solutions"
                description="From strategy and design to development and support, we cover the full product lifecycle under one roof."
              />
              <FeatureItem
                variant="icon"
                icon={<RefreshCw />}
                title="Agile & Transparent Process"
                description="We work in sprints with constant communication, so you're never in the dark about progress."
              />
              <FeatureItem
                variant="icon"
                icon={<Award />}
                title="Proven Track Record"
                description="50+ projects delivered with measurable impact on efficiency, revenue, and customer satisfaction."
              />
            </div>
          </div>
        </section>

        {/* 3 — StatCounter */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            StatCounter
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Sits on the dark StatsBanner. Top: Home (left aligned). Bottom:
            Industries (centred, with dividers).
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-8 rounded-2xl bg-[#0A2036] px-8 py-10 md:grid-cols-4">
              <StatCounter value="10+" label="Years on Market" />
              <StatCounter value="350+" label="Professionals on Board" />
              <StatCounter value="800+" label="Projects Delivered" />
              <StatCounter value="50+" label="Active Clients" />
            </div>

            <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-[#0A2036] px-8 py-10 md:grid-cols-4 md:divide-x md:divide-white/10">
              <StatCounter align="center" value="10+" label="Years of Experience" />
              <StatCounter align="center" value="30+" label="Happy Clients" />
              <StatCounter align="center" value="15+" label="Industry Experts" />
              <StatCounter align="center" value="50+" label="Projects Delivered" />
            </div>
          </div>
        </section>

        {/* 4 — StatCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">StatCard</h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            About page — sits beside the mission and vision text.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center gap-6 rounded-2xl bg-white p-6">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16A97F]">
                  Our Mission
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B1A2B]">
                  To build persistent digital foundations.
                </h3>
              </div>
              <div className="w-1/2">
                <StatCard value="100+" label="Enterprise Projects Delivered" />
              </div>
            </div>

            <div className="flex items-center gap-6 rounded-2xl bg-[#DDF3EA] p-6">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16A97F]">
                  Our Vision
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B1A2B]">
                  A future of total architectural control.
                </h3>
              </div>
              <div className="w-1/2">
                <StatCard value="50+" label="Countries Served Globally" />
              </div>
            </div>
          </div>
        </section>

        {/* 5 — NumberedCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            NumberedCard
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            About page — DevLogix Engineering Standards.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <NumberedCard
              number="1"
              title="Sovereign First"
              description="Complete, in-house system control over critical deployment pipelines."
            />
            <NumberedCard
              number="2"
              title="Precision-Led Coding"
              description="Prioritising strict system telemetry, security, and protocol over quick patches."
            />
            <NumberedCard
              number="3"
              title="Good Through Intelligence"
              description="Deploying high-performance consolidated monolithic optimised for sub-millisecond API execution."
            />
          </div>
        </section>

        {/* 6 — TestimonialCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            TestimonialCard
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Home and About — three cards on the dark navy strip. No photos yet,
            so these fall back to initials.
          </p>

          <div className="grid gap-5 rounded-2xl bg-[#0A2036] p-6 sm:p-10 md:grid-cols-3">
            <TestimonialCard
              quote="DevLogix transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched — delivery was on time, on spec, and exceeded expectations."
              name="Ahmad Khan"
              role="CTO, Fintech Solutions"
            />
            <TestimonialCard
              quote="The AI integration roadmap DevLogix designed for us reduced our operational costs by 35% in under six months. They don't just deliver software — they deliver transformative outcomes."
              name="Sarah Reynolds"
              role="VP Operations, MediCore Systems"
            />
            <TestimonialCard
              quote="From initial scoping to final deployment, DevLogix demonstrated a level of technical mastery and strategic clarity that set them apart from every other vendor we evaluated."
              name="Omar Malik"
              role="Director of Engineering, GovCloud Pakistan"
            />
          </div>
        </section>

        {/* 7 — TeamCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">TeamCard</h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            About page — Sovereign Architects &amp; Lead Operators. No photos in
            public/ yet, so these fall back to initials.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <TeamCard
              name="Muhammad Ali Qamar"
              role="Founder & CEO @ DevLogix"
              linkedin="https://linkedin.com"
            />
            <TeamCard
              name="Lt. Col. James Harken (Ret.)"
              role="VP Security Architecture"
              linkedin="https://linkedin.com"
            />
            <TeamCard
              name="Dr. Priya Deshmukh"
              role="Head of Product"
              linkedin="https://linkedin.com"
            />
            <TeamCard
              name="Dr. Yuna Kim"
              role="Chief AI Officer"
              linkedin="https://linkedin.com"
            />
          </div>
        </section>

        {/* 8 — ServiceCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            ServiceCard
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Home page services slider. No images in public/ yet, so the picture
            area shows as a mint block.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="AI Transformation"
              description="Drive measurable business value with scalable AI capabilities across DevLogix Predictive AI, ML, and automation to enhance decisions, productivity, and operational agility."
              href="/services/ai-transformation"
            />
            <ServiceCard
              title="Data and Analytics"
              description="Organise, analyse, and activate your data to uncover insights faster, make better decisions, and stay competitive in constantly changing markets."
              href="/services/data-analytics"
            />
            <ServiceCard
              title="Cloud Solutions"
              description="From cloud migration to optimisation, we create secure, scalable environments that improve agility, reduce complexity, and support continuous innovation."
              href="/services/cloud"
            />
            <ServiceCard
              title="Digital Engineering"
              description="We bring product ideas to life with modern engineering, building resilient platforms designed for speed, scale, and measurable outcomes."
              href="/services/digital-engineering"
            />
          </div>
        </section>

        {/* 9 — BlogCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">BlogCard</h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Home layout — one &quot;overlay&quot; card beside two
            &quot;horizontal&quot; cards.
          </p>

          <div className="grid gap-5 lg:grid-cols-2">
            <BlogCard
              variant="overlay"
              tag="Blog"
              title="10 Practical Principles for Reliable Microservices Web Apps"
              href="/insights/microservices"
            />

            <div className="grid gap-5">
              <BlogCard
                variant="horizontal"
                title="Why Most Digital Transformations Fail (and How Sovereign Engineering Saves Them)"
                href="/insights/why-transformations-fail"
              />
              <BlogCard
                variant="horizontal"
                title="How AI-Powered Code Review is Reshaping Enterprise DevOps"
                href="/insights/ai-code-review"
              />
            </div>
          </div>

          <p className="mb-5 mt-8 text-sm text-[#5B6B7C]">
            About layout — three &quot;vertical&quot; cards.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              tag="Whitepaper"
              title="Mapping the Next Wave of AI-Powered Business Intelligence"
              excerpt="How organisations can harness data, insight, and decisions to stay ahead of rapidly shifting market conditions."
              tags={["Data & AI", "Healthcare"]}
              href="/insights/ai-business-intelligence"
            />
            <BlogCard
              tag="Case Study"
              title="Modernising Legacy Systems Is Not a Technology Decision: It's a Business One"
              excerpt="This brief reframes modernisation as a business portfolio decision, where its sequence investment and how to measure success."
              tags={["Modernisation", "Enterprise"]}
              href="/insights/legacy-modernisation"
            />
            <BlogCard
              tag="Blog"
              title="Critical Developments That Leaders Need to Tackle Now"
              excerpt="The challenges facing top teams are significant, and precisely the ones that well-funded programmes continue failing to address."
              tags={["Data Engineering", "Technology"]}
              href="/insights/critical-developments"
            />
          </div>
        </section>

        {/* 10 — CaseStudyCard */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            CaseStudyCard
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Industries page — sits on the right of the Industry Impact panel.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard
              title="Accelerating digital transformation for a leading bank"
              description="How DevLogix helped a top-tier bank modernise its core systems and launch a fully digital banking platform in under 18 months."
              href="/case-studies/banking"
            />
            <CaseStudyCard
              label="Success Story"
              title="Cutting guest check-in time by 60% for a hotel group"
              description="A unified booking engine across 40 properties, rolled out without a single night of downtime."
              href="/case-studies/hospitality"
              linkLabel="View Case"
            />
          </div>
        </section>

        {/* 11 — LogoStrip */}
        <section>
          <h2 className="mb-1 text-lg font-semibold text-[#0B1A2B]">
            LogoStrip
          </h2>
          <p className="mb-5 text-sm text-[#5B6B7C]">
            Home page — the thin strip under the hero. No logo files yet, so
            these fall back to the company names.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl bg-[#0A2036] px-6 py-8">
              <LogoStrip
                title="Trusted by Market Leaders"
                logos={[
                  { name: "TechCorp" },
                  { name: "InnovateCo" },
                  { name: "DataFlow" },
                  { name: "CloudSync" },
                  { name: "AI Labs" },
                  { name: "QuantumDev" },
                  { name: "NexGen" },
                ]}
              />
            </div>

            <div className="rounded-2xl bg-white px-6 py-8">
              <LogoStrip
                tone="light"
                title="Same component on a light section"
                logos={[
                  { name: "TechCorp" },
                  { name: "InnovateCo" },
                  { name: "DataFlow" },
                  { name: "CloudSync" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

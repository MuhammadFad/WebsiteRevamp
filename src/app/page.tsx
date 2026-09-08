import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { IconBox } from "@/components/ui/IconBox";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BulletList } from "@/components/ui/BulletList";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Accordion } from "@/components/ui/Accordion";
import { VerticalTabs } from "@/components/ui/VerticalTabs";
import { Carousel } from "@/components/ui/Carousel";

export default function Home() {
  return (
    <>
      {/* 1. Header & Hero Area */}
      <Section bg="grey">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Design System", href: "/" },
              { label: "Components" },
            ]}
            className="mb-6"
          />
          <SectionHeading
            label="Design System Showcase"
            title="DevLogix Reusable UI & Layout Components"
            description=" "
            align="center"
          />

          {/* Buttons & Tags Showcase */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Button variant="filled">Filled Green</Button>
            <Button variant="outline">Transparent Outline</Button>
            <Button variant="pill">Rounded Pill</Button>
            <ArrowLink href="#forms">Jump to Form Inputs</ArrowLink>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <Tag variant="mint">BLOG</Tag>
            <Tag variant="dark">WHITEPAPER</Tag>
            <Tag variant="outline">CASE STUDY</Tag>
          </div>
        </Container>
      </Section>

      {/* 2. Content Pieces (IconBox, BulletList) */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">List & Icons</h3>
              <BulletList
                items={[
                  "Enterprise scalable cloud solutions",
                  "Automated integration & zero-downtime deployment",
                  "Secure API architecture & real-time telemetry",
                ]}
              />
            </div>
            <div className="flex items-center gap-4">
              <IconBox size="sm">⚡</IconBox>
              <IconBox size="md">🚀</IconBox>
              <IconBox size="lg">💎</IconBox>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Interactive Accordion & Carousel */}
      <Section bg="mint">
        <Container>
          <SectionHeading
            label="Interactive"
            title="Accordion & Sliders"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Accordion
                items={[
                  {
                    id: "1",
                    title: "What makes these components reusable?",
                    content: "They are modular and driven by flexible props, allowing seamless customization across different pages and sections.",
                  },
                  {
                    id: "2",
                    title: "Are animations easy to attach?",
                    content: "All elements use standard Tailwind transitions and can be effortlessly wrapped with Framer Motion or custom keyframes.",
    },
                  
                ]}
              />
            </div>
            <div>
              <Carousel>
                <div className="h-44 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-sm">
                  Slide 1: Industry Impact
                </div>
                <div className="h-44 bg-slate-900 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-sm">
                  Slide 2: Scalable Cloud
                </div>
                <div className="h-44 bg-teal-600 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-sm">
                  Slide 3: Modern UI Architecture
                </div>
              </Carousel>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Vertical Tabs */}
      <Section bg="white">
        <Container>
          <SectionHeading
            label="Tabs"
            title="Vertical Content Switcher"
            align="center"
          />
          <VerticalTabs
            items={[
              {
                id: "fintech",
                label: "Financial Technology",
                content: (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">FinTech Infrastructure</h4>
                    <p className="text-sm text-slate-600">High-throughput transaction systems with multi-currency settlement capabilities.</p>
                  </div>
                ),
              },
              {
                id: "health",
                label: "Digital Health",
                content: (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Healthcare Platforms</h4>
                    <p className="text-sm text-slate-600">HIPAA-compliant patient portals, distributed electronic records, and telemetry.</p>
                  </div>
                ),
              },
            ]}
          />
        </Container>
      </Section>

      {/* 5. Contact Form Elements */}
      <Section id="forms" bg="grey">
        <Container className="max-w-2xl">
          <SectionHeading
            label="Form Components"
            title="Contact Inputs"
            align="center"
          />
          <form className="space-y-4 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <Input label="Your Name" placeholder="e.g. Sarah Jenkins" />
            <Input label="Email Address" type="email" placeholder="name@company.com" />
            <Select
              label="Select Service"
              placeholder="Choose a service"
              options={[
                { value: "web", label: "Web Development" },
                { value: "cloud", label: "Cloud Modernization" },
                { value: "consulting", label: "Architecture Review" },
              ]}
            />
            <Textarea label="Project Scope" placeholder="Describe your technical requirements..." />
            <Checkbox label="I agree to the DevLogix Privacy Policy and Terms." />
            <Button variant="filled" className="w-full mt-4">
              Submit Project Inquiry
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
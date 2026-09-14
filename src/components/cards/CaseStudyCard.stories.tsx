import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import CaseStudyCard from "./CaseStudyCard";

const meta = {
  title: "Cards/CaseStudyCard",
  component: CaseStudyCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    label: { control: "text" },
    href: { control: "text" },
    linkLabel: { control: "text" },
  },
  args: {
    title: "Accelerating digital transformation for a leading bank",
  },
} satisfies Meta<typeof CaseStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Accelerating digital transformation for a leading bank",
    description:
      "How DevLogix helped a top-tier bank modernise its core systems and launch a fully digital banking platform in under 18 months.",
    href: "/case-studies/banking",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Success Story",
    title: "Cutting guest check-in time by 60% for a hotel group",
    description:
      "A unified booking engine across 40 properties, rolled out without a single night of downtime.",
    href: "/case-studies/hospitality",
    linkLabel: "View Case",
  },
};

export const NoLink: Story = {
  args: {
    title: "Modernising claims processing for a national insurer",
    description:
      "Rebuilding a decades-old claims pipeline into an event-driven platform with real-time status tracking.",
  },
};

export const Row: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
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
  ),
};

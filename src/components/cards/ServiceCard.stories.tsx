import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ServiceCard from "./ServiceCard";

const meta = {
  title: "Cards/ServiceCard",
  component: ServiceCard,
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
    image: { control: "text" },
    href: { control: "text" },
    linkLabel: { control: "text" },
  },
  args: {
    title: "AI Transformation",
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "AI Transformation",
    description:
      "Drive measurable business value with scalable AI capabilities across DevLogix Predictive AI, ML, and automation to enhance decisions, productivity, and operational agility.",
    href: "/services/ai-transformation",
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: "https://picsum.photos/seed/devlogix-service/640/400",
  },
};

export const NoLink: Story = {
  args: {
    title: "Data and Analytics",
    description:
      "Organise, analyse, and activate your data to uncover insights faster, make better decisions, and stay competitive.",
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
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <ServiceCard
        title="AI Transformation"
        description="Drive measurable business value with scalable AI capabilities across DevLogix Predictive AI, ML, and automation."
        href="/services/ai-transformation"
      />
      <ServiceCard
        title="Data and Analytics"
        description="Organise, analyse, and activate your data to uncover insights faster and make better decisions."
        href="/services/data-analytics"
      />
      <ServiceCard
        title="Cloud Solutions"
        description="From cloud migration to optimisation, we create secure, scalable environments that improve agility."
        href="/services/cloud"
      />
      <ServiceCard
        title="Digital Engineering"
        description="We bring product ideas to life with modern engineering, building resilient platforms designed for speed."
        href="/services/digital-engineering"
      />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TestimonialCard from "./TestimonialCard";

const meta = {
  title: "Cards/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-brand-navy p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    quote: { control: "text" },
    name: { control: "text" },
    role: { control: "text" },
    avatar: { control: "text" },
  },
  args: {
    quote:
      "DevLogix transformed our legacy infrastructure into a sovereign, high-performance platform.",
    name: "Ahmad Khan",
    role: "CTO, Fintech Solutions",
  },
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote:
      "DevLogix transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched — delivery was on time, on spec, and exceeded expectations.",
    name: "Ahmad Khan",
    role: "CTO, Fintech Solutions",
  },
};

export const WithAvatar: Story = {
  args: {
    ...Default.args,
    avatar: "https://i.pravatar.cc/80?img=12",
  },
};

export const Row: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy p-10">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-5 md:grid-cols-3">
      <TestimonialCard
        quote="DevLogix transformed our legacy infrastructure into a sovereign, high-performance platform. Their engineering discipline is unmatched."
        name="Ahmad Khan"
        role="CTO, Fintech Solutions"
      />
      <TestimonialCard
        quote="The AI integration roadmap DevLogix designed for us reduced our operational costs by 35% in under six months."
        name="Sarah Reynolds"
        role="VP Operations, MediCore Systems"
      />
      <TestimonialCard
        quote="From initial scoping to final deployment, DevLogix demonstrated a level of technical mastery and strategic clarity."
        name="Omar Malik"
        role="Director of Engineering, GovCloud Pakistan"
      />
    </div>
  ),
};

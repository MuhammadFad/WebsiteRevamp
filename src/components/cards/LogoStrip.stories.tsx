import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import LogoStrip from "./LogoStrip";

const meta = {
  title: "Cards/LogoStrip",
  component: LogoStrip,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    tone: { control: "radio", options: ["dark", "light"] },
    logos: { control: "object" },
    marquee: { control: "boolean" },
  },
} satisfies Meta<typeof LogoStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

const logos = [
  { name: "TechCorp" },
  { name: "InnovateCo" },
  { name: "DataFlow" },
  { name: "CloudSync" },
  { name: "AI Labs" },
  { name: "QuantumDev" },
  { name: "NexGen" },
];

export const Dark: Story = {
  args: {
    title: "Trusted by Market Leaders",
    logos,
  },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export const Light: Story = {
  args: {
    tone: "light",
    title: "Trusted by Market Leaders",
    logos: logos.slice(0, 4),
  },
  decorators: [
    (Story) => (
      <div className="bg-white px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export const Marquee: Story = {
  args: {
    title: "Trusted by Market Leaders",
    logos,
    marquee: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export const NoTitle: Story = {
  args: {
    logos: logos.slice(0, 5),
  },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

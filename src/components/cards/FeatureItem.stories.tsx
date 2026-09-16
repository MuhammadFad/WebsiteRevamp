import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Landmark } from "lucide-react";

import FeatureItem from "./FeatureItem";

const meta = {
  title: "Cards/FeatureItem",
  component: FeatureItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-white p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    variant: { control: "radio", options: ["check", "icon"] },
    icon: { control: false },
  },
  args: {
    title: "Expert Team",
  },
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckVariant: Story = {
  args: {
    title: "Expert Team",
    description:
      "Skilled professionals with deep industry expertise and modern engineering stack.",
  },
};

export const IconVariant: Story = {
  args: {
    variant: "icon",
    icon: <Landmark />,
    title: "Deep Industry Expertise",
    description:
      "Our certified professionals bring real-world knowledge across banking, healthcare, retail, and public sector.",
  },
};

export const CheckList: Story = {
  render: () => (
    <div className="space-y-5">
      <FeatureItem
        title="Expert Team"
        description="Skilled professionals with deep industry expertise and modern engineering stack."
      />
      <FeatureItem
        title="Client Focused"
        description="We prioritize your business objectives and deliver highly measurable outcomes."
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
  ),
};

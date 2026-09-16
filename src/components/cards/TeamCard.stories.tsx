import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TeamCard from "./TeamCard";

const meta = {
  title: "Cards/TeamCard",
  component: TeamCard,
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
    name: { control: "text" },
    role: { control: "text" },
    image: { control: "text" },
    linkedin: { control: "text" },
  },
  args: {
    name: "Muhammad Ali Qamar",
    role: "Founder & CEO @ DevLogix",
  },
} satisfies Meta<typeof TeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: {
    name: "Muhammad Ali Qamar",
    role: "Founder & CEO @ DevLogix",
    linkedin: "https://linkedin.com",
  },
};

export const NoLinkedin: Story = {
  args: {
    name: "Dr. Priya Deshmukh",
    role: "Head of Product",
  },
};

export const WithPhoto: Story = {
  args: {
    name: "Dr. Yuna Kim",
    role: "Chief AI Officer",
    image: "https://i.pravatar.cc/400?img=47",
    linkedin: "https://linkedin.com",
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
  ),
};

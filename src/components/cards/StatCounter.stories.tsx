import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import StatCounter from "./StatCounter";

const meta = {
  title: "Cards/StatCounter",
  component: StatCounter,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="bg-brand-navy p-10">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    align: { control: "radio", options: ["left", "center"] },
  },
  args: {
    value: "10+",
    label: "Years on Market",
  },
} satisfies Meta<typeof StatCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    value: "10+",
    label: "Years on Market",
    align: "left",
  },
};

export const Center: Story = {
  args: {
    value: "350+",
    label: "Professionals on Board",
    align: "center",
  },
};

export const Row: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      <StatCounter value="10+" label="Years on Market" />
      <StatCounter value="350+" label="Professionals on Board" />
      <StatCounter value="800+" label="Projects Delivered" />
      <StatCounter value="50+" label="Active Clients" />
    </div>
  ),
};

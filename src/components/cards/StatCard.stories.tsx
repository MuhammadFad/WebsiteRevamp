import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import StatCard from "./StatCard";

const meta = {
  title: "Cards/StatCard",
  component: StatCard,
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
    value: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "100+",
    label: "Enterprise Projects Delivered",
  },
};

export const LongLabel: Story = {
  args: {
    value: "50+",
    label: "Countries Served Globally Across Every Continent",
  },
};

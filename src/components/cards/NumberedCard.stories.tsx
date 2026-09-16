import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NumberedCard from "./NumberedCard";

const meta = {
  title: "Cards/NumberedCard",
  component: NumberedCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    number: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
  args: {
    number: "1",
    title: "Sovereign First",
  },
} satisfies Meta<typeof NumberedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: "1",
    title: "Sovereign First",
    description:
      "Complete, in-house system control over critical deployment pipelines.",
  },
};

export const NoDescription: Story = {
  args: {
    number: "2",
    title: "Precision-Led Coding",
  },
};

export const Row: Story = {
  render: () => (
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
  ),
};

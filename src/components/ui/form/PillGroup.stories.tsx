import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PillGroup, { type PillGroupProps } from "./PillGroup";

function Controlled(props: Omit<PillGroupProps, "value" | "onChange"> & { initial?: string }) {
  const [value, setValue] = useState(props.initial ?? "");
  return <PillGroup {...props} value={value} onChange={setValue} />;
}

const meta = {
  title: "Forms/PillGroup",
  component: PillGroup,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-md bg-white p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "I am looking for",
    name: "lookingFor",
    options: ["Software Development", "Digital Transformation", "AI & Data", "UI/UX Design", "Partnership"],
    value: "",
    onChange: () => {},
  },
} satisfies Meta<typeof PillGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Controlled {...args} />,
};

export const Selected: Story = {
  render: (args) => <Controlled {...args} initial="AI & Data" />,
};

export const WithError: Story = {
  args: { required: true, error: "Please select an option." },
  render: (args) => <Controlled {...args} />,
};

export const DarkTone: Story = {
  args: { tone: "dark" },
  decorators: [
    (Story) => (
      <div className="max-w-md bg-brand-navy p-6">
        <Story />
      </div>
    ),
  ],
  render: (args) => <Controlled {...args} />,
};

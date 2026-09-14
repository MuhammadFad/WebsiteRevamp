import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Checkbox from "./Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-white p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    name: "agree",
    label: "I agree to be contacted by DevLogix about my project (optional)",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DarkTone: Story = {
  args: { tone: "dark" },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-brand-navy p-6">
        <Story />
      </div>
    ),
  ],
};

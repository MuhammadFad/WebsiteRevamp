import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TextField from "./TextField";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-white p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    tone: { control: "radio", options: ["light", "dark"] },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Full name",
    name: "fullName",
    placeholder: "Jane Doe",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithError: Story = {
  args: { required: true, error: "Full name is required." },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: "Jane Doe" } };
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

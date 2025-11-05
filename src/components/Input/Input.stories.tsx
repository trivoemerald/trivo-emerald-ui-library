import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Input } from "./Input";
import { ThemeProvider } from "../../theme/ThemeProvider";
import { Button } from "../Button";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
  argTypes: {
    leftSection: { control: { disable: true } },
    rightSection: { control: { disable: true } },
    error: { control: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: "We will never share your email.",
  },
};

export const WithError: Story = {
  args: {
    error: "Please enter a valid email address.",
    defaultValue: "invalid-email",
  },
};

export const WithIcons: Story = {
  args: {
    leftSection: <span aria-hidden="true">@</span>,
    rightSection: <span aria-hidden="true">✓</span>,
    placeholder: "you@example.com",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("hello@trivo.dev");
    return (
      <div style={{ display: "grid", gap: "0.75rem" }}>
        <Input
          {...args}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          description="This is a controlled input."
        />
        <Button onClick={() => setValue("")}>Reset</Button>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "../../theme/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "subtle"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "primary-green",
        "primary-blue",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Tri Vo Button",
    variant: "filled",
    color: "primary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Tri Vo Button 2",
    variant: "outline",
    color: "primary",
  },
};

export const Subtle: Story = {
  args: {
    children: "Tri Vo Button 3",
    variant: "subtle",
    color: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    loading: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button size="xs">Extra Small</Button>
      <Button color="--color-secondary-light-rose">Rose</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      <Button color="primary-green">Primary Green</Button>
    </div>
  ),
};

export const PrimaryGreen: Story = {
  args: {
    children: "Primary Green Button",
    variant: "filled",
    color: "primary-green",
    size: "md",
  },
};

export const PrimaryBlue: Story = {
  args: {
    children: "Primary Blue Button",
    variant: "filled",
    size: "md",
  },
};

export const PrimaryColorVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        maxWidth: "300px",
      }}
    >
      <Button variant="filled" color="primary-green">
        Filled Green
      </Button>
      <Button variant="outline" color="primary-green">
        Outline Green
      </Button>
      <Button variant="subtle" color="primary-green">
        Subtle Green
      </Button>
    </div>
  ),
};

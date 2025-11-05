import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { ThemeProvider } from "../../theme/ThemeProvider";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: { disable: false } },
    onClose: { action: "close" },
    title: { control: "text" },
    footer: { control: { disable: true } },
    closeOnOverlayClick: {
      control: "boolean",
    },
    closeOnEsc: {
      control: "boolean",
    },
    showCloseButton: {
      control: "boolean",
    },
    closeButtonAriaLabel: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => {
            setOpen(false);
            args.onClose?.();
          }}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>
            This is a reusable modal component designed for quick confirmations,
            forms, or any custom content. Customize the footer actions and
            header content to match your workflow.
          </p>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Confirmation",
    closeOnOverlayClick: true,
    closeOnEsc: true,
    showCloseButton: true,
    closeButtonAriaLabel: "Close dialog",
  },
};

export const WithoutTitle: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    title: undefined,
  },
};

export const CustomFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <ThemeProvider>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal
            {...args}
            open={open}
            onClose={() => {
              setOpen(false);
              args.onClose?.();
            }}
            footer={
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button variant="subtle">Secondary Action</Button>
                <Button>Primary Action</Button>
              </div>
            }
          >
            <p>Use a custom footer to show any set of actions you need.</p>
          </Modal>
        </ThemeProvider>
      </div>
    );
  },
  args: {
    title: "Custom Actions",
    closeOnOverlayClick: true,
    closeOnEsc: true,
    showCloseButton: true,
  },
};

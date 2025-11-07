import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer, DrawerProps } from "./Drawer";
import { Button } from "../Button";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: { disable: true } },
    onClose: { action: "close" },
    position: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

type DrawerStoryArgs = Omit<DrawerProps, "isOpen" | "onClose">;

const DrawerWithButton = (args: DrawerStoryArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button color="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const RightDrawer: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "right",
    title: "Right Drawer",
    width: "400px",
    children: (
      <div>
        <p>This is a drawer component that slides in from the right.</p>
        <p>You can add any content here.</p>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const LeftDrawer: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "left",
    title: "Left Drawer",
    width: "350px",
    children: (
      <div>
        <h3>Navigation</h3>
        <p>This drawer slides in from the left side.</p>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
                About
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const TopDrawer: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "top",
    title: "Top Drawer",
    height: "250px",
    children: (
      <div>
        <p>This is a drawer that slides from the top.</p>
        <p>Perfect for notifications or quick messages.</p>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const BottomDrawer: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "bottom",
    title: "Bottom Drawer",
    height: "300px",
    children: (
      <div>
        <h3>More Options</h3>
        <p>This drawer appears from the bottom of the screen.</p>
        <p>Great for mobile-like experiences.</p>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const NoTitle: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "right",
    width: "300px",
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Custom Content</h3>
        <p>This drawer has no title in the header.</p>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const NoCloseButton: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "right",
    title: "No Close Button",
    showCloseButton: false,
    width: "350px",
    children: (
      <div>
        <p>This drawer doesn't show a close button.</p>
        <p>Click outside to close (if enabled) or press ESC.</p>
      </div>
    ),
  } as DrawerStoryArgs,
};

export const DisableOverlayClick: Story = {
  render: (args) => <DrawerWithButton {...(args as DrawerStoryArgs)} />,
  // @ts-expect-error - isOpen and onClose are managed by DrawerWithButton wrapper
  args: {
    position: "right",
    title: "Click Outside Disabled",
    closeOnOverlayClick: false,
    width: "350px",
    children: (
      <div>
        <p>Clicking the overlay won't close this drawer.</p>
        <p>Use the close button or press ESC instead.</p>
      </div>
    ),
  } as DrawerStoryArgs,
};

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SideBar, SideBarItem } from "./SideBar";

const meta = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    width: {
      control: { type: "text" },
    },
    collapsed: {
      control: { type: "boolean" },
    },
    showToggleButton: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icons as simple emoji/text
const HomeIcon = () => <span>🏠</span>;
const UserIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const ChartIcon = () => <span>📊</span>;
const FileIcon = () => <span>📄</span>;
const FolderIcon = () => <span>📁</span>;
const MessageIcon = () => <span>💬</span>;

const basicItems: SideBarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    href: "#home",
  },
  {
    id: "profile",
    label: "Profile",
    icon: <UserIcon />,
    href: "#profile",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <ChartIcon />,
    href: "#analytics",
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageIcon />,
    href: "#messages",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    href: "#settings",
  },
];

const nestedItems: SideBarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    href: "#home",
  },
  {
    id: "documents",
    label: "Documents",
    icon: <FolderIcon />,
    children: [
      {
        id: "recent",
        label: "Recent Files",
        icon: <FileIcon />,
        href: "#recent",
      },
      {
        id: "shared",
        label: "Shared",
        icon: <FileIcon />,
        href: "#shared",
      },
      {
        id: "archived",
        label: "Archived",
        icon: <FileIcon />,
        href: "#archived",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <ChartIcon />,
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "#dashboard",
      },
      {
        id: "reports",
        label: "Reports",
        href: "#reports",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    href: "#settings",
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    width: "250px",
    position: "left",
    showToggleButton: true,
  },
  render: (args) => (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar {...args} />
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
        <h1>Main Content Area</h1>
        <p>This is the main content area. The sidebar is on the left.</p>
      </div>
    </div>
  ),
};

export const RightPosition: Story = {
  args: {
    items: basicItems,
    width: "250px",
    position: "right",
    showToggleButton: true,
  },
  render: (args) => (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
        <h1>Main Content Area</h1>
        <p>This is the main content area. The sidebar is on the right.</p>
      </div>
      <SideBar {...args} />
    </div>
  ),
};

export const CollapsedByDefault: Story = {
  args: {
    items: basicItems,
    width: "250px",
    position: "left",
    collapsed: true,
    showToggleButton: true,
  },
  render: (args) => (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar {...args} />
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
        <h1>Main Content Area</h1>
        <p>
          The sidebar starts collapsed. Click the toggle button to expand it.
        </p>
      </div>
    </div>
  ),
};

export const WithNestedItems: Story = {
  args: {
    items: nestedItems,
    width: "280px",
    position: "left",
    showToggleButton: true,
  },
  render: (args) => (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar {...args} />
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
        <h1>Nested Navigation</h1>
        <p>Click on items with nested children to expand them.</p>
      </div>
    </div>
  ),
};

export const WithActiveState: Story = {
  render: (args) => {
    const [activeId, setActiveId] = useState("analytics");

    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar
          {...args}
          items={basicItems}
          activeItemId={activeId}
          onItemClick={(item) => setActiveId(item.id)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
          <h1>Active State Example</h1>
          <p>
            Current active item: <strong>{activeId}</strong>
          </p>
          <p>Click on sidebar items to change the active state.</p>
        </div>
      </div>
    );
  },
  args: {
    items: basicItems,
    width: "250px",
    position: "left",
    showToggleButton: true,
  },
};

export const ControlledCollapse: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#f3f4f6",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {collapsed ? "Expand" : "Collapse"} Sidebar
          </button>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <SideBar
            {...args}
            items={basicItems}
            collapsed={collapsed}
            onToggle={setCollapsed}
          />
          <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
            <h1>Controlled Collapse</h1>
            <p>The sidebar collapse state is controlled externally.</p>
            <p>
              Current state:{" "}
              <strong>{collapsed ? "Collapsed" : "Expanded"}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
  args: {
    items: basicItems,
    width: "250px",
    position: "left",
    showToggleButton: true,
  },
};

export const NoToggleButton: Story = {
  args: {
    items: basicItems,
    width: "250px",
    position: "left",
    showToggleButton: false,
  },
  render: (args) => (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar {...args} />
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#fff" }}>
        <h1>No Toggle Button</h1>
        <p>This sidebar doesn't have a toggle button.</p>
      </div>
    </div>
  ),
};

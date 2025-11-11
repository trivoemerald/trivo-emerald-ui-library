import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Basic Tabs
export const Default: Story = {
  args: {
    items: [
      {
        id: "tab1",
        label: "Overview",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-600">
              This is the overview tab content. It provides a general
              introduction and summary of the product or service.
            </p>
          </div>
        ),
      },
      {
        id: "tab2",
        label: "Features",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Feature 1: Advanced functionality</li>
              <li>Feature 2: User-friendly interface</li>
              <li>Feature 3: High performance</li>
            </ul>
          </div>
        ),
      },
      {
        id: "tab3",
        label: "Pricing",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <p className="text-gray-600">
              Check out our competitive pricing plans tailored to your needs.
            </p>
          </div>
        ),
      },
    ],
  },
};

// Pills Variant
export const PillsVariant: Story = {
  args: {
    variant: "pills",
    items: [
      {
        id: "tab1",
        label: "Dashboard",
        content: (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
            <p className="text-gray-600">
              Your personal dashboard with all important metrics and
              information.
            </p>
          </div>
        ),
      },
      {
        id: "tab2",
        label: "Analytics",
        content: (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">
              View detailed analytics and insights about your performance.
            </p>
          </div>
        ),
      },
      {
        id: "tab3",
        label: "Settings",
        content: (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Settings</h3>
            <p className="text-gray-600">
              Configure your preferences and account settings.
            </p>
          </div>
        ),
      },
    ],
  },
};

// Underline Variant
export const UnderlineVariant: Story = {
  args: {
    variant: "underline",
    items: [
      {
        id: "tab1",
        label: "Profile",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Profile</h3>
            <p className="text-gray-600">Manage your profile information.</p>
          </div>
        ),
      },
      {
        id: "tab2",
        label: "Account",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Account</h3>
            <p className="text-gray-600">Update your account settings.</p>
          </div>
        ),
      },
      {
        id: "tab3",
        label: "Security",
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Manage security settings and password.
            </p>
          </div>
        ),
      },
    ],
  },
};

// With Icons
export const WithIcons: Story = {
  args: {
    variant: "pills",
    items: [
      {
        id: "tab1",
        label: "Home",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
        content: <div className="p-4">Home content</div>,
      },
      {
        id: "tab2",
        label: "Messages",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        content: <div className="p-4">Messages content</div>,
        badge: 5,
      },
      {
        id: "tab3",
        label: "Notifications",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        ),
        content: <div className="p-4">Notifications content</div>,
        badge: 12,
      },
    ],
  },
};

// With Badges
export const WithBadges: Story = {
  args: {
    items: [
      {
        id: "tab1",
        label: "All Items",
        content: <div className="p-4">All items list here</div>,
        badge: 24,
      },
      {
        id: "tab2",
        label: "Active",
        content: <div className="p-4">Active items list here</div>,
        badge: 8,
      },
      {
        id: "tab3",
        label: "Completed",
        content: <div className="p-4">Completed items list here</div>,
        badge: 16,
      },
      {
        id: "tab4",
        label: "Archived",
        content: <div className="p-4">Archived items list here</div>,
        badge: 0,
      },
    ],
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: "sm",
    variant: "pills",
    items: [
      {
        id: "tab1",
        label: "Small Tab 1",
        content: <div className="p-4">Content for small tab 1</div>,
      },
      {
        id: "tab2",
        label: "Small Tab 2",
        content: <div className="p-4">Content for small tab 2</div>,
      },
      {
        id: "tab3",
        label: "Small Tab 3",
        content: <div className="p-4">Content for small tab 3</div>,
      },
    ],
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    variant: "default",
    items: [
      {
        id: "tab1",
        label: "Large Tab 1",
        content: <div className="p-4">Content for large tab 1</div>,
      },
      {
        id: "tab2",
        label: "Large Tab 2",
        content: <div className="p-4">Content for large tab 2</div>,
      },
      {
        id: "tab3",
        label: "Large Tab 3",
        content: <div className="p-4">Content for large tab 3</div>,
      },
    ],
  },
};

// Full Width Tabs
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: "default",
    items: [
      {
        id: "tab1",
        label: "Tab 1",
        content: <div className="p-4">Content 1</div>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <div className="p-4">Content 2</div>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <div className="p-4">Content 3</div>,
      },
    ],
  },
};

// With Disabled Tab
export const WithDisabledTab: Story = {
  args: {
    variant: "pills",
    items: [
      {
        id: "tab1",
        label: "Enabled Tab",
        content: <div className="p-4">This tab is enabled</div>,
      },
      {
        id: "tab2",
        label: "Disabled Tab",
        content: <div className="p-4">This tab is disabled</div>,
        disabled: true,
      },
      {
        id: "tab3",
        label: "Another Tab",
        content: <div className="p-4">Another enabled tab</div>,
      },
    ],
  },
};

// Controlled Tabs
export const ControlledTabs: Story = {
  render: () => {
    const [activeId, setActiveId] = useState("tab1");

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveId("tab1")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Go to Tab 1
          </button>
          <button
            onClick={() => setActiveId("tab2")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Go to Tab 2
          </button>
          <button
            onClick={() => setActiveId("tab3")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Go to Tab 3
          </button>
        </div>

        <Tabs
          activeId={activeId}
          onChange={setActiveId}
          variant="pills"
          items={[
            {
              id: "tab1",
              label: "Tab 1",
              content: (
                <div className="p-4 bg-blue-50 rounded">
                  Controlled content for Tab 1
                </div>
              ),
            },
            {
              id: "tab2",
              label: "Tab 2",
              content: (
                <div className="p-4 bg-green-50 rounded">
                  Controlled content for Tab 2
                </div>
              ),
            },
            {
              id: "tab3",
              label: "Tab 3",
              content: (
                <div className="p-4 bg-purple-50 rounded">
                  Controlled content for Tab 3
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  },
};

// Product Details Example
export const ProductDetailsExample: Story = {
  args: {
    variant: "default",
    items: [
      {
        id: "description",
        label: "Description",
        content: (
          <div className="space-y-3">
            <p className="text-gray-700">
              This premium product is designed with the highest quality
              materials and attention to detail. Perfect for professionals and
              enthusiasts alike.
            </p>
            <p className="text-gray-700">
              Features include advanced functionality, user-friendly interface,
              and exceptional durability.
            </p>
          </div>
        ),
      },
      {
        id: "specifications",
        label: "Specifications",
        content: (
          <div className="space-y-2">
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32">Dimensions:</span>
              <span className="text-gray-700">10" x 8" x 2"</span>
            </div>
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32">Weight:</span>
              <span className="text-gray-700">2.5 lbs</span>
            </div>
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32">Material:</span>
              <span className="text-gray-700">Premium Aluminum</span>
            </div>
            <div className="flex border-b pb-2">
              <span className="font-semibold w-32">Color:</span>
              <span className="text-gray-700">Space Gray</span>
            </div>
          </div>
        ),
      },
      {
        id: "reviews",
        label: "Reviews",
        badge: 28,
        content: (
          <div className="space-y-4">
            <div className="border-b pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">John Doe</span>
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600">
                Amazing product! Exceeded my expectations.
              </p>
            </div>
            <div className="border-b pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">Jane Smith</span>
                <span className="text-yellow-500">★★★★☆</span>
              </div>
              <p className="text-gray-600">Great quality, but a bit pricey.</p>
            </div>
          </div>
        ),
      },
      {
        id: "shipping",
        label: "Shipping",
        content: (
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Free shipping</strong> on orders over $50
            </p>
            <p className="text-gray-700">
              <strong>Standard delivery:</strong> 5-7 business days
            </p>
            <p className="text-gray-700">
              <strong>Express delivery:</strong> 2-3 business days
            </p>
            <p className="text-gray-700">
              <strong>International shipping:</strong> Available to select
              countries
            </p>
          </div>
        ),
      },
    ],
  },
};

// Settings Page Example
export const SettingsPageExample: Story = {
  args: {
    variant: "underline",
    size: "lg",
    items: [
      {
        id: "general",
        label: "General",
        content: (
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-1">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select className="w-full px-3 py-2 border rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        ),
      },
      {
        id: "privacy",
        label: "Privacy",
        content: (
          <div className="space-y-4 max-w-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Profile Visibility</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Show Email</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Activity Status</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
          </div>
        ),
      },
      {
        id: "notifications",
        label: "Notifications",
        content: (
          <div className="space-y-4 max-w-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Email Notifications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Push Notifications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">SMS Notifications</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        ),
      },
    ],
  },
};

// All Variants Comparison
export const AllVariants: Story = {
  render: () => {
    const items = [
      {
        id: "tab1",
        label: "Tab 1",
        content: <div className="p-4">Content 1</div>,
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: <div className="p-4">Content 2</div>,
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: <div className="p-4">Content 3</div>,
      },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
          <Tabs variant="default" items={items} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Pills Variant</h3>
          <Tabs variant="pills" items={items} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Underline Variant</h3>
          <Tabs variant="underline" items={items} />
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible navigation bar component built with Radix UI Navigation Menu. Supports dropdown menus, logo, and action buttons.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation items
const basicNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const navItemsWithDropdowns = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    items: [
      {
        label: "Analytics",
        href: "/products/analytics",
        description: "Advanced data analytics and insights",
      },
      {
        label: "Monitoring",
        href: "/products/monitoring",
        description: "Real-time system monitoring",
      },
      {
        label: "Reporting",
        href: "/products/reporting",
        description: "Comprehensive reporting tools",
      },
      {
        label: "Integration",
        href: "/products/integration",
        description: "Seamless third-party integrations",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Documentation",
        href: "/docs",
        description: "Complete API and component documentation",
      },
      {
        label: "Tutorials",
        href: "/tutorials",
        description: "Step-by-step guides and tutorials",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Latest news and updates",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export const Default: Story = {
  args: {
    items: basicNavItems,
    logo: <span className="font-bold text-xl">MyApp</span>,
    onLogoClick: () => console.log("Logo clicked"),
  },
};

export const WithDropdowns: Story = {
  args: {
    items: navItemsWithDropdowns,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
          T
        </div>
        <span className="font-bold text-xl">Trivo</span>
      </div>
    ),
    onLogoClick: () => console.log("Logo clicked"),
  },
};

export const WithActions: Story = {
  args: {
    items: navItemsWithDropdowns,
    logo: <span className="font-bold text-xl">MyApp</span>,
    actions: (
      <>
        <Button variant="subtle">Sign In</Button>
        <Button variant="filled" color="primary">
          Get Started
        </Button>
      </>
    ),
  },
};

export const PrimaryVariant: Story = {
  args: {
    items: basicNavItems,
    logo: <span className="font-bold text-xl">MyApp</span>,
    variant: "primary",
    actions: (
      <>
        <Button
          variant="outline"
          color="white"
          className="text-white border-white hover:bg-white hover:text-primary-blue"
        >
          Sign In
        </Button>
        <Button variant="filled" color="secondary">
          Get Started
        </Button>
      </>
    ),
  },
};

export const TransparentVariant: Story = {
  args: {
    items: basicNavItems,
    logo: <span className="font-bold text-xl">MyApp</span>,
    variant: "transparent",
    actions: (
      <Button variant="filled" color="primary">
        Get Started
      </Button>
    ),
  },
  parameters: {
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
      ],
    },
  },
};

export const MinimalLogo: Story = {
  args: {
    items: navItemsWithDropdowns,
    logo: (
      <div className="w-10 h-10 bg-linear-to-br from-primary-blue to-primary-green rounded-lg" />
    ),
  },
};

export const ComplexNavigation: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/dashboard" },
      {
        label: "Solutions",
        items: [
          {
            label: "Water Management",
            href: "/solutions/water",
            description: "Comprehensive water resource management",
          },
          {
            label: "Energy Optimization",
            href: "/solutions/energy",
            description: "Smart energy monitoring and optimization",
          },
          {
            label: "Environmental Monitoring",
            href: "/solutions/environment",
            description: "Real-time environmental data tracking",
          },
          {
            label: "Asset Management",
            href: "/solutions/assets",
            description: "Complete asset lifecycle management",
          },
        ],
      },
      {
        label: "Platform",
        items: [
          {
            label: "Analytics Engine",
            href: "/platform/analytics",
            description: "Powerful data processing and visualization",
          },
          {
            label: "API Integration",
            href: "/platform/api",
            description: "RESTful APIs and webhooks",
          },
          {
            label: "Security",
            href: "/platform/security",
            description: "Enterprise-grade security features",
          },
        ],
      },
      {
        label: "Company",
        items: [
          {
            label: "About Us",
            href: "/about",
            description: "Learn about our mission and team",
          },
          {
            label: "Careers",
            href: "/careers",
            description: "Join our growing team",
          },
          {
            label: "Contact",
            href: "/contact",
            description: "Get in touch with us",
          },
        ],
      },
    ],
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-lg leading-none">Trivo Platform</div>
          <div className="text-xs text-gray-500">Enterprise Edition</div>
        </div>
      </div>
    ),
    actions: (
      <div className="flex items-center gap-3">
        <Button variant="subtle" size="sm">
          Documentation
        </Button>
        <Button variant="subtle" size="sm">
          Support
        </Button>
        <div className="w-px h-6 bg-gray-300" />
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button variant="filled" color="primary" size="sm">
          Start Free Trial
        </Button>
      </div>
    ),
  },
};

export const MobileResponsive: Story = {
  args: {
    items: navItemsWithDropdowns,
    logo: <span className="font-bold text-lg">App</span>,
    actions: (
      <Button variant="filled" color="primary" size="sm">
        Menu
      </Button>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

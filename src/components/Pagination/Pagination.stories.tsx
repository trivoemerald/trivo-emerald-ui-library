import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible pagination component for navigating through pages of content. Supports various configurations and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: "number",
      description: "Current active page (1-indexed)",
    },
    totalPages: {
      control: "number",
      description: "Total number of pages",
    },
    siblingCount: {
      control: "number",
      description: "Number of page buttons to show around current page",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant",
    },
    showFirstLast: {
      control: "boolean",
      description: "Show first/last page buttons",
    },
    showPrevNext: {
      control: "boolean",
      description: "Show previous/next buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disable pagination",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component with state
const PaginationWithState = (props: any) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage || 1);

  return (
    <Pagination
      {...props}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  render: () => <PaginationWithState totalPages={10} />,
};

export const FewPages: Story = {
  render: () => <PaginationWithState totalPages={5} currentPage={3} />,
};

export const ManyPages: Story = {
  render: () => <PaginationWithState totalPages={50} currentPage={25} />,
};

export const FirstPage: Story = {
  render: () => <PaginationWithState totalPages={20} currentPage={1} />,
};

export const LastPage: Story = {
  render: () => <PaginationWithState totalPages={20} currentPage={20} />,
};

export const SmallSize: Story = {
  render: () => (
    <PaginationWithState totalPages={15} currentPage={8} size="sm" />
  ),
};

export const LargeSize: Story = {
  render: () => (
    <PaginationWithState totalPages={15} currentPage={8} size="lg" />
  ),
};

export const NoFirstLast: Story = {
  render: () => (
    <PaginationWithState
      totalPages={20}
      currentPage={10}
      showFirstLast={false}
    />
  ),
};

export const NoPrevNext: Story = {
  render: () => (
    <PaginationWithState
      totalPages={20}
      currentPage={10}
      showPrevNext={false}
    />
  ),
};

export const MinimalControls: Story = {
  render: () => (
    <PaginationWithState
      totalPages={20}
      currentPage={10}
      showFirstLast={false}
      showPrevNext={false}
    />
  ),
};

export const MoreSiblings: Story = {
  render: () => (
    <PaginationWithState totalPages={50} currentPage={25} siblingCount={2} />
  ),
};

export const LessSiblings: Story = {
  render: () => (
    <PaginationWithState totalPages={50} currentPage={25} siblingCount={0} />
  ),
};

export const Disabled: Story = {
  render: () => (
    <PaginationWithState totalPages={10} currentPage={5} disabled={true} />
  ),
};

export const SinglePage: Story = {
  render: () => <PaginationWithState totalPages={1} currentPage={1} />,
};

export const WithPageInfo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;
    const itemsPerPage = 10;
    const totalItems = 200;
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600">
          Showing {startItem}-{endItem} of {totalItems} items
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const InTableContext: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const allData = Array.from({ length: 47 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: ["Active", "Inactive", "Pending"][i % 3],
    }));

    const totalPages = Math.ceil(allData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="flex flex-col gap-4" style={{ width: "600px" }}>
        {/* Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{item.id}</td>
                  <td className="px-4 py-3 text-sm">{item.name}</td>
                  <td className="px-4 py-3 text-sm">{item.email}</td>
                  <td className="px-4 py-3 text-sm">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-2">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, allData.length)} of{" "}
            {allData.length} results
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Small</p>
        <PaginationWithState totalPages={10} currentPage={5} size="sm" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Medium (Default)</p>
        <PaginationWithState totalPages={10} currentPage={5} size="md" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Large</p>
        <PaginationWithState totalPages={10} currentPage={5} size="lg" />
      </div>
    </div>
  ),
};

export const DifferentConfigurations: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium mb-2">Full Controls (Default)</p>
        <PaginationWithState totalPages={20} currentPage={10} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Without First/Last</p>
        <PaginationWithState
          totalPages={20}
          currentPage={10}
          showFirstLast={false}
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Without Prev/Next</p>
        <PaginationWithState
          totalPages={20}
          currentPage={10}
          showPrevNext={false}
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">
          Minimal (No Navigation Arrows)
        </p>
        <PaginationWithState
          totalPages={20}
          currentPage={10}
          showFirstLast={false}
          showPrevNext={false}
        />
      </div>
    </div>
  ),
};

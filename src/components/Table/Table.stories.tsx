import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Table, TableColumn } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    striped: {
      control: { type: "boolean" },
    },
    hoverable: {
      control: { type: "boolean" },
    },
    bordered: {
      control: { type: "boolean" },
    },
    compact: {
      control: { type: "boolean" },
    },
    stickyHeader: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "User",
    status: "Active",
  },
];

const basicColumns: TableColumn<User>[] = [
  { key: "id", header: "ID", width: "80px" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
  { key: "status", header: "Status" },
];

export const Default: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
  },
};

export const Striped: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
    striped: true,
  },
};

export const Bordered: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
    bordered: true,
  },
};

export const Compact: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
    compact: true,
    bordered: true,
  },
};

export const WithCustomRendering: Story = {
  args: {
    columns: [
      { key: "id", header: "ID", width: "80px", align: "center" },
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
      { key: "role", header: "Role" },
      {
        key: "status",
        header: "Status",
        render: (value: string) => (
          <span
            style={{
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: 600,
              backgroundColor: value === "Active" ? "#d1fae5" : "#fee2e2",
              color: value === "Active" ? "#065f46" : "#991b1b",
            }}
          >
            {value}
          </span>
        ),
      },
    ],
    data: sampleUsers,
    striped: true,
  },
};

export const Sortable: Story = {
  args: {
    columns: [
      { key: "id", header: "ID", width: "80px", sortable: true },
      { key: "name", header: "Name", sortable: true },
      { key: "email", header: "Email", sortable: true },
      { key: "role", header: "Role", sortable: true },
      { key: "status", header: "Status", sortable: true },
    ],
    data: sampleUsers,
    striped: true,
    hoverable: true,
  },
};

export const ClickableRows: Story = {
  render: (args) => {
    const [selectedRow, setSelectedRow] = useState<User | null>(null);

    return (
      <div>
        <Table {...args} onRowClick={(row) => setSelectedRow(row as User)} />
        {selectedRow && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#eff6ff",
              border: "1px solid #3b82f6",
              borderRadius: "4px",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0" }}>Selected User:</h3>
            <p style={{ margin: 0 }}>
              <strong>{selectedRow.name}</strong> ({selectedRow.email})
            </p>
          </div>
        )}
      </div>
    );
  },
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
    striped: true,
    hoverable: true,
  },
};

export const StickyHeader: Story = {
  args: {
    columns: basicColumns as any,
    data: [
      ...sampleUsers,
      ...sampleUsers.map((u) => ({ ...u, id: u.id + 10 })),
      ...sampleUsers.map((u) => ({ ...u, id: u.id + 20 })),
      ...sampleUsers.map((u) => ({ ...u, id: u.id + 30 })),
    ],
    stickyHeader: true,
    striped: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", overflow: "auto" }}>
        <Story />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    columns: basicColumns as any,
    data: sampleUsers,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: basicColumns as any,
    data: [],
    emptyMessage: "No users found",
  },
};

export const ControlledSorting: Story = {
  render: (args) => {
    const [sortBy, setSortBy] = useState<string>("name");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    return (
      <div>
        <div
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0 }}>
            Sorting by: <strong>{sortBy}</strong> ({sortOrder})
          </p>
        </div>
        <Table
          {...args}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={(key, order) => {
            setSortBy(key);
            setSortOrder(order);
          }}
        />
      </div>
    );
  },
  args: {
    columns: [
      { key: "id", header: "ID", width: "80px", sortable: true },
      { key: "name", header: "Name", sortable: true },
      { key: "email", header: "Email", sortable: true },
      { key: "role", header: "Role", sortable: true },
      { key: "status", header: "Status", sortable: true },
    ],
    data: sampleUsers,
    striped: true,
  },
};

interface Product {
  id: number;
  product: string;
  category: string;
  price: number;
  stock: number;
}

const productData: Product[] = [
  {
    id: 1,
    product: "Laptop",
    category: "Electronics",
    price: 999.99,
    stock: 15,
  },
  {
    id: 2,
    product: "Desk Chair",
    category: "Furniture",
    price: 199.99,
    stock: 30,
  },
  {
    id: 3,
    product: "Notebook",
    category: "Stationery",
    price: 4.99,
    stock: 100,
  },
  {
    id: 4,
    product: "Monitor",
    category: "Electronics",
    price: 299.99,
    stock: 8,
  },
  {
    id: 5,
    product: "Keyboard",
    category: "Electronics",
    price: 79.99,
    stock: 45,
  },
];

export const ProductTable: Story = {
  args: {
    columns: [
      {
        key: "id",
        header: "ID",
        width: "80px",
        align: "center",
        sortable: true,
      },
      { key: "product", header: "Product", sortable: true },
      { key: "category", header: "Category", sortable: true },
      {
        key: "price",
        header: "Price",
        align: "right",
        sortable: true,
        render: (value: number) => `$${value.toFixed(2)}`,
      },
      {
        key: "stock",
        header: "Stock",
        align: "center",
        sortable: true,
        render: (value: number) => (
          <span
            style={{
              color:
                value < 10 ? "#dc2626" : value < 20 ? "#f59e0b" : "#059669",
            }}
          >
            {value}
          </span>
        ),
      },
    ],
    data: productData,
    striped: true,
    hoverable: true,
    bordered: true,
  },
};

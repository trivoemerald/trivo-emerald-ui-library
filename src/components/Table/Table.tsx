import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Table.module.css";

export interface TableColumn<T = any> {
  key: string;
  header: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  className?: string;
  onRowClick?: (row: T, index: number) => void;
  loading?: boolean;
  emptyMessage?: string;
  stickyHeader?: boolean;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  onSort?: (key: string, order: "asc" | "desc") => void;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false,
  className = "",
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  stickyHeader = false,
  sortBy: externalSortBy,
  sortOrder: externalSortOrder,
  onSort,
}: TableProps<T>) => {
  const [internalSortBy, setInternalSortBy] = useState<string | undefined>();
  const [internalSortOrder, setInternalSortOrder] = useState<"asc" | "desc">(
    "asc"
  );

  const sortBy = onSort ? externalSortBy : internalSortBy;
  const sortOrder = onSort ? externalSortOrder : internalSortOrder;

  const handleSort = (columnKey: string) => {
    const newOrder =
      sortBy === columnKey && sortOrder === "asc" ? "desc" : "asc";

    if (onSort) {
      onSort(columnKey, newOrder);
    } else {
      setInternalSortBy(columnKey);
      setInternalSortOrder(newOrder);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortBy) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];

      if (aVal === bVal) return 0;

      const comparison = aVal > bVal ? 1 : -1;
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [data, sortBy, sortOrder]);

  const tableClasses = twMerge(
    styles.table,
    striped && styles.striped,
    hoverable && styles.hoverable,
    bordered && styles.bordered,
    compact && styles.compact,
    stickyHeader && styles.stickyHeader,
    className
  );

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.empty}>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  width: column.width,
                  textAlign: column.align || "left",
                }}
                className={twMerge(column.sortable && styles.sortable)}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className={styles.headerContent}>
                  <span>{column.header}</span>
                  {column.sortable && (
                    <span className={styles.sortIcon}>
                      {sortBy === column.key
                        ? sortOrder === "asc"
                          ? "↑"
                          : "↓"
                        : "↕"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(row, rowIndex)}
              className={twMerge(onRowClick && styles.clickable)}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{ textAlign: column.align || "left" }}
                >
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

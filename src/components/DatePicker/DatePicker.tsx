import React, { useState, useRef, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";

export interface DatePickerProps {
  /** Selected date */
  selected?: Date | null;
  /** Callback when date changes */
  onChange: (date: Date | null) => void;
  /** Placeholder text */
  placeholderText?: string;
  /** Date format */
  dateFormat?: string;
  /** Show time picker */
  showTimeSelect?: boolean;
  /** Time format */
  timeFormat?: string;
  /** Time intervals in minutes */
  timeIntervals?: number;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  excludeDates?: Date[];
  /** Highlight dates */
  highlightDates?: Date[];
  /** Inline mode */
  inline?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
  /** Show month/year dropdowns */
  showMonthDropdown?: boolean;
  showYearDropdown?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  placeholderText = "Select date",
  dateFormat = "MM/dd/yyyy",
  showTimeSelect = false,
  timeFormat = "HH:mm",
  timeIntervals = 15,
  minDate,
  maxDate,
  excludeDates,
  highlightDates,
  inline = false,
  disabled = false,
  className = "",
  showMonthDropdown = false,
  showYearDropdown = false,
}) => {
  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholderText}
      dateFormat={dateFormat}
      showTimeSelect={showTimeSelect}
      timeFormat={timeFormat}
      timeIntervals={timeIntervals}
      minDate={minDate}
      maxDate={maxDate}
      excludeDates={excludeDates}
      highlightDates={highlightDates}
      inline={inline}
      disabled={disabled}
      showMonthDropdown={showMonthDropdown}
      showYearDropdown={showYearDropdown}
      dropdownMode="select"
      className={twMerge(
        "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed",
        className
      )}
      calendarClassName="shadow-lg border border-gray-200 rounded-lg"
    />
  );
};

export interface DatePickerInputProps {
  /** Selected date */
  selected?: Date | null;
  /** Callback when date changes */
  onChange: (date: Date | null) => void;
  /** Placeholder text */
  placeholderText?: string;
  /** Date format */
  dateFormat?: string;
  /** Show time picker */
  showTimeSelect?: boolean;
  /** Label for the input */
  label?: string;
  /** Error message */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Show month/year dropdowns */
  showMonthDropdown?: boolean;
  showYearDropdown?: boolean;
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selected,
  onChange,
  placeholderText = "Select date",
  dateFormat = "MM/dd/yyyy",
  showTimeSelect = false,
  label,
  error,
  disabled = false,
  className = "",
  size = "md",
  minDate,
  maxDate,
  showMonthDropdown = false,
  showYearDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "h-8 text-sm px-3",
    md: "h-10 text-base px-4",
    lg: "h-12 text-lg px-5",
  };

  // Close datepicker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDateChange = (date: Date | null) => {
    onChange(date);
    if (!showTimeSelect) {
      setIsOpen(false);
    }
  };

  return (
    <div className={twMerge("relative", className)} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          value={selected ? selected.toLocaleDateString() : ""}
          placeholder={placeholderText}
          readOnly
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={twMerge(
            "w-full border rounded-md transition-colors cursor-pointer pr-10",
            sizeClasses[size],
            error
              ? "border-error-dark focus:ring-error-dark"
              : "border-gray-300 focus:ring-primary-blue",
            "focus:outline-hidden focus:ring-2 focus:border-transparent",
            disabled && "bg-gray-100 cursor-not-allowed opacity-60",
            "hover:border-gray-400"
          )}
        />
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={twMerge(
            "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors",
            disabled && "cursor-not-allowed opacity-60"
          )}
        >
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {isOpen && !disabled && (
          <div className="absolute z-50 mt-1">
            <ReactDatePicker
              selected={selected}
              onChange={handleDateChange}
              dateFormat={dateFormat}
              showTimeSelect={showTimeSelect}
              timeFormat="HH:mm"
              timeIntervals={15}
              minDate={minDate}
              maxDate={maxDate}
              showMonthDropdown={showMonthDropdown}
              showYearDropdown={showYearDropdown}
              dropdownMode="select"
              inline
              calendarClassName="shadow-lg border border-gray-200 rounded-lg bg-white"
            />
          </div>
        )}
      </div>
      {error && <p className="text-sm text-error-dark mt-1">{error}</p>}
    </div>
  );
};

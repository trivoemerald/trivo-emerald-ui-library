import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker, DatePickerInput } from "./DatePicker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Date picker components for selecting dates and times. Includes DatePicker (inline) and DatePickerInput (with calendar icon trigger).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component with state
const DatePickerWithState = (props: any) => {
  const [date, setDate] = useState<Date | null>(null);

  return <DatePicker {...props} selected={date} onChange={setDate} />;
};

const DatePickerInputWithState = (props: any) => {
  const [date, setDate] = useState<Date | null>(null);

  return <DatePickerInput {...props} selected={date} onChange={setDate} />;
};

export const Default: Story = {
  render: () => <DatePickerWithState />,
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <DatePickerInputWithState label="Select Date" />
    </div>
  ),
};

export const WithPreselectedDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <div style={{ width: "300px" }}>
        <DatePickerInput
          selected={date}
          onChange={setDate}
          label="Birth Date"
        />
      </div>
    );
  },
};

export const WithTimeSelect: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <DatePickerInputWithState
        label="Select Date & Time"
        showTimeSelect
        dateFormat="MM/dd/yyyy h:mm aa"
      />
    </div>
  ),
};

export const WithMinMaxDates: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() - 7); // 7 days ago
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30); // 30 days from now

    return (
      <div style={{ width: "300px" }}>
        <DatePickerInputWithState
          label="Select within range"
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Last 7 days to next 30 days"
        />
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <DatePickerInputWithState
        label="Start Date"
        error="Please select a valid date"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <DatePickerInputWithState label="Disabled Date" disabled />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: "300px" }}>
      <DatePickerInputWithState label="Small" size="sm" />
      <DatePickerInputWithState label="Medium (Default)" size="md" />
      <DatePickerInputWithState label="Large" size="lg" />
    </div>
  ),
};

export const InlineDatePicker: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">
          Selected: {date ? date.toLocaleDateString() : "None"}
        </p>
        <DatePicker selected={date} onChange={setDate} inline />
      </div>
    );
  },
};

export const WithMonthYearDropdown: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <DatePickerInputWithState
        label="Select Date"
        showMonthDropdown
        showYearDropdown
        placeholderText="Choose from dropdowns"
      />
    </div>
  ),
};

export const DateRange: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
      <div className="flex flex-col gap-4" style={{ width: "300px" }}>
        <DatePickerInput
          selected={startDate}
          onChange={setStartDate}
          label="Start Date"
          maxDate={endDate || undefined}
        />
        <DatePickerInput
          selected={endDate}
          onChange={setEndDate}
          label="End Date"
          minDate={startDate || undefined}
        />
        {startDate && endDate && (
          <p className="text-sm text-gray-600">
            Range: {startDate.toLocaleDateString()} -{" "}
            {endDate.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      fullName: "",
      birthDate: null as Date | null,
      appointmentDate: null as Date | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white rounded-lg border"
        style={{ width: "400px" }}
      >
        <h3 className="text-lg font-semibold mb-2">Appointment Form</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-blue"
            placeholder="Enter your name"
          />
        </div>

        <DatePickerInput
          selected={formData.birthDate}
          onChange={(date) => setFormData({ ...formData, birthDate: date })}
          label="Birth Date"
          showMonthDropdown
          showYearDropdown
          maxDate={new Date()}
        />

        <DatePickerInput
          selected={formData.appointmentDate}
          onChange={(date) =>
            setFormData({ ...formData, appointmentDate: date })
          }
          label="Appointment Date & Time"
          showTimeSelect
          dateFormat="MM/dd/yyyy h:mm aa"
          minDate={new Date()}
        />

        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/90 transition-colors"
        >
          Submit
        </button>
      </form>
    );
  },
};

export const CompactWithIcon: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);

    return (
      <div style={{ width: "250px" }}>
        <DatePickerInput
          selected={date}
          onChange={setDate}
          placeholderText="Pick a date"
          size="sm"
        />
      </div>
    );
  },
};

export const WithCustomFormat: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: "300px" }}>
      <DatePickerInputWithState
        label="Format: MM/dd/yyyy"
        dateFormat="MM/dd/yyyy"
      />
      <DatePickerInputWithState
        label="Format: dd/MM/yyyy"
        dateFormat="dd/MM/yyyy"
      />
      <DatePickerInputWithState
        label="Format: yyyy-MM-dd"
        dateFormat="yyyy-MM-dd"
      />
      <DatePickerInputWithState
        label="Format: MMM dd, yyyy"
        dateFormat="MMM dd, yyyy"
      />
    </div>
  ),
};

export const MultipleInstances: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    return (
      <div
        className="p-6 bg-white rounded-lg border"
        style={{ width: "500px" }}
      >
        <h3 className="text-lg font-semibold mb-4">Hotel Booking</h3>
        <div className="grid grid-cols-2 gap-4">
          <DatePickerInput
            selected={checkIn}
            onChange={setCheckIn}
            label="Check-in"
            minDate={new Date()}
            maxDate={checkOut || undefined}
          />
          <DatePickerInput
            selected={checkOut}
            onChange={setCheckOut}
            label="Check-out"
            minDate={checkIn || new Date()}
          />
        </div>
        {checkIn && checkOut && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <p className="text-sm font-medium">Reservation Summary:</p>
            <p className="text-sm text-gray-600">
              {Math.ceil(
                (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
              )}{" "}
              night(s)
            </p>
          </div>
        )}
      </div>
    );
  },
};

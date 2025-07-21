import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockTimes = ["10:00", "11:00", "12:00"];
  const mockOnDateChange = jest.fn();

  test("renders form fields correctly", () => {
    render(<BookingForm availableTimes={mockTimes} onDateChange={mockOnDateChange} />);

    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("date-input")).toBeInTheDocument();
    expect(screen.getByTestId("time-select")).toBeInTheDocument();
    expect(screen.getByTestId("guests-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("shows validation messages when submitting empty form", () => {
    render(<BookingForm availableTimes={mockTimes} onDateChange={mockOnDateChange} />);
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Date is required.")).toBeInTheDocument();
    expect(screen.getByText("Time is required.")).toBeInTheDocument();
    expect(screen.getByText("Guests must be at least 1.")).toBeInTheDocument();
  });

  test("submits form successfully with valid inputs", () => {
    render(<BookingForm availableTimes={mockTimes} onDateChange={mockOnDateChange} />);

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "Sultan" } });
    fireEvent.change(screen.getByTestId("date-input"), { target: { value: "2025-08-01" } });
    fireEvent.change(screen.getByTestId("time-select"), { target: { value: "10:00" } });
    fireEvent.change(screen.getByTestId("guests-input"), { target: { value: "3" } });

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByText("Booking submitted successfully!")).toBeInTheDocument();
  });
});

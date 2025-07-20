import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form", () => {
  render(<BookingForm />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByText(/book/i)).toBeInTheDocument();
});

test("shows error messages when submitting empty form", () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/book/i));
  expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
});

test("shows success message on valid submit", () => {
  render(<BookingForm />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Sultan" } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-12-12" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  fireEvent.click(screen.getByText(/book/i));
  expect(screen.getByRole("status")).toHaveTextContent(/thank you/i);
});

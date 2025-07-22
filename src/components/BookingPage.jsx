import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, onDateChange }) {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-6 mb-4">Book a Table</h1>
      <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} />
    </main>
  );
}

export default BookingPage;

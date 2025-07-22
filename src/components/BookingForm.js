import React, { useState } from "react";

function BookingForm({ availableTimes, onDateChange }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }

    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    if (!formData.guests || parseInt(formData.guests) <= 0) {
      newErrors.guests = "Guests must be at least 1.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      onDateChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="booking-form"
      className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto space-y-6"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-testid="name-input"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          data-testid="date-input"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Time:</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          data-testid="time-select"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Guests:</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          data-testid="guests-input"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
      </div>

      <button
        type="submit"
        data-testid="submit-button"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200"
      >
        Book Now
      </button>

      {submitted && (
        <p className="text-green-600 text-center font-medium mt-4">
          Booking submitted successfully!
        </p>
      )}
    </form>
  );
}

export default BookingForm;

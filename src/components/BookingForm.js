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
      onDateChange(value); // لتحديث الأوقات المتاحة
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // تقدر ترسل البيانات هنا إذا كنت تربط API
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="booking-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-testid="name-input"
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          data-testid="date-input"
        />
        {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
      </label>

      <label>
        Time:
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          data-testid="time-select"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}
      </label>

      <label>
        Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          data-testid="guests-input"
        />
        {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}
      </label>

      <button type="submit" data-testid="submit-button">Book Now</button>

      {submitted && <p style={{ color: "green" }}>Booking submitted successfully!</p>}
    </form>
  );
}

export default BookingForm;

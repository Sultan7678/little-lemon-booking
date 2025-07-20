import React, { useState } from "react";
import "../styles/BookingForm.css";


function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests <= 0) newErrors.guests = "Guests must be more than 0";
    if (!formData.occasion) newErrors.occasion = "Occasion is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <h2>Book a Table</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-required="true"/>
      {errors.name && <span role="alert">{errors.name}</span>}

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests:</label>
      <input id="guests" name="guests" type="number" min="1" value={formData.guests} onChange={handleChange} />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <span role="alert">{errors.occasion}</span>}

      <button type="submit">Book</button>

      {submitted && <p role="status">Thank you! Your booking has been received.</p>}
    </form>
  );
}

export default BookingForm;

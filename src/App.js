import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00"]);

  const handleDateChange = (newDate) => {
    console.log("Date changed:", newDate);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Specials />
              <Testimonials />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

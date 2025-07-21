import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";

function App() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00"]);

  const handleDateChange = (newDate) => {
    // تحديث الأوقات بناء على التاريخ
    console.log("Date changed:", newDate);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <BookingPage availableTimes={availableTimes} onDateChange={handleDateChange} />
      <Footer />
    </>
  );
}

export default App;

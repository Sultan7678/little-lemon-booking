import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SpecialsSection from "./components/SpecialsSection";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SpecialsSection />
      <Testimonials />
      <section id="booking">
        <BookingForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;

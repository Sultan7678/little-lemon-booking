import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Little Lemon</h1>
        <p>We serve delicious Mediterranean food made with love.</p>
        <Link to="/booking" className="hero-button">Reserve a Table</Link>
      </div>
      <div className="hero-image">
        <img
          src="/images/restaurant-food.jpg"
          alt="Little Lemon dishes"
        />
      </div>
    </section>
  );
}

export default Hero;

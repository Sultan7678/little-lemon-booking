import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <h2>Little Lemon</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#specials">Specials</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#booking">Book</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

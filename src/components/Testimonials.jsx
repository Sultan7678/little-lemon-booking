import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah A.",
      quote: "The food was absolutely amazing! Highly recommend the lemon dessert.",
      image: "/images/user1.jpg",
    },
    {
      name: "Ali M.",
      quote: "Fast service and delicious specials. Will definitely come back!",
      image: "/images/user2.jpg",
    },
    {
      name: "Lina K.",
      quote: "Best Mediterranean food I've had in a long time!",
      image: "/images/user3.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />
            <blockquote>"{item.quote}"</blockquote>
            <p>- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

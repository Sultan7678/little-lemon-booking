import React from "react";

function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      description: "A refreshing salad with feta cheese, tomatoes, and olives.",
      image: "/images/greek-salad.jpg",
    },
    {
      title: "Bruschetta",
      description: "Grilled bread with garlic, tomatoes, and basil.",
      image: "/images/bruschetta.jpg",
    },
    {
      title: "Lemon Dessert",
      description: "A sweet and tangy lemon dessert to end your meal.",
      image: "/images/lemon-dessert.jpg",
    },
  ];

  return (
    <section className="specials">
      <h2>This Week's Specials</h2>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;

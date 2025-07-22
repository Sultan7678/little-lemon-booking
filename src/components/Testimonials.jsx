export default function Testimonials() {
  const testimonials = [
    {
      name: "Sara",
      message: "Amazing service and delicious food!",
    },
    {
      name: "Ahmed",
      message: "A hidden gem in the city. Highly recommend!",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic text-lg mb-4">"{t.message}"</p>
              <p className="text-blue-600 font-bold text-xl">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

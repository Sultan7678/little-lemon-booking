export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 via-lime-50 to-yellow-50 py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-green-900 leading-tight drop-shadow-md">
          Welcome to <span className="text-yellow-600">Little Lemon</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          We serve delicious Mediterranean food made with love and the freshest ingredients.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Reserve a Table
        </button>
      </div>
    </section>
  );
}

import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

export default function Specials() {
  const specials = [
    {
      title: 'Greek Salad',
      description: 'A refreshing salad with feta cheese, tomatoes, and olives.',
      image: greekSalad,
    },
    {
      title: 'Bruschetta',
      description: 'Grilled bread with garlic, tomatoes, and basil.',
      image: bruschetta,
    },
    {
      title: 'Lemon Dessert',
      description: 'A sweet and tangy lemon dessert to end your meal.',
      image: lemonDessert,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">This Week&apos;s Specials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

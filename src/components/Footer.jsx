export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-2">Little Lemon</h4>
          <p className="text-sm text-gray-400">123 Flavor Street, Riyadh, Saudi Arabia</p>
          <p className="text-sm text-gray-400">Email: contact@littlelemon.sa</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#specials" className="hover:underline">Specials</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#booking" className="hover:underline">Book a Table</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; 2025 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

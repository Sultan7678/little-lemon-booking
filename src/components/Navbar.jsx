export default function Navbar() {
  return (
    <nav className="bg-yellow-500 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#" className="hover:underline hover:text-gray-100 transition">Home</a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-gray-100 transition">Book a Table</a>
        </li>
      </ul>
    </nav>
  );
}

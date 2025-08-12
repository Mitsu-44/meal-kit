export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">OrderUp</h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="bg-green-600 text-white px-4 py-2 round
        ed-full hover:bg-green-700">Get Started</button>
      </div>
    </nav>
  );
}

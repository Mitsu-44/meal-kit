export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-bold text-lg mb-2">NepalMeals</h4>
          <p>Bringing local flavors to your kitchen. Fast, fresh & flavorful 🇳🇵</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#how" className="hover:underline">How It Works</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Contact</h4>
          <p>Email: OrderUp.com</p>
          <p>Phone: +977-9800000000</p>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-300">
        © {new Date().getFullYear()} OrderUp. All rights reserved.
      </div>
    </footer>
  );
}
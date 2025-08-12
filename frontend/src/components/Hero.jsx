import { motion } from "framer-motion";
import heroImage from "../assets/hero-meal.jpg"; // Replace with actual local image

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Nepali Meals, <span className="text-orange-600">Delivered Fresh</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            From momo to dal bhat — fresh, prepped, and delivered with love 🇳🇵
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#menu" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
              View Menu
            </a>
            <a href="#how" className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-100">
              How It Works
            </a>
          </div>
        </div>
        <motion.div
          className="flex-1"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={heroImage} alt="Nepali Meal" className="w-full rounded-xl shadow-xl" />
        </motion.div>
      </div>
    </section>
  );
}
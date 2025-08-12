import { FaCalendarAlt, FaTruck, FaSmile } from "react-icons/fa";

const steps = [
  {
    title: "Choose Your Khaja",
    icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
    desc: "Pick from our weekly menu of authentic Nepali meals."
  },
  {
    title: "We Deliver",
    icon: <FaTruck className="text-orange-600 text-3xl" />,
    desc: "We pack & deliver fresh ingredients to your doorstep."
  },
  {
    title: "You Khaja!",
    icon: <FaSmile className="text-blue-600 text-3xl" />,
    desc: "Cook easily and enjoy restaurant-style taste at home."
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">How It Works</h2>
        <p className="text-gray-500 mb-10">Three simple steps to delicious Nepali food</p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
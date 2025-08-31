import { useNavigate } from "react-router-dom";
import meals from '../../../constant/meals';
export default function ListMenu() {
    const navigate = useNavigate();

  return (
    <section id="menu" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">This Week’s Khaja</h2>
        <p className="text-gray-500 mb-10">Handpicked meals with authentic Nepali taste</p>

  {/* {
    title: "Dal Bhat Tarkari",
    desc: "Classic Nepali meal of rice, lentils, and seasonal curry.",
    ingredients: ["Rice", "Masoor dal", "Turmeric", "Salt", "Seasonal vegetables", "Mustard oil"],
    steps: [
      "Cook rice until fluffy.",
      "Boil lentils with turmeric and salt, then temper with garlic and cumin.",
      "Prepare seasonal curry with spices and mustard oil.",
      "Serve together with achar."
    ],
    img: "/images/dalbhat.jpg",
    time: "30 min",
    serve: "2-4",
    price: "Rs. 249"
  }, */}
        <div className="grid md:grid-cols-3 gap-8">
          {(meals || []).map((meal, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <img src={meal.img} alt={meal.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{meal.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{meal.desc}</p>
                <div className="text-sm text-gray-500 flex justify-between mb-4">
                  <span>⏱ {meal.time}</span>
                  <span>👥 {meal.serve}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-orange-600">{meal.price}</span>
                  <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600"
                     onClick={() => navigate(`/menu/${meal.id}`)}
                  >
                    Details
                  </button>
                   <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600">
                    Add to Bhoka Box
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
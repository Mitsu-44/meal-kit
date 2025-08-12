const meals = [
  {
    title: "Chicken Momo",
    img: "https://source.unsplash.com/400x300/?momo",
    desc: "Stuffed dumplings with tomato chutney",
    price: "Rs. 299",
    time: "25 min",
    serve: "2-3"
  },
  {
    title: "Dal Bhat Tarkari",
    img: "https://source.unsplash.com/400x300/?dal-bhat",
    desc: "Classic Nepali rice, lentil soup & seasonal curry",
    price: "Rs. 249",
    time: "30 min",
    serve: "2-4"
  },
  {
    title: "Veg Thukpa",
    img: "https://source.unsplash.com/400x300/?thukpa",
    desc: "Warm noodle soup with Himalayan spices",
    price: "Rs. 199",
    time: "20 min",
    serve: "1-2"
  },
];

export default function WeeklyMenu() {
  return (
    <section id="menu" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2">This Week’s Khaja</h2>
        <p className="text-gray-500 mb-10">Handpicked meals with authentic Nepali taste</p>

        <div className="grid md:grid-cols-3 gap-8">
          {meals.map((meal, idx) => (
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

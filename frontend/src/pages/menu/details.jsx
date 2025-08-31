import { useParams, Link } from "react-router-dom";
import meals from "../../constant/";

export default function MealDetail() {
  const { id } = useParams();
  const meal = meals.find((m) => m.id === parseInt(id));

  if (!meal) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Meal not found</h2>
        <Link to="/menu" className="text-green-600 underline mt-4 block">Back to Menu</Link>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <img src={meal.img} alt={meal.title} className="rounded-xl shadow-lg w-full object-cover h-96" />

        {/* Right: Details */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-green-800 mb-4">{meal.title}</h2>
          <p className="text-gray-600 mb-4">{meal.desc}</p>

          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>⏱ {meal.time}</span>
            <span>👥 {meal.serve}</span>
            <span className="font-bold text-orange-600">{meal.price}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h3>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            {meal.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Steps</h3>
          <ol className="list-decimal pl-5 text-gray-600 space-y-2">
            {meal.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
              Add to Bhoka Box
            </button>
            <Link to="/menu" className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300">
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Menu() {
  const meals = [
    { name: "Breakfast", items: ["Poha", "Tea", "Banana"], price: "₹30" },
    { name: "Lunch", items: ["Rice", "Dal", "Paneer Curry", "Salad"], price: "₹60" },
    { name: "Snacks", items: ["Samosa", "Tea"], price: "₹25" },
    { name: "Dinner", items: ["Chapati", "Mixed Veg", "Rice", "Dal"], price: "₹50" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-sky blue-700 mb-6">
        Today's Mess Menu
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="bg-white shadow-lg rounded-2xl p-5 text-center hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-sky-700">{meal.name}</h2>
            <ul className="mt-3 text-gray-600">
              {meal.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sky-600 font-medium">{meal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";

// The 12 menu items from our last conversation
const menuItems = [
  { name: "Paneer Masala", desc: "Rich and creamy cottage cheese curry.", price: 60, type: "Dinner", color: "bg-red-500" },
  { name: "Veg Biryani", desc: "Fragrant rice with vegetables.", price: 80, type: "Lunch", color: "bg-orange-500" },
  { name: "Aloo Paratha", desc: "Wheat bread with spiced potatoes.", price: 40, type: "Breakfast", color: "bg-yellow-400" },
  { name: "Gulab Jamun", desc: "Soft fried dough balls in syrup.", price: 25, type: "Snacks", color: "bg-green-500" },
  { name: "Masala Dosa", desc: "Crispy crepe with potato filling.", price: 40, type: "Breakfast", color: "bg-teal-500" },
  { name: "Samosa", desc: "Crispy pastry with chickpeas.", price: 20, type: "Snacks", color: "bg-sky-500" },
  { name: "Rajma Chawal", desc: "Kidney beans curry with rice.", price: 70, type: "Lunch", color: "bg-purple-500" },
  { name: "Poha", desc: "Flattened rice cooked with spices.", price: 30, type: "Breakfast", color: "bg-pink-500" },
  { name: "Vada Pav", desc: "Spicy potato fritter in a bun.", price: 25, type: "Snacks", color: "bg-indigo-500" },
  { name: "Dal Makhani", desc: "Creamy black lentil curry.", price: 65, type: "Dinner", color: "bg-blue-500" },
  { name: "Chai", desc: "Indian spiced tea.", price: 15, type: "Snacks", color: "bg-lime-500" },
  { name: "Butter Chicken", desc: "Creamy tomato-based chicken curry.", price: 90, type: "Dinner", color: "bg-rose-500" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? menuItems : menuItems.filter(item => item.type === filter);

  return (
    <div className="bg-gray-800 min-h-screen pb-10">
      {/* Hero Section (Unchanged) */}
      <div className="bg-sky-700 text-white text-center py-10 rounded-md m-3">
        <h1 className="text-3xl font-bold">Welcome to the Smart Hostel Mess</h1>
        <p className="mt-2 text-sm">Efficient, transparent, and smart mess management at your fingertips.</p>
      </div>

      {/* Filter Buttons (Unchanged) */}
      <div className="flex justify-center space-x-3 my-5 flex-wrap">
        {["All", "Breakfast", "Lunch", "Snacks", "Dinner"].map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${filter === type ? "bg-sky-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* --- ✨ REDESIGNED Menu Cards (Wider, professional spacing) --- */}
      {/* Changes made here:
        - gap-[10px] changed to gap-6 (for wider spacing between cards)
        - p-5 changed to p-6 (for wider padding on the left and right)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
        {filteredItems.map((item, i) => (
          <div 
            key={i} 
            className="bg-gray-700 rounded-lg shadow-xl overflow-hidden w-full max-w-xs md:max-w-none transform transition-all duration-300 hover:scale-105"
            style={{ minHeight: '380px', maxHeight: '420px' }} 
          >
            {/* Color Block Section (Unchanged) */}
            <div className={`relative h-48 sm:h-56 ${item.color} flex items-center justify-center`}> 
            </div>

            {/* Card Content (Unchanged) */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white uppercase mt-2 mb-1">
                {item.name}
              </h3>
              <p className="text-2xl font-bold text-sky-400 mb-3">
                ₹{item.price}.00
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
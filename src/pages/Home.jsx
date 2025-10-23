// src/pages/Home.jsx
import React, { useState } from "react";

const menuItems = [
  { name: "Paneer Masala", desc: "Rich and creamy cottage cheese curry.", price: 60, type: "Dinner", color: "bg-red-500" },
  { name: "Veg Biryani", desc: "Fragrant rice with vegetables.", price: 80, type: "Lunch", color: "bg-orange-500" },
  { name: "Aloo Paratha", desc: "Wheat bread with spiced potatoes.", price: 40, type: "Breakfast", color: "bg-yellow-400" },
  { name: "Gulab Jamun", desc: "Soft fried dough balls in syrup.", price: 25, type: "Snacks", color: "bg-green-500" },
  { name: "Masala Dosa", desc: "Crispy crepe with potato filling.", price: 40, type: "Breakfast", color: "bg-teal-500" },
  { name: "Samosa", desc: "Crispy pastry with chickpeas.", price: 20, type: "Snacks", color: "bg-sky-500" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? menuItems : menuItems.filter(item => item.type === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-sky-700 text-white text-center py-10 rounded-md m-3">
        <h1 className="text-3xl font-bold">Welcome to the Smart Hostel Mess</h1>
        <p className="mt-2 text-sm">Efficient, transparent, and smart mess management at your fingertips.</p>
      </div>

      {/* Filter Buttons */}
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

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {filteredItems.map((item, i) => (
          <div key={i} className={`${item.color} rounded-xl shadow-lg text-white`}>
            <div className="p-5 text-lg font-bold">{item.name}</div>
            <div className="bg-white text-gray-800 p-4 rounded-b-xl">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm">{item.desc}</p>
              <p className="mt-2 font-bold text-sky-600">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

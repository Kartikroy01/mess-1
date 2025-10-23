import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-700 text-white px-5 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide">
          Smart Hostel Mess
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/menu" className="hover:text-gray-200">
            Menu
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-white text-sky-700 px-4 py-1.5 rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 bg-sky-600 rounded-lg p-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded hover:bg-sky-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-3 py-2 rounded hover:bg-sky-500"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded hover:bg-sky-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded hover:bg-sky-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block bg-white text-sky-700 px-3 py-2 rounded font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

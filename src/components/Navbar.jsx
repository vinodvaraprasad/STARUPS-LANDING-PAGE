import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-indigo-600 tracking-wide">STARUPS</h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <li className="hover:text-indigo-600 cursor-pointer">About</li>
        <li className="hover:text-indigo-600 cursor-pointer">User Types</li>
        <li className="hover:text-indigo-600 cursor-pointer">Features</li>
        <li className="hover:text-indigo-600 cursor-pointer">Benefits</li>
        <li className="hover:text-indigo-600 cursor-pointer">Stories</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-indigo-600 hover:underline">Log In</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
          Register
        </button>
      </div>
    </nav>
  )
}

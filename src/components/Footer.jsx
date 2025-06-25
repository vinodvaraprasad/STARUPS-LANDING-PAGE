import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-8 px-6 md:px-24 mt-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">STARUPS</h4>
          <p className="text-sm text-indigo-200">
            Empowering education through innovation and collaboration.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">User Types</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Register</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-indigo-200">Email: support@starups.com</p>
          <p className="text-sm text-indigo-200">Phone: +91-98765-43210</p>
        </div>
      </div>
      <p className="text-center text-sm text-indigo-200 mt-8">
        © {new Date().getFullYear()} STARUPS. All rights reserved.
      </p>
    </footer>
  )
}

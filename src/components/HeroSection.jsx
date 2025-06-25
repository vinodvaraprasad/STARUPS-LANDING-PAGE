import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-indigo-700 text-white py-20 px-6 md:px-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Education Through Innovation
          </h2>
          <p className="mb-8 text-lg">
            STARUPS is a platform connecting students, colleges, faculty, and professionals to foster skill development, research motivation, and career opportunities.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-white text-indigo-700 px-5 py-2 rounded hover:bg-gray-100 font-semibold">Get Started</button>
            <button className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-indigo-700 font-semibold">Explore Features</button>
          </div>
          <p className="text-sm text-indigo-200">Join 10,000+ users already on the platform</p>
        </div>

        {/* Right: Demo User Card */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm">
          <h4 className="font-semibold text-lg mb-1">Aditya Singh</h4>
          {/* ✅ Updated Line Below */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <p>Computer Science</p>
            <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
              ⭐ 1250
            </span>
          </div>
          <div className="mb-3">
            <p className="font-medium">AI & Machine Learning</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-3/4 h-2 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="mb-3">
            <p className="font-medium">Full Stack Development</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-2/3 h-2 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <p className="font-medium">Projects Published</p>
          <p className="text-sm text-gray-600">12 projects with 350+ likes</p>
        </div>
      </div>
    </section>
  )
}

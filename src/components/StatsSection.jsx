import React from 'react'

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-24 text-center">
      {/* Title & Subtitle */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-4">
          Transforming Education Through Connectivity
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          STARUPS is revolutionizing how students develop skills, pursue research, and connect
          with industry professionals through our integrated ecosystem.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-48">
          <div className="text-5xl mb-3">🎓</div>
          <p className="text-3xl font-bold text-black">10,000+</p>
          <p className="text-gray-600 text-sm mt-1">Students Actively Engaged</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-48">
          <div className="text-5xl mb-3">🏫</div>
          <p className="text-3xl font-bold text-black">250+</p>
          <p className="text-gray-600 text-sm mt-1">Partner Educational Institutions</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-48">
          <div className="text-5xl mb-3">💼</div>
          <p className="text-3xl font-bold text-black">500+</p>
          <p className="text-gray-600 text-sm mt-1">Industry Professionals & Recruiters</p>
        </div>
      </div>
    </section>
  )
}

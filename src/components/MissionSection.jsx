import React from 'react'

export default function MissionSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-24">
      <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-700 mb-6 text-lg">
            To bridge the gap between academic learning and industry requirements by creating
            a unified platform where students can showcase their skills, colleges can monitor
            and guide their progress, faculty can provide mentorship, and professionals can
            discover talent and share expertise.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Through our STAR points system, we encourage continuous learning, project-based
            skill development, and research contributions that benefit both the students and
            the larger community.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 font-semibold">
            Explore User Roles
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h4 className="font-semibold mb-4 text-xl">How STARUPS Works</h4>
          <p className="text-gray-600 text-md">
            Watch our quick overview of how the STARUPS ecosystem connects students, colleges,
            faculty, and professionals to create a seamless educational experience.
          </p>
        </div>
      </div>
    </section>
  )
}

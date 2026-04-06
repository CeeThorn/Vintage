import React from 'react'

const Design2 = () => {
  return (
    <div className="bg-white flex items-center justify-between">
  {/* Left Side */}
  <div>
    <h3 className="text-2xl font-semibold">
      Your designs, your
      <br /> style, your way
    </h3>
    <p className="text-gray-600 mt-2 max-w-xl">
      Make custom shirts and sweaters fast. Pick a template, add your logo, and order in minutes
    </p>
  </div>

  {/* Right Side */}
  <div>
    <button className="bg-lblue text-white px-6 py-3 rounded-full hover:bg-[#324D7C] transition-all font-medium">
      Get Started
    </button>
  </div>
</div>


  )
}

export default Design2
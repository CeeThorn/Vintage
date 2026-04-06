import React from 'react'

const Hero3 = () => {
  return (
    <div className="bg-amber-800 relative">
    <div>
    <img
        src="/rack.jpg"
        alt="Hero Background"
         className="
    absolute 
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[1500px]
    h-[300px]
    
  "
/>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bring your ideas to life</h1>
        <button className="bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          Explore Collection
        </button>
      </div>
    </div>
  )
}

export default Hero3
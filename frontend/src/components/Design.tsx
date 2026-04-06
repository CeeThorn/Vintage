import React from 'react'

const Design = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-5rem)] flex flex-col justify-center py-24">
      
      {/* Centered text */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-6xl text-black gap-1">
          Your designs, real and ready
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg gap-1">
          See your artwork on shirts and sweaters.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      gap-8 max-w-7xl mx-auto px-6">
        <img src="design_preview1.png" alt="Design Preview 1" className="w-full rounded-2xl" />
        <img src="design_preview2.png" alt="Design Preview 2" className="w-full rounded-2xl" />
        <img src="design_preview3.png" alt="Design Preview 3" className="w-full rounded-2xl" />

        <img src="design_preview1.png" alt="Design Preview 1" className="w-full rounded-2xl" />
        <img src="design_preview2.png" alt="Design Preview 2" className="w-full rounded-2xl" />
        <img src="design_preview3.png" alt="Design Preview 3" className="w-full rounded-2xl" />
      </div>
    </div>
  )
}

export default Design

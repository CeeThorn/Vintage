import React from 'react'

const DUWS = () => {
  return (
    <div className="bg-amber-50 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20">
      
      {/* Top / Centered */}
      <div className="text-center w-full px-6 mb-16">
        <h2 className="text-black  whitespace-nowrap
                       text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Design. Upload. Wear. Simple
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto
                      text-sm sm:text-base md:text-lg">
          Create custom business apparel in minutes. Just follow these steps to start looking sharp.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src="design.png" alt="Design Step" className="h-20" />
          <p className="text-sm text-gray-500">Step 1</p>
          <h1 className="text-lg font-semibold whitespace-nowrap">
            Design Your Apparel
          </h1>
          <p className="text-gray-600 text-sm">
            Select a sweater or shirt to start.
          </p>
          <button className="mt-2 px-5 py-2 rounded-full border border-lblue text-lblue hover:bg-lblue hover:text-white transition">
            Design
          </button>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src="upload.png" alt="Upload Step" className="h-20" />
          <p className="text-sm text-gray-500">Step 2</p>
          <h1 className="text-lg font-semibold whitespace-nowrap">
            Upload Your Design
          </h1>
          <p className="text-gray-600 text-sm">
            Upload your design or artwork.
          </p>
          <button className="mt-2 px-5 py-2 rounded-full border border-lblue text-lblue hover:bg-lblue hover:text-white transition">
            Upload
          </button>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src="wear.png" alt="Wear Step" className="h-20" />
          <p className="text-sm text-gray-500">Step 3</p>
          <h1 className="text-lg font-semibold whitespace-nowrap">
            Order with Ease
          </h1>
          <p className="text-gray-600 text-sm">
            Check your design and place your order
          </p>
          <button className="mt-2 px-5 py-2 rounded-full border border-lblue text-lblue hover:bg-lblue hover:text-white transition">
            Order
          </button>
        </div>

      </div>
    </div>
  )
}

export default DUWS

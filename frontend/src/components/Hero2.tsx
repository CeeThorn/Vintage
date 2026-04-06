import React from 'react'

const Hero2 = () => {
  return (
    <div>
        <div className="flex flex-col items-center text-center space-y-6 px-4 py-12">

  {/* Small heading */}
  <p className="text-sm text-gray-500 uppercase tracking-widest">
    SEE WHAT'S NEW
  </p>

  {/* Main heading */}
  <h1 className="text-3xl md:text-4xl font-bold">
    Fresh designs, ready to print
  </h1>

  {/* Description */}
  <p className="max-w-xl text-gray-600">
    Browse our latest templates for sweaters, shirts, and more. Find the right style for your next project.
  </p>

  {/* Buttons */}
  <div className="flex gap-4 flex-wrap justify-center">
    <button className="px-6 py-2 bg-black text-white rounded  hover:bg-blue-800 transition">
      All
    </button>
    <button className="px-6 py-2 bg-black text-white rounded  hover:bg-blue-800 transition">
      Sweaters
    </button>
    <button className="px-6 py-2 bg-black text-white rounded hover:bg-blue-800 transition">
      Shirts
    </button>
    <button className="px-6 py-2 bg-black text-white rounded  hover:bg-blue-800 transition">
      Accessories
    </button>
  </div>

</div>

{/* Images Section */}
<div className="grid grid-cols-2 gap-x-12 gap-y-16 mt-6 px-10">

  <div className="flex flex-col gap-2">
    <img
      src="/pic2.jpg"
      alt="Hero Image 1"
      className="w-full h-[360px] object-cover rounded-xl"
    />
    <h1 className="text-black text-lg font-semibold">T-Shirt</h1>
    <p className="text-sm text-gray-600">
      Soft, timeless, and easy to customize for any event
    </p>
  </div>

  <div className="flex flex-col gap-2">
    <img
      src="/hoodie.jpg"
      alt="Hero Image 2"
      className="w-full h-[360px] object-cover rounded-xl"
    />
    <h1 className="text-black text-lg font-semibold">Relaxed fit hoodie</h1>
    <p className="text-sm text-gray-600">
      Soft, timeless, and easy to customize for any event
    </p>
  </div>

  <div className="flex flex-col gap-2">
    <img
      src="/pants.jpg"
      alt="Hero Image 3"
      className="w-full h-[360px] object-cover rounded-xl"
    />
    <h1 className="text-black text-lg font-semibold">Pants</h1>
    <p className="text-sm text-gray-600">
      Soft, timeless, and easy to customize for any event
    </p>
  </div>

  <div className="flex flex-col gap-2">
    <img
      src="/accessories.jpg"
      alt="Hero Image 4"
      className="w-full h-[360px] object-cover rounded-xl"
    />
    <h1 className="text-black text-lg font-semibold">Accessories</h1>
    <p className="text-sm text-gray-600">
      Soft, timeless, and easy to customize for any event
    </p>
  </div>

</div>

</div>
    










  )
}

export default Hero2
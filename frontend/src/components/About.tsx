import React from 'react'

const About = () => {
  return (
<div className="bg-white flex justify-between gap-24 py-24 min-h-[85vh]">
  
  {/* Left Side */}
  <div className="flex-[1.3] pl-12">
    <div className="text-sm font-medium text-gray-500 mb-6">
      HOW IT WORKS
    </div>

    <div className="text-7xl text-black  mb-14 mt-4">
      Design. Print.
      <br /> Wear. Repeat
    </div>

    {/* Categories + Paragraph */}
    <div className="flex justify-between items-start gap-16 mt-6">
      
      {/* Categories */}
      <div className="flex flex-col gap-4 font-medium mt-2">
        <div className="flex gap-4">
          <div className="text-black rounded-2xl bg-gray-100 px-5 py-3">
            SWEATERS
          </div>
          <div className="text-black rounded-2xl bg-gray-100 px-5 py-3">
            SHIRTS
          </div>
        </div>

        <div className="text-black rounded-2xl bg-gray-100 px-5 py-3 w-fit">
          TEMPLATES
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 max-w-lg mt-4">
        Create custom designs and print them on our high-quality apparel. Choose a template, add your design
        and place your order. It's that simple!
      </p>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex flex-1 items-center justify-center">
    <img
      src="something.jpg"
      alt="Custom Apparel"
      className="rounded-xl max-w-md w-full"
    />
  </div>

</div>


  )
}

export default About
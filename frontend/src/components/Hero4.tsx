import React from 'react'

const Hero4 = () => {
  return (
    <section className="relative bg-white min-h-[520px] px-10 py-16">

      {/* Brand */}
      <h1 className="text-3xl text-black font-bold mb-6">
        Vinatage
      </h1>

      {/* Newsletter */}
      <div className="max-w-md space-y-4 mb-20">
        <p className="text-sm text-black opacity-70">
          Get updates on new styles and offers.
        </p>

<div className="flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="w-full border text-black border-black/20 px-4 py-2"
        />

        <button className=" bg-blue-600 text- black border border-black px-4 py-2">
          Subscribe
        </button>
        </div>
      </div>

      {/* Top right columns */}
      <div className="absolute top-16 right-16 flex gap-16 text-black">
        <div className="flex flex-col gap-2">
          <p className="font-semibold mb-2">Shop</p>
          <button className="hover:underline">Sweaters</button>
          <button className="hover:underline">Hoodies</button>
          <button className="hover:underline">Accessories</button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold mb-2">About</p>
          <button className="hover:underline">Story</button>
          <button className="hover:underline">Contact</button>
          <button className="hover:underline">FAQ</button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold mb-2">Social</p>
          <button className="hover:underline">Instagram</button>
          <button className="hover:underline">Twitter</button>
          <button className="hover:underline">YouTube</button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-14/15 h-px bg-black/30 mx-auto my-10" />

      {/* Bottom row */}
      <div className="flex items-center justify-between text-xs text-black">
        <p>
          All rights reserved © Vintage 2026
        </p>

        <div className="flex gap-6">
          <button className="hover:underline">Terms</button>
          <button className="hover:underline">Support</button>
          <button className="hover:underline">Returns</button>
        </div>
      </div>

    </section>
  )
}

export default Hero4

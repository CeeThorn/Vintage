"use client";

import Image from "next/image";
import {
  ShoppingCart,
  User,
  Upload,
  Sparkles,
  Star,
  Heart,
  Diamond,
  Zap,
  Leaf,
  Palette,
  Truck,
  Package
} from "lucide-react";

export default function DesignPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#31332c] min-h-screen">

     


      {/* MAIN CONTENT */}
      <section className="pt-20 flex">

        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-80 p-6 bg-white shadow-lg">

          <h2 className="font-bold text-lg mb-1">
            Customize
          </h2>

          <p className="text-xs text-gray-500 mb-8">
            Refine Your Selection
          </p>


          {/* Upload */}
          <div className="bg-[#f1e0cc] p-4 mb-6">

            <div className="flex gap-3 mb-3">
              <Upload size={18} />
              <span className="uppercase text-xs">
                Upload Custom Design
              </span>
            </div>

            <div className="border-2 border-dashed p-6 text-center">
              Drop File Here
            </div>

          </div>


          {/* Presets */}
          <div>

            <div className="flex gap-3 mb-4">
              <Sparkles size={18} />
              <span className="uppercase text-xs">
                Choose Preset Design
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">

              <Preset icon={<Star size={14} />} />
              <Preset icon={<Heart size={14} />} />
              <Preset icon={<Diamond size={14} />} />
              <Preset icon={<Zap size={14} />} />
              <Preset icon={<Leaf size={14} />} />
              <Preset icon={<Palette size={14} />} />

            </div>

          </div>


          <button className="mt-8 bg-gray-700 text-white py-4 uppercase text-xs">
            Add to Collection
          </button>

        </aside>



        {/* PRODUCT SECTION */}
        <section className="flex flex-1 justify-center items-center p-10">

          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl">


            {/* IMAGE */}
            <div className="lg:col-span-7">

              <div className="bg-white shadow-lg p-4">

                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjebFX9Fg-eiKQP-mSBKsIHuGoKmCOXza-7t6nIRXlOOtSblkz8quAzEV5g-SeMKqI08anZwhbuwzU1O3qwe30JOMYtmpPTu3ZiMjl8g4FA92QCO-7_7lzc_wK2RLwHfIhIcs1LwvIj1SmLnhernQxTrpnzn8nbc9zsWXUBAHGAZBds1XY2J6a_jWlY0dU9I3BB2bP9x2kzI9ox5xN_XCBQ8APxbjGhBpkIZRtsgBFmCRQYUSR5lG6g5b2YKvIggl6eU0xv4Djbna4"
                  alt="Tshirt"
                  width={500}
                  height={600}
                  className="object-cover"
                />

              </div>

            </div>


            {/* PRODUCT INFO */}
            <div className="lg:col-span-5">

              <span className="text-xs uppercase tracking-widest text-gray-500">
                Core Collection — 01
              </span>

              <h1 className="text-5xl font-extrabold mt-4 mb-6">
                Heavyweight <br />
                Cotton Tee
              </h1>


              <p className="text-gray-500 mb-10">
                Crafted from our signature 220GSM organic jersey.
              </p>


              <div className="flex justify-between border-b pb-4">

                <div>
                  <span className="text-xs text-gray-400">
                    Fabric Density
                  </span>

                  <p>220 GSM Organic Cotton</p>
                </div>

                <span className="font-bold">$48</span>

              </div>


              {/* SIZE */}
              <div className="mt-6">

                <span className="text-xs text-gray-400">
                  Select Size
                </span>

                <div className="flex gap-2 mt-2">

                  <SizeButton label="S" />
                  <SizeButton active label="M" />
                  <SizeButton label="L" />
                  <SizeButton label="XL" />

                </div>

              </div>

            </div>

          </div>

        </section>

      </section>



      {/* FEATURE SECTION */}
      <section className="bg-[#f5f4ed] py-24 px-8">

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">

          <Feature
            icon={<Package />}
            title="Sustainable Craft"
            text="Printed on demand to reduce waste."
          />

          <Feature
            icon={<Palette />}
            title="Vibrant Inks"
            text="Eco-friendly breathable ink."
          />

          <Feature
            icon={<Truck />}
            title="Global Delivery"
            text="Carbon-neutral shipping worldwide."
          />

        </div>

      </section>

    </main>
  );
}



/* COMPONENTS */

function Preset({ icon }: any) {
  return (
    <div className="aspect-square bg-gray-100 flex items-center justify-center cursor-pointer">
      {icon}
    </div>
  );
}

function SizeButton({ label, active = false }: any) {
  return (
    <button
      className={`w-10 h-10 border ${
        active
          ? "bg-black text-white"
          : "hover:border-black"
      }`}
    >
      {label}
    </button>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div>

      <div className="mb-4">{icon}</div>

      <h3 className="font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-sm">
        {text}
      </p>

    </div>
  );
}
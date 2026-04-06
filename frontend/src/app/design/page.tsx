"use client";

import { useState } from "react";

const DesignPage = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <main className="pt-16 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] ...">
        {/* Upload / Presets / Blank sections */}
      </aside>

      {/* Product Preview */}
      <div className="ml-0 md:ml-80 flex-grow bg-background flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
        <div className="relative w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Product Image */}
          <div className="lg:col-span-7 relative z-10">
            <img
              src="https://lh3.googleusercontent.com/..."
              alt="Premium White Cotton T-Shirt"
              className="w-full aspect-[4/5] object-cover rounded-sm grayscale-[0.2]"
            />
          </div>

          {/* Product Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <span className="block text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-2">Select Size</span>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 border flex items-center justify-center text-xs transition-colors ${
                        selectedSize === size
                          ? "bg-on-surface text-background border-on-surface"
                          : "border-outline-variant/30 hover:border-on-surface"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesignPage;
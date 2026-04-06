"use client";
import React, { useState } from "react";

const faqs = [
  { question: "How do I order?", answer: "Apple" },
  { question: "How long does shipping take?", answer: "Apple" },
  { question: "Can I upload my own design?", answer: "Apple" },
  { question: "Do you offer bulk discounts?", answer: "Apple" },
];

const Answers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2 
                    gap-20 py-24 px-8 max-w-7xl mx-auto text-black">

      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold leading-tight">
          Answers to your
          <br /> top questions
        </h2>

        <p className="mt-6 text-lg">
          Quick info on custom orders and process.
        </p>

        <button className="mt-10 bg-lblue text-white px-8 py-4 rounded-full 
                           hover:bg-[#324D7C] transition w-fit">
          Start now
        </button>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center gap-10">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-black pb-6">
            
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-lg font-medium"
            >
              {item.question}
              <span
                className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answers;

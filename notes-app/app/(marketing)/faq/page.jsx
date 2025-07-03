"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    question: "Six curiosity day assurance bed necessary?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Produce say the ten moments parties?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Simple innate summer fat appear basket his desire joy?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "Outward clothes promise at gravity do excited?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-12">
      {/* Left side - FAQ list */}
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold mb-8 leading-tight">
          Fequently <br /> asked questions
        </h2>
        <div className="space-y-4">
          {faqData.map(({ question, answer }, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center font-semibold">
                <span>{question}</span>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - CTA box */}
      <div className="flex-1 border rounded-lg p-8 flex flex-col justify-center items-center text-center space-y-6">
        <div className="text-black text-4xl mb-2">
          {/* Ikona prostokąta z "dymkiem" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v12H7l-5 5V4z" />
          </svg>
        </div>
        <h3 className="font-bold text-lg">Do you have more questions?</h3>
        <p className="text-sm text-gray-700 max-w-xs">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
          Shoot a Direct Mail
        </button>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export const Sync = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 px-6">
        <div className="w-full text-center">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Sync across devices
          </h3>
          <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-800 mt-2">
            Access your notes anywhere, anytime.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
          <div className="relative w-[400px] h-[240px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px]">
            <Image
              src="/urzadzenia.svg"
              fill
              className="object-contain"
              alt="desktop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

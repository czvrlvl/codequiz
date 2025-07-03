"use client";

import Image from "next/image";

export const Benefits = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6">
        {/* Ilustracja */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-[270px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[400px] md:h-[260px]">
            <Image src="/note.svg" fill className="object-contain" alt="note" />
          </div>
        </div>
        {/* Tekst */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Create and organize <br /> your notes.
          </h3>
          <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-800">
            Capture your thoughts in seconds
          </h3>
        </div>
      </div>
    </section>
  );
};

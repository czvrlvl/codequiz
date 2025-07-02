"use clinet";

import Image from "next/image";

export const Benefits = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h3 className="text-3xl sm:text-5xl md:text-6xl">
        Create and organize <br /> your notes.
      </h3>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        Capture your thoughts in seconds
      </h3>

      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image src="/note.png" fill className="object-contain" alt="photo" />
        </div>
      </div>
    </div>
  );
};

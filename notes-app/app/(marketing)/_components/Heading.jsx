"use clinet";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Clear your mind.
        <br /> Write it down.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        A simple space for your notes, thoughts, and everything in between.
      </h3>
      <Button className="text-white bg-black">Join for free</Button>
    </div>
  );
};

"use clinet";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Pricing = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h3 className="text-3xl sm:text-5xl md:text-6xl">Completely free</h3>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium underline">
        No hidden costs, no subscriptions.
      </h3>

      <Button className="text-white bg-black rounded-3xl">Try for free</Button>
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image src="/24.png" fill className="object-contain" alt="photo" />
        </div>
      </div>
    </div>
  );
};

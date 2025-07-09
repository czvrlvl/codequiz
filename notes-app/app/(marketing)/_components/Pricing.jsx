"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Pricing = () => {
  const router = useRouter();
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 text-center md:text-left">
        <div className="flex-1 space-y-6">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Całkowicie darmowe
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl font-medium underline">
            Brak subskrypcji, bez żadnych zobowiązań
          </p>
          <Button
            className="bg-black text-white rounded-3xl px-8 py-3 mt-4 cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Wypróbuj za darmo
          </Button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <Image
              src="/24.png"
              fill
              className="object-contain"
              alt="pricing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

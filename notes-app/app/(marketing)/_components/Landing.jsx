"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const LandingSection = () => {
  const router = useRouter();
  return (
    <section className="bg-yellow-300 w-full py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Sprawdź swoje umiejętności.
            <br />
            Rozwijaj swoją wiedzę.
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-gray-800">
            Opanuj full-stack development dzięki interaktywnym quizom i teorii w
            pigułce. React, Next.js, TypeScript i więcej.{" "}
          </h3>
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-black text-white rounded-3xl px-8 py-3 mt-4 font-medium text-lg cursor-pointer"
          >
            Spróbuj za darmo
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[340px] ">
            <Image
              src="/code-learner.svg"
              fill
              className="object-contain"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Heroes } from "./Heroes";
import { Heading } from "./Heading";
import Image from "next/image";

export const LandingSection = () => {
    return (
        <section className="bg-yellow-300 w-full py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
                {/* Tekst */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Clear your mind.
                        <br />
                        Write it down.
                    </h1>
                    <h3 className="text-xl md:text-2xl font-medium text-gray-800">
                        A simple space for your notes, thoughts, and everything
                        in between.
                    </h3>
                    <button className="bg-black text-white rounded-3xl px-8 py-3 mt-4 font-medium text-lg">
                        Try for Free
                    </button>
                </div>
                {/* Ilustracja */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[340px]">
                        <Image
                            src="/rafiki.png"
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

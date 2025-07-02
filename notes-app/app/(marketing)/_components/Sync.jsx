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
                    <div className="relative w-[300px] h-[180px] sm:w-[350px] sm:h-[220px] md:w-[400px] md:h-[250px]">
                        <Image
                            src="/desktop.svg"
                            fill
                            className="object-contain"
                            alt="desktop"
                        />
                    </div>
                    <div className="relative w-[120px] h-[240px] sm:w-[160px] sm:h-[320px]">
                        <Image
                            src="/mobile.svg"
                            fill
                            className="object-contain"
                            alt="mobile"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

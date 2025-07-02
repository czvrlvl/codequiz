import { Inter } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex itmes-center gap-x-2">
            <p className={cn("font-semibold", font.className)}>Notify.</p>
        </div>
    );
};

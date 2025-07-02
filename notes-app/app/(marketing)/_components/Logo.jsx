import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex itmes-center gap-x-2">
      <Image src="/logo.png" height="40" width="40" alt="logo" />
      <p className={cn("font-semibold", font.className)}>Notify.</p>
    </div>
  );
};

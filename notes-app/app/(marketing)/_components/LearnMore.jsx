"use client";

import Router, { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const LearnMore = () => {
  const router = useRouter();
  return (
    <div className="max-w-3xl space-y-10">
      <h3 className="font-bold text-3xl sm:text-5xl md:text-6xl">
        Dowiedz się więcej
      </h3>
      <div className="flex flex-col gap-y-10">
        <Button
          variant="yellowOutline"
          className="rounded-3xl inline-flex px-6 py-3 cursor-pointer"
          onClick={() => router.push("/about")}
        >
          About CodeQuiz
        </Button>
        <Button
          variant="yellowOutline"
          className="rounded-3xl inline-flex px-6 py-3 cursor-pointer"
          onClick={() => router.push("/faq")}
        >
          FAQ
        </Button>
      </div>
    </div>
  );
};

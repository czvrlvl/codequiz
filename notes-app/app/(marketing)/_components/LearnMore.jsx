"use clinet";

import { Button } from "@/components/ui/button";

export const LearnMore = () => {
    return (
        <div className="max-w-3xl space-y-10">
            <h3 className="font-bold text-3xl sm:text-5xl md:text-6xl">
                Learn more
            </h3>
            <div className="flex flex-col gap-y-10">
                <Button variant="yellowOutline" className="rounded-3xl">
                    Explore features
                </Button>
                <Button variant="yellowOutline" className="rounded-3xl">
                    About Notify
                </Button>
                <Button variant="yellowOutline" className="rounded-3xl">
                    FAQ
                </Button>
            </div>
        </div>
    );
};

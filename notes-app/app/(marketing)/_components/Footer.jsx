import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-amber-300 z-50 outline border-t border-black">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="small">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="small">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    );
};

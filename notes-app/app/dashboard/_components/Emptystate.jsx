import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function Emptystate({ message, buttonText }) {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="text-center p-8">
                <p className="text-muted-foreground mb-4">{message}</p>
                <Button>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}

import { PlusIcon } from "lucide-react";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Modetoggle";

export default function Header() {
    return (
        <header className="border-b p-4 bg-card">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Notify.</h1>
                <Button onClick={() => signOut()}>Sign out</Button>
                <ModeToggle />
                <Button size="sm" className="cursor-pointer">
                    <PlusIcon className="h-4 w-4 mr-2" /> Create new note
                </Button>
            </div>
        </header>
    );
}

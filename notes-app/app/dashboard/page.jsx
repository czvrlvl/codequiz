"use client"; // bardzo ważne — hooki Reacta i useSession działają tylko po stronie klienta

import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/Header";

export default function Dashboard() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            signIn();
        }
    }, [status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (!session) {
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                    <Sidebar />
                </div>
                <div className=" md:col-span-2">
                    <Sidebar />
                </div>
            </main>
        </div>
    );
}

"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "./_components/Modetoggle";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const categories = [
  {
    name: "React",
    slug: "react",
    description: "Sprawdź swoją wiedzę z Reacta",
    icon: <SiReact className="text-blue-500 w-6 h-6" />,
  },
  {
    name: "Next.js",
    slug: "next",
    description: "Quiz z frameworka Next.js",
    icon: <SiNextdotjs className="text-black w-6 h-6" />,
  },
  {
    name: "Tailwind",
    slug: "tailwind",
    description: "Stylowanie z Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />,
  },
  {
    name: "TypeScript",
    slug: "typescript",
    description: "Masz głowę do typów?",
    icon: <SiTypescript className="text-blue-600 w-6 h-6" />,
  },
  {
    name: "HTML",
    slug: "html",
    description: "Podstawy i zaawansowane znaczniki HTML",
    icon: <SiHtml5 className="text-orange-600 w-6 h-6" />,
  },
  {
    name: "CSS",
    slug: "css",
    description: "Stylowanie stron w czystym CSS",
    icon: <SiCss3 className="text-blue-600 w-6 h-6" />,
  },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Ładowanie...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Cześć, {session.user.name}</h1>
            <p className="text-muted-foreground text-sm">
              Wybierz technologię, którą chcesz przećwiczyć
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button
              variant="outline"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Wyloguj się
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="hover:shadow-xl transition-shadow duration-200 rounded-2xl border"
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{category.description}</p>
                <Button
                  className="w-full"
                  onClick={() => router.push(`/lessons/${category.slug}`)}
                >
                  Zobacz lekcję
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

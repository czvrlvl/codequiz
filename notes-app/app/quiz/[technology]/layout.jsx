"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/app/theme-provider";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}

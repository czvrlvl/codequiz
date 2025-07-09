import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const metadata = {
  title: "CodeQuiz.",
  description: "Learn full-stack technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={redHat.className}>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}

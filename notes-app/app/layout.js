import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // wagi, które chcesz załadować
    display: "swap", // zalecane, by uniknąć niewidocznego tekstu
});
export const metadata = {
    title: "Notify.",
    description: "Empty your mind, it need a little break",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={redHat.className}>
            <body>{children}</body>
        </html>
    );
}

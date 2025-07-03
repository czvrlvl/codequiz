import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export default function MarketingLayout({ children }) {
  return (
    <div className="h-full pt-15 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

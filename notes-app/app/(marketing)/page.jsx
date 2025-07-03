import { Footer } from "./_components/Footer";
import { LearnMore } from "./_components/LearnMore";
import { Pricing } from "./_components/Pricing";
import { Benefits } from "./_components/Benefits";
import { Sync } from "./_components/Sync";
import { LandingSection } from "./_components/Landing";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 pb-10">
        <LandingSection />
        <Benefits />
        <Sync />
        <Pricing />
        <LearnMore />
      </div>
    </div>
  );
};

export default MarketingPage;

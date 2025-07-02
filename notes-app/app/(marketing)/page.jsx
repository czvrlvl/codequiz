import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/Heroes";
import { Footer } from "./_components/Footer";
import { LearnMore } from "./_components/LearnMore";
import { Pricing } from "./_components/Pricing";
import { Benefits } from "./_components/Benefits";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heroes />
        <Heading />
        <div>
          <Benefits />
          <Pricing />
        </div>
        <div>
          <LearnMore />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;

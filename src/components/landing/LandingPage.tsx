import React from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingPreview from "./LandingPreview";
import LandingFeatures from "./LandingFeatures";
import LandingPricing from "./LandingPricing";
import LandingFooter from "./LandingFooter";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingPreview />
        <LandingFeatures />
        <LandingPricing />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

import { LandingNavbar } from "@/src/components/landing-navbar";
import { LandingHero } from "@/src/components/landing-hero";
import { LandingContent } from "@/src/components/landing-content";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;

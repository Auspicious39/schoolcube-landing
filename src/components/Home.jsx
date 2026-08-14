import HeroText from "./HeroText";
import TrustBadges from "./TrustBadges";
import SchoolAheadSection from "./SchoolAheadSection";
import HassleSection from "./HassleSection";
import FeatureTabs from "./FeatureTabs";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";

const Home = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-white pb-5 pt-6 md:px-6 md:pb-9 md:pt-[25px]">
        <div className="mx-auto w-full max-w-[calc(100%-48px)] md:max-w-[1200px]">
          <HeroText />
          <TrustBadges />
          <SchoolAheadSection />
          <HassleSection />
          <FeatureTabs />
          <KeyBenefits variant="compact" />
          <SetupBanner />
        </div>
      </main>
    </>
  );
};

export default Home;

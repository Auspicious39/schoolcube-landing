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
      <main className="overflow-x-hidden bg-white px-6 pb-5 pt-6 md:pb-9 md:pt-[25px]">
        <div className="w-full">
          <HeroText />
          <TrustBadges />
          <SchoolAheadSection />
          <HassleSection />
          <FeatureTabs />
          <KeyBenefits />
          <SetupBanner />
        </div>
      </main>
    </>
  );
};

export default Home;

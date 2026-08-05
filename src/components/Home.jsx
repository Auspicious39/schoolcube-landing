import HeroText from "./HeroText";
import TrustBadges from "./TrustBadges";
// import NeedsSection from "./NeedsSection";
import SchoolAheadSection from "./SchoolAheadSection";
import HassleSection from "./HassleSection";
import FeatureTabs from "./FeatureTabs";
import Partners from "./Partners";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";

const Home = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-white px-4 pb-5 pt-6 md:px-6 md:pb-9 md:pt-[25px]">
        <div className="mx-auto max-w-[1200px]">
          <HeroText />
          <TrustBadges />
          {/* <NeedsSection /> */}
          <SchoolAheadSection />
          <HassleSection />
          <FeatureTabs />
          <Partners />
          <KeyBenefits />
          <SetupBanner />
        </div>
      </main>
    </>
  );
};

export default Home;

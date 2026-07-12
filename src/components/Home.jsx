import HeroText from "./HeroText";
import TrustBadges from "./TrustBadges";
import NeedsSection from "./NeedsSection";
import SchoolAheadSection from "./SchoolAheadSection";
import HassleSection from "./HassleSection";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";

const Home = () => {
  return (
    <>
      <main className="bg-white px-6 pt-[92px] pb-9">
        <div className="mx-auto max-w-[1050px]">
          <HeroText />
          <TrustBadges />
          <NeedsSection />
          <SchoolAheadSection />
          <HassleSection />
          <KeyBenefits />
          <SetupBanner />
        </div>
      </main>
    </>
  );
};

export default Home;

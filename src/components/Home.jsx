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
      <main className="overflow-x-hidden p-4 bg-white pb-5 pt-6 md:pb-9 md:pt-[1.5625rem]">
        <div className=" mx-auto flex flex-col gap-6 md:w-[95%] lg:w-[89%]">
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

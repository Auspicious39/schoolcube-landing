import HeroText from "./HeroText";
import TrustBadges from "./TrustBadges";
// import NeedsSection from "./NeedsSection";
import SchoolAheadSection from "./SchoolAheadSection";
import HassleSection from "./HassleSection";
import FeatureTabs from "./FeatureTabs";
import Partners from "./Partners";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";

const NeedsIntro = () => (
  <section className="px-6 pb-[72px] pt-[117px] text-center md:px-0 md:pb-0 md:pt-[150px]">
    <h2 className="mx-auto max-w-[302px] text-[18px] font-bold leading-[1.3] text-[#203684] md:max-w-none md:text-[40px]">
      Everything Your School Needs in One Place
    </h2>
    <p className="mx-auto mt-3 max-w-[302px] text-[14px] font-medium leading-[1.55] text-[#475467] md:mt-5 md:max-w-[584px] md:text-lg">
      Streamline admissions, attendance, communication, and academic records with one easy to use platform designed for modern schools.
    </p>
  </section>
);

const Home = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-white pb-5 pt-6 md:px-6 md:pb-9 md:pt-[25px]">
        <div className="mx-auto w-full max-w-[calc(100%-48px)] md:max-w-[80%]">
          <HeroText />
          <TrustBadges />
          <NeedsIntro />
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

import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";
import dashboardPreview from "../assets/dashboard-preview.png";
import backgroundImage from "../assets/background-2.png";
import onboardingCard from "../assets/Why.png";
import oneStopCard from "../assets/Frame 868-2.png";
import trainingCard from "../assets/Frame 2147228983.png";
import interfaceCard from "../assets/Frame 2147228984.png";

const AnimatedCard = ({ src, alt }) => {
  return (
    <div className="mx-auto w-full max-w-[260px] md:max-w-[820px]">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-[14px] object-contain"
      />
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <main className="px-4 pt-6 pb-0 md:px-6 md:pt-[70px]">
        <div className="mx-auto max-w-[1200px] text-center">
          <h1 className="mb-3 text-[18px] font-extrabold leading-tight text-[#203684] md:mb-4 md:text-[56px] md:leading-[1.25]">
            Innovative Solutions at its Best
          </h1>

          <p className="mx-auto mb-6 max-w-[280px] text-[8px] leading-4 text-[#4b5568] md:mb-8 md:max-w-[718px] md:text-[14px] md:leading-6">
            Schoolcube information management system solves the problems of
            manual school administration, long academic processes, untracked
            school fee payment, and poor school-parent and parent-teacher
            communication.
          </p>

          <div className="mb-8 flex items-center justify-center gap-3 md:mb-12 md:gap-4">
            <button className="rounded-[3px] bg-[#203684] px-4 py-2 text-[8px] font-semibold text-white transition hover:bg-[#1a2d6c] md:rounded-[4px] md:px-6 md:py-3 md:text-[14px]">
              Start Free Trial
            </button>

            <button className="rounded-[3px] border border-[#203684] px-4 py-2 text-[8px] font-medium text-[#203684] transition hover:bg-[#f4f7ff] md:rounded-[4px] md:px-6 md:py-3 md:text-[14px]">
              Book Demo
            </button>
          </div>

          <div className="mx-auto mb-10 max-w-[260px] md:mb-[80px] md:max-w-[1016px]">
            <img
              src={dashboardPreview}
              alt="Dashboard preview"
              className="w-full rounded-[10px] object-contain"
            />
          </div>

          <KeyBenefits />
        </div>
      </main>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-4 py-10 md:px-6 md:py-[90px]">
        <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[4px]">
          <div className="relative min-h-[220px] md:min-h-[555px]">
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative z-10 grid grid-cols-2 gap-5 px-4 pt-6 md:mx-auto md:flex md:max-w-[1003px] md:justify-between md:gap-10 md:px-0 md:pt-[70px]">
              <h2 className="text-[14px] font-extrabold text-white md:text-[36px]">
                Why Choose Us?
              </h2>

              <p className="text-[7px] leading-3 text-white md:max-w-[438px] md:text-[13px] md:font-medium md:leading-6">
                Discover the advantages that help schools operate more
                efficiently, save time and deliver a better learning experience.
              </p>
            </div>

            <div className="absolute left-1/2 top-[95px] z-10 w-full max-w-[260px] -translate-x-1/2 px-4 md:top-[165px] md:max-w-[922px]">
              <img
                src={onboardingCard}
                alt="Seamless Onboarding"
                className="w-full rounded-[14px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="bg-[#f3f6f9] px-4 py-14 md:px-6 md:py-[110px]">
          <div className="flex flex-col gap-8 md:gap-20">
            <AnimatedCard src={oneStopCard} alt="One Stop Solution" />
            <AnimatedCard src={trainingCard} alt="Free Training and Demo" />
            <AnimatedCard src={interfaceCard} alt="Customized Interface" />
          </div>
        </div>
      </section>

      <SetupBanner />
    </div>
  );
};

export default FeaturesPage;
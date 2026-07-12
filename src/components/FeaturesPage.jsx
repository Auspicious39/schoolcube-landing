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
    <div className="mx-auto w-full max-w-[820px]">
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
      <main className="px-6 pt-[70px] pb-0">
        <div className="mx-auto max-w-[1200px] text-center">
          <h1 className="mb-4 text-[46px] font-extrabold leading-[1.25] text-[#203684] md:text-[56px]">
            Innovative Solutions at its Best
          </h1>

          <p className="mx-auto mb-8 max-w-[718px] text-[14px] leading-6 text-[#4b5568]">
            Schoolcube information management system solves the problems of manual
            school administration, long academic processes, untracked school fee
            payment, and poor school-parent and parent-teacher communication.
          </p>

          <div className="mb-12 flex items-center justify-center gap-4">
            <button className="rounded-[4px] bg-[#203684] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#1a2d6c]">
              Start Free Trial
            </button>

            <button className="rounded-[4px] border border-[#203684] px-6 py-3 text-[14px] font-medium text-[#203684] transition hover:bg-[#f4f7ff]">
              Book Demo
            </button>
          </div>

          <div className="mx-auto mb-[80px] max-w-[1016px]">
            <img
              src={dashboardPreview}
              alt="Dashboard preview"
              className="w-full rounded-[10px] object-contain"
            />
          </div>

          <KeyBenefits />
        </div>
      </main>

      <section className="bg-white px-6 py-[90px]">
        <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[4px]">
          <div className="relative min-h-[555px]">
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative z-10 mx-auto flex max-w-[1003px] justify-between gap-10 pt-[70px]">
              <h2 className="text-[36px] font-extrabold text-white">
                Why Choose Us?
              </h2>

              <p className="max-w-[438px] text-[13px] font-medium leading-6 text-white">
                Built with educators in mind, our platform makes managing students,
                staff, and daily operations easier than ever.
              </p>
            </div>

            <div className="absolute left-1/2 top-[165px] z-10 w-full max-w-[922px] -translate-x-1/2 px-4">
              <img
                src={onboardingCard}
                alt="Seamless Onboarding"
                className="w-full rounded-[14px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#f3f6f9] px-6 py-[110px]">
          <div className="flex flex-col gap-20">
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

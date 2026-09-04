import { useNavigate } from "react-router-dom";
import Partners from "./Partners";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";
import WhyChooseUs from "./WhyChooseUs";
import dashboardPreview from "../assets/dashboard-preview.png";


const FeaturesPage = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white  mx-auto">
      <main className="px-4 pt-[3.75rem] pb-0 md:px-6 md:pt-[6.25rem]">
        <div className="mx-auto flex w-full max-w-[20.4375rem] flex-col items-center gap-[4.375rem] text-center sm:gap-10 md:max-w-[53.25rem] md:gap-6">
          <div className="mx-auto flex w-full max-w-[18.875rem] flex-col items-center gap-3 pb-0 md:max-w-none md:gap-4 md:pb-0">
            <h1 className="w-full text-lg font-bold leading-[130%] text-[#203684] md:text-[3.5rem]">
              Innovative Solutions at its Best
            </h1>

            <p className="w-full text-center text-[0.875rem] font-medium leading-[155%] tracking-[0rem] text-[#475467] font-['Plus_Jakarta_Sans',sans-serif] md:max-w-[44.875rem] md:text-left md:text-xl md:font-normal md:leading-[170%] md:text-[#000000CC]">
              Schoolcube information management system solves the problems of
              manual school administration, long academic processes, untracked
              school fee payment, and poor school-parent and parent-teacher
              communication.
            </p>
          </div>

          <div className="flex w-full flex-row justify-center items-stretch gap-6 md:mt-8">
            <button className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[0.3125rem] bg-[#203684] px-3 text-center text-[1rem] font-medium leading-tight text-white hover:bg-[#1a2861] sm:flex-none sm:w-[10.5rem] md:h-[3.0625rem] md:px-[1.875rem]">
              Start Free Trial
            </button>

            <button onClick={() => navigate("/pricing")} className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[0.3125rem] border-[0.03125rem] border-[#203684] px-3 text-center text-[1rem] font-medium leading-tight text-[#203684] hover:bg-[#f5fbff] sm:flex-none sm:w-[9.4375rem] md:h-[3.0625rem] md:px-[1.875rem]">
              Book Demo
            </button>
          </div>
        </div>

        <div className="mx-auto mb-10 mt-[6.375rem] w-full max-w-[20.4375rem] md:mb-[4rem] md:mt-[4.625rem] md:max-w-[57.5rem]">
          <img
            src={dashboardPreview}
            alt="Dashboard preview"
            className="w-full rounded-[0.625rem] object-contain"
          />
        </div>
      </main>
      <Partners />
      <KeyBenefits />

      <WhyChooseUs />

      <SetupBanner />
    </div>
  );
};

export default FeaturesPage;

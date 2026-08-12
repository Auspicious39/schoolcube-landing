import { useNavigate } from "react-router-dom";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";
import WhyChooseUs from "./WhyChooseUs";
import dashboardPreview from "../assets/dashboard-preview.png";


const FeaturesPage = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white  mx-auto">
      <main className="px-4 pt-[59px] pb-0 md:px-6 md:pt-[112px]">
        <div className="mx-auto flex w-full max-w-[327px] flex-col items-center gap-[70px] text-center sm:gap-10 md:max-w-[852px] md:gap-6">
          <div className="mx-auto flex w-full max-w-[302px] flex-col items-center gap-3 pb-0 md:max-w-none md:gap-4 md:pb-0">
            <h1 className="w-full text-lg font-bold leading-[130%] text-[#203684] md:text-[56px]">
              Innovative Solutions at its Best
            </h1>

            <p className="w-full text-sm font-medium leading-[155%] text-[#475467] md:max-w-[718px] md:text-xl md:font-normal md:leading-[170%] md:text-[#000000CC]">
              Schoolcube information management system solves the problems of
              manual school administration, long academic processes, untracked
              school fee payment, and poor school-parent and parent-teacher
              communication.
            </p>
          </div>

          <div className="flex w-full flex-row justify-center items-stretch gap-6 md:mt-8">
            <button className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[5px] bg-[#203684] px-3 text-center text-[16px] font-medium leading-tight text-white hover:bg-[#1a2861] sm:flex-none sm:w-[168px] md:h-[49px] md:px-[30px]">
              Start Free Trial
            </button>

            <button onClick={() => navigate("/pricing")} className="flex h-10 flex-1 items-center justify-center whitespace-nowrap rounded-[5px] border-[0.5px] border-[#203684] px-3 text-center text-[16px] font-medium leading-tight text-[#203684] hover:bg-[#f5fbff] sm:flex-none sm:w-[151px] md:h-[49px] md:px-[30px]">
              Book Demo
            </button>
          </div>
        </div>

        <div className="mx-auto mb-10 mt-[102px] w-full max-w-[327px] md:mb-[80px] md:mt-[113px] md:max-w-[1016px]">
          <img
            src={dashboardPreview}
            alt="Dashboard preview"
            className="w-full rounded-[10px] object-contain"
          />
        </div>
      </main>
      <KeyBenefits />

      <WhyChooseUs />

      <SetupBanner />
    </div>
  );
};

export default FeaturesPage;

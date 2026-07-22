import { useEffect, useState } from "react";
import KeyBenefits from "./KeyBenefits";
import SetupBanner from "./SetupBanner";
import WhyChooseUs from "./WhyChooseUs";
import dashboardPreview from "../assets/dashboard-preview.png";
import backgroundImage from "../assets/background-2.png";
import onboardingCard from "../assets/Frame 867.png";
import oneStopCard from "../assets/Frame 868-2.png";
import trainingCard from "../assets/Frame 2147228983.png";
import interfaceCard from "../assets/Frame 2147228984.png";

const FeaturesPage = () => {
  return (
    <div className="bg-white">
      <main className="px-4 pt-6 pb-0 md:px-6 md:pt-[70px]">
        <div className="mx-auto flex w-[327px] flex-col items-center gap-8 text-center md:h-[287px] md:w-[852px] md:gap-[24px]">
          <div className="flex w-[302px] flex-col items-center gap-6 pb-[17px] md:h-[214px] md:w-[852px] md:gap-[16px] md:pb-0">
            <h1 className="w-[302px] text-[18px] font-bold leading-[130%] text-[#203684] md:h-[73px] md:w-[852px] md:text-[56px]">
              Innovative Solutions at its Best
            </h1>

            <p className="w-[302px] text-[14px] font-medium leading-[155%] text-[#475467] md:h-[125px] md:w-[718px] md:text-[20px] md:font-normal md:leading-[170%] md:text-[#000000CC]">
              Schoolcube information management system solves the problems of
              manual school administration, long academic processes, untracked
              school fee payment, and poor school-parent and parent-teacher
              communication.
            </p>
          </div>

          <div className="flex justify-center gap-6 md:mt-8">
            <button className="flex h-[40px] w-[168px] shrink-0 items-center justify-center whitespace-nowrap gap-[10px] rounded-[5px] bg-[#203684] px-[30px] py-[15px] font-medium text-[16px] text-white hover:bg-[#1a2861] md:h-[49px] md:w-[168px]">
              Start Free Trial
            </button>

            <button className="flex h-[40px] w-[151.5px] items-center justify-center whitespace-nowrap rounded-[5px] border-[0.5px] border-[#203684] px-[30px] py-[15px] font-medium text-[16px] text-[#203684] hover:bg-[#f5fbff] md:h-[49px] md:w-[168px]">
              Book Demo
            </button>
          </div>
        </div>

        <div className="mx-auto mb-10 mt-[40px] w-[291px] md:mb-[80px] md:w-[1016px]">
          <img
            src={dashboardPreview}
            alt="Dashboard preview"
            className="w-full rounded-[10px] object-contain"
          />
        </div>
        <KeyBenefits />
      </main>

      <WhyChooseUs />

      <SetupBanner />
    </div>
  );
};

export default FeaturesPage;

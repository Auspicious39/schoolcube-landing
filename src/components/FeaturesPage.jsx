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
      <main className="px-4 pt-[50px] pb-0 md:px-6 md:pt-[70px]">
        <div className="mx-auto flex w-full max-w-[327px] flex-col items-center gap-8 text-center md:max-w-[852px] md:gap-6">
          <div className="flex w-full flex-col items-center gap-4 pb-[17px] md:gap-4 md:pb-0">
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

          <div className="flex w-full flex-row justify-center items-stretch gap-2 sm:gap-6 md:mt-8">
            <button className="flex flex-1 sm:flex-none min-h-11 md:h-[49px] sm:w-[168px] items-center justify-center whitespace-normal sm:whitespace-nowrap text-center leading-tight gap-[10px] rounded-[5px] bg-[#203684] px-3 sm:px-[30px] font-medium text-[13px] sm:text-base text-white hover:bg-[#1a2861]">
              Start Free Trial
            </button>

            <button className="flex flex-1 sm:flex-none min-h-11 md:h-[49px] sm:w-[168px] items-center justify-center whitespace-normal sm:whitespace-nowrap text-center leading-tight rounded-[5px] border-[0.5px] border-[#203684] px-3 sm:px-[30px] font-medium text-[13px] sm:text-base text-[#203684] hover:bg-[#f5fbff]">
              Book Demo
            </button>
          </div>
        </div>

        <div className="mx-auto mb-10 mt-[40px] w-full max-w-[291px] md:mb-[80px] md:max-w-[1016px]">
          <img
            src={dashboardPreview}
            alt="Dashboard preview"
            className="w-full rounded-[10px] object-contain pt-12"
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
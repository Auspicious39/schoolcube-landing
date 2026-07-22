import { useState } from "react";

import listGif from "../assets/List-9.gif";
import reportGif from "../assets/Report.gif";
import messageGif from "../assets/Instant.gif";
import paymentGif from "../assets/Fees.gif";

const tabs = [
  {
    id: 1,
    title: "All in one platform",
    heading: (
      <>
        All in one <span className="text-[#203684]">Platform</span>
      </>
    ),
    description:
      "Schoolcube collects and organizes lists and profiles of students, staff, and parents, so that you can keep up to date, accurate school data.",
    media: listGif,
    width: "277px",
    height: "264px",
  },
  {
    id: 2,
    title: "Report and Analytics",
    heading: (
      <>
        Report & <span className="text-[#203684]">Analytics</span>
      </>
    ),
    description:
      "Generate insightful reports that help school administrators monitor attendance, finances, academics and overall school performance.",
    media: reportGif,
    width: "532px",
    height: "323px",
  },
  {
    id: 3,
    title: "Instant Messaging",
    heading: (
      <>
        Instant <span className="text-[#203684]">Messaging</span>
      </>
    ),
    description:
      "Communicate with students, parents and staff instantly from one platform using secure messaging.",
    media: messageGif,
    width: "347px",
    height: "240px",
  },
  {
    id: 4,
    title: "Fees Payment",
    heading: (
      <>
        Fees <span className="text-[#203684]">Payment</span>
      </>
    ),
    description:
      "Receive school fees online, track payments and generate payment reports with ease.",
    media: paymentGif,
    width: "424px",
    height: "282px",
  },
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-12 flex w-full max-w-[327px] items-center gap-3 overflow-x-auto md:mb-24 md:h-[60px] md:max-w-[841px] md:gap-[24px] md:overflow-visible">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex h-auto w-max flex-shrink-0 items-center justify-center gap-[10px] whitespace-nowrap rounded-[40px] px-[20px] py-[16px] text-[18px] font-medium transition-all duration-300 ${
                activeTab.id === tab.id
                  ? "bg-[#339BFE] text-white"
                  : "bg-transparent text-[#5A5A5A] hover:text-[#203684]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        
 
<div className="mx-auto flex w-full max-w-[327px] flex-col items-center gap-[48px] md:h-[264px] md:max-w-[892px] md:flex-row md:gap-[284px]">
<div className="flex w-full max-w-[327px] flex-col gap-4 md:h-[170px] md:w-[358px] md:max-w-none md:gap-[16px]">
  <h2 className="font-bold text-[24px] leading-[141%] text-[#203684] md:h-[42px] md:w-[297px] md:text-[30px]">
    {activeTab.heading}
  </h2>

  <p className="text-[16px] font-normal leading-[155%] text-[#666666] md:h-[112px] md:w-[358px] md:text-[18px]">
    {activeTab.description}
  </p>
</div>

  <div className="flex w-full justify-center md:w-auto md:justify-end">
  <img
    src={activeTab.media}
    alt={activeTab.title}
    className="h-[223px] w-auto max-w-full object-contain md:h-[264px] md:w-[277px]"
  />
</div>
</div>
      </div>
    </section>
  );
};

export default FeatureTabs;

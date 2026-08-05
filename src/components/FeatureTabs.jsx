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
    width: 277,
    height: 264,
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
    width: 532,
    height: 323,
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
    width: 347,
    height: 240,
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
    width: 424,
    height: 282,
  },
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-0 md:pt-[76px] md:pb-[111px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-10 flex w-full max-w-full items-center gap-2 overflow-x-auto rounded-[40px] border border-black/15 p-3 scrollbar-hide sm:gap-3 md:mb-[111px] md:max-w-[892px] md:flex-nowrap md:justify-between md:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex h-auto w-max flex-shrink-0 items-center justify-center gap-[10px] whitespace-nowrap rounded-[40px] px-4 sm:px-5 py-2 md:py-4 text-sm md:text-lg font-medium transition-all duration-300 ${
                activeTab.id === tab.id
                  ? "bg-[#339BFE] text-white"
                  : "bg-[#339BFE]/8 text-[#666]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-[892px] flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-[284px]">
          <div className="flex w-full flex-col gap-4 md:max-w-[358px] md:flex-shrink-0">
            <h2 className="text-lg font-bold leading-[141%] text-black sm:text-xl md:text-[30px]">
              {activeTab.heading}
            </h2>

            <p className="text-sm md:text-lg font-normal leading-[155%] text-[#666666]">
              {activeTab.description}
            </p>
          </div>

          <div className="flex w-full items-center justify-center md:w-auto md:justify-end">
            <img
              src={activeTab.media}
              alt={activeTab.title}
              style={{ maxWidth: activeTab.width, maxHeight: activeTab.height }}
              className="h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;

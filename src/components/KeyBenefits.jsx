import attendanceImage from "../assets/attendance.png";
import analysisImage from "../assets/analysis.png";
import managementImage from "../assets/management.png";
import costImage from "../assets/cost.png";
import securityImage from "../assets/security.png";
import backupImage from "../assets/backup.png";

const benefits = [
  {
    title: "Up to date Information",
    text: "We take pride in collecting and analyzing complete and accurate data on students, staff, and parents.",
    image: attendanceImage,
    alt: "Attendance information",
  },
  {
    title: "Data Analysis",
    text: "Schoolcube.net provides clear reports and data analysis through the use of tables and charts.",
    image: analysisImage,
    alt: "Data analysis chart",
  },
  {
    title: "Easy & Effective Management",
    text: "Schoolcube.net is intuitive, clear and easy to use. It provides 24/7 system stability and reliability.",
    image: managementImage,
    alt: "System uptime",
  },
  {
    title: "Cost Effective",
    text: "Schoolcube packages come at almost no cost to its users.",
    image: costImage,
    alt: "Cost comparison",
  },
  {
    title: "Security",
    text: "All data on Schoolcube.net is protected by high-profile security.",
    image: securityImage,
    alt: "Data encryption",
  },
  {
    title: "Data Backup",
    text: "Data is backed up automatically on a daily, weekly and monthly basis.",
    image: backupImage,
    alt: "Backup storage",
  },
];

const KeyBenefits = () => {
  return (
    <section className="bg-white py-10 py-[100px] mx-auto max-w-[1200px]">
      <div className=" flex flex-col gap-[130px]">
        {/* <div className="flex max-w-[322px] flex-row items-start gap-6 md:h-[87px] md:max-w-none md:justify-between md:gap-[324px]">
          <h2 className="w-[142px] text-[18px] font-bold leading-[136%] tracking-[0.2px] text-[#203684] md:w-[438px] md:text-[40px]">
            Key Benefits
          </h2>

          <p className="w-[156px] text-[14px] font-normal leading-[155%] tracking-[0px] text-[#475467] md:w-[438px] md:text-[18px]">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div> */}
        <div className="mx-auto max-w-[1200px]">
          <div className="flex max-w-[322px] flex-row items-start gap-12 md:gap-110 md:h-[108px] md:max-w-none md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[142px] text-[18px] font-bold leading-[136%] tracking-[0.2px] text-[#203684] md:max-w-[498px] md:text-[40px]">
              Key Benefits
            </h2>

            <p className="max-w-[156px] text-[14px] font-normal text-[#475467] md:max-w-[498px] md:text-[18px]">
              Discover the advantages that help schools operate more
              efficiently, save time, and deliver a better learning experience.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[327px] grid-cols-1 gap-12 md:max-w-[922px] md:grid-cols-2 md:gap-x-[52px] md:gap-y-[74px]">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="min-h-[396px] rounded-[20px] bg-[#f4f4f4] p-5 md:rounded-[10px] md:p-[29px]"
            >
              <h3 className="mb-3 text-[16px] font-extrabold text-[#333333] md:mb-3 md:text-[17px]">
                {benefit.title}
              </h3>

              <p className="mb-6 text-[14px] leading-7 text-[#777777] md:mb-7 md:min-h-[70px] md:text-[13px] md:leading-5">
                {benefit.text}
              </p>

              <div className="mt-6 flex h-[180px] items-center justify-center rounded-[14px] bg-white p-4 md:h-[193px] md:rounded-[6px] md:p-4">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;

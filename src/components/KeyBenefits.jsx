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
    <section className="bg-white py-16 md:py-[100px] px-4 sm:px-6 mx-auto max-w-[1200px]">
      <div className="flex flex-col gap-12 md:gap-[130px]">
        {/* Header */}
        <div className="mx-auto flex w-full flex-row items-start justify-between gap-3 sm:gap-5 md:gap-8">
          <h2 className="flex-1 min-w-0 text-lg sm:text-xl md:text-4xl font-bold leading-[136%] md:leading-[130%] tracking-[0.2px] md:tracking-normal text-[#203684] md:max-w-[438px] font-['Plus_Jakarta_Sans',sans-serif]">
            Key Benefits
          </h2>

          <p className="flex-1 min-w-0 text-xs sm:text-sm md:text-lg font-normal md:font-medium leading-[155%] tracking-[0px] text-[#475467] md:max-w-[438px] font-['Plus_Jakarta_Sans',sans-serif]">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid w-full grid-cols-1 gap-12 md:max-w-[922px] md:grid-cols-2 md:gap-x-[52px] md:gap-y-[74px]">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="min-h-[396px] rounded-[20px] bg-[#f4f4f4] p-5 md:p-[29px]"
            >
              <h3 className="mb-3 text-base font-extrabold text-[#333333] md:text-[17px]">
                {benefit.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#777777] md:mb-7 md:min-h-[70px] md:text-[13px] md:leading-5">
                {benefit.text}
              </p>

              <div className="mt-6 flex h-[180px] items-center justify-center overflow-hidden rounded-[14px] p-4 md:h-[193px] md:rounded-[12px]">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-full w-full rounded-[8px] object-cover"
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
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
    <section className="bg-white py-10 md:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-8 grid grid-cols-2 gap-6 md:mb-[90px] md:gap-8">
          <h2 className="text-[18px] font-extrabold leading-tight text-[#203684] md:text-[42px]">
            Key Benefits
          </h2>

          <p className="text-[12px] leading-6 text-[#4b5568] md:ml-auto md:max-w-[438px] md:text-[13px] md:leading-6">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:mx-auto md:max-w-[922px] md:grid-cols-2 md:gap-[74px_52px]">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[20px] bg-[#f4f4f4] p-5 md:min-h-[396px] md:rounded-[10px] md:p-[29px]"
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
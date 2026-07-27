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
        <div className="mb-8 grid grid-cols-2 gap-5 md:mb-[90px] md:gap-8">
          <h2 className="text-[15px] font-extrabold text-[#203684] md:text-[42px]">
            Key Benefits
          </h2>

          <p className="max-w-[438px] text-[7px] font-medium leading-3 text-[#4b5568] md:ml-auto md:text-[13px] md:leading-6">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        <div className="mx-auto grid max-w-[260px] gap-5 md:max-w-[922px] md:gap-[74px_52px] md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="min-h-[258px] rounded-[7px] bg-[#f4f4f4] p-4 md:min-h-[396px] md:rounded-[10px] md:p-[29px]"
            >
              <h3 className="mb-2 text-[10px] font-extrabold text-[#333333] md:mb-3 md:text-[17px]">
                {benefit.title}
              </h3>

              <p className="mb-4 min-h-[36px] text-[7px] leading-3 text-[#777777] md:mb-7 md:min-h-[70px] md:text-[13px] md:leading-5">
                {benefit.text}
              </p>

              <div className="flex h-[150px] items-center justify-center rounded-[5px] bg-white p-3 md:h-[193px] md:rounded-[6px] md:p-4">
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

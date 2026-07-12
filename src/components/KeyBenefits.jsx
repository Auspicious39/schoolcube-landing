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
    <section className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[90px] grid gap-8 md:grid-cols-2">
          <h2 className="text-[42px] font-extrabold text-[#203684]">
            Key Benefits
          </h2>

          <p className="max-w-[438px] text-[13px] font-medium leading-6 text-[#4b5568] md:ml-auto">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        <div className="mx-auto grid max-w-[922px] gap-[74px_52px] md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="min-h-[396px] rounded-[10px] bg-[#f4f4f4] p-[29px]"
            >
              <h3 className="mb-3 text-[17px] font-extrabold text-[#333333]">
                {benefit.title}
              </h3>

              <p className="mb-7 min-h-[70px] text-[13px] leading-5 text-[#777777]">
                {benefit.text}
              </p>

              <div className="flex h-[193px] items-center justify-center rounded-[6px] bg-white p-4">
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

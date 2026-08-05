import { motion, useReducedMotion } from "framer-motion";
import attendanceImage from "../assets/update.png";
import analysisImage from "../assets/analysis.png";
import managementImage from "../assets/management.png";
import costImage from "../assets/cost.png";
import securityImage from "../assets/security.png";
import backupImage from "../assets/backup.png";

const benefits = [
  {
    title: "Up to date Information",
    description:
      "We take pride in collecting and analyzing complete and accurate data on students, staff, and parents.",
    image: attendanceImage,
  },
  {
    title: "Data Analysis",
    description:
      "Schoolcube.net provides clear reports and data analysis through the use of tables and charts.",
    image: analysisImage,
  },
  {
    title: "Easy & Effective Management",
    description:
      "Schoolcube.net is intuitive, clear and easy to use. It provides 24/7 system stability and reliability.",
    image: managementImage,
  },
  {
    title: "Cost Effective",
    description: "Schoolcube packages come at almost no cost to its users.",
    image: costImage,
  },
  {
    title: "Security",
    description:
      "All data on Schoolcube.net is protected by high-profile security.",
    image: securityImage,
  },
  {
    title: "Data Backup",
    description:
      "Data is backed up automatically on a daily, weekly and monthly basis.",
    image: backupImage,
  },
];

const KeyBenefits = () => {
  const shouldReduceMotion = useReducedMotion();
  const slideDistance = shouldReduceMotion ? 0 : 24;

  const reveal = {
    hidden: { opacity: 0, y: slideDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] bg-white px-2 pb-[71px] pt-0 sm:px-3 sm:pb-20 md:px-0 md:py-[100px]">
      <div className="flex flex-col gap-[58px] md:gap-20">
        <motion.div
          className="flex w-full flex-col items-start gap-6 md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <h2 className="font-[Plus_Jakarta_Sans] text-[18px] font-bold leading-[136%] tracking-[0.2px] text-[#203684] md:text-[40px] md:leading-[130%] md:tracking-normal">
            Key Benefits
          </h2>
          <p className="max-w-[676px] font-[Plus_Jakarta_Sans] text-sm font-medium leading-[155%] text-[#475467] md:text-[18px] md:leading-[155%]">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-[52px] md:gap-y-[74px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.title}
              className="group h-[396px] overflow-hidden rounded-[22px] bg-[#F6F6F6] px-[17px] py-[33px] md:px-[28px] md:py-[29px]"
              variants={reveal}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      boxShadow: "0 18px 36px rgba(32, 54, 132, 0.12)",
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="min-h-[111px] md:min-h-[118px]">
                <h3 className="font-[Plus_Jakarta_Sans] text-[18px] font-semibold leading-[130%] text-[rgba(0,0,0,0.8)] md:text-[20px]">
                  {benefit.title}
                </h3>
                <p className="mt-3 font-[Plus_Jakarta_Sans] text-sm font-normal leading-[155%] text-[#666] md:text-base md:leading-[170%]">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-[25px] flex h-[193px] items-center justify-center overflow-hidden rounded-[11px] bg-white p-3">
                <img
                  src={benefit.image}
                  alt=""
                  className="h-full w-full object-fill transition-transform duration-500 ease-out motion-reduce:transform-none group-hover:scale-[1.025]"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefits;

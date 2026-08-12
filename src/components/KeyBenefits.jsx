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
    <section className="mx-auto w-full bg-white px-6 py-[56px] sm:px-6 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto flex max-w-[327px] flex-col gap-[58px] md:max-w-none md:gap-14">

        <motion.div
          className="flex w-full flex-col items-start gap-[18px] md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <h2 className="text-lg font-bold leading-[133%] tracking-tight text-[#203684] sm:text-3xl md:text-4xl">
            Key Benefits
          </h2>
          <p className="max-w-2xl text-sm font-medium leading-[157%] text-[#475467] md:text-lg md:font-normal md:leading-relaxed">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </motion.div>


        <motion.div
          className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-8"
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
              className="group flex h-[396px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#F6F6F6] px-[17px] pb-[33px] pt-[33px] md:h-auto md:rounded-[24px] md:p-8"
              variants={reveal}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                    y: -4,
                    boxShadow: "0 16px 32px rgba(30, 43, 88, 0.08)",
                  }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >

              <div className="flex flex-col gap-3">
                <h3 className="font-[Plus_Jakarta_Sans] text-lg font-bold leading-[128%] text-[#000000CC] sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="font-[Plus_Jakarta_Sans] text-sm font-normal leading-[155%] text-[#666666] sm:text-base">
                  {benefit.description}
                </p>
              </div>


              <div className="flex h-[193px] w-full items-end justify-center sm:h-[220px] md:rounded-[16px] md:bg-white md:p-4">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out motion-reduce:transform-none group-hover:scale-[1.02]"
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

"use client";

import { motion } from "framer-motion";

const SchoolAheadSection = () => {
  const features = [
    {
      color: "#0ACC94",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 shrink-0"
        >
          <rect x="2" y="7" width="4" height="15" rx="2" fill="#0ACC94" />
          <path
            d="M8.5 22H16.28C17.76 22 19.04 20.92 19.27 19.46L20.81 9.72C21.09 7.91 19.69 6.28 17.85 6.28H13.67L14.73 3.65C15.11 2.7 14.41 1.66 13.39 1.66C12.83 1.66 12.3 1.91 11.95 2.34L8.5 6.66V22Z"
            fill="#0ACC94"
          />
        </svg>
      ),
      title: "Tailored to Meet your School's Needs",
      body: "The structure and feature of the Schoolcube portal allows schools to customize the functions to suit their individual needs.",
    },
    {
      color: "#FFC16A",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 shrink-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"
            fill="#FFC16A"
          />
          <rect x="10.5" y="1" width="3" height="4" rx="1.5" fill="#FFC16A" />
          <rect x="10.5" y="19" width="3" height="4" rx="1.5" fill="#FFC16A" />
          <rect x="1" y="10.5" width="4" height="3" rx="1.5" fill="#FFC16A" />
          <rect x="19" y="10.5" width="4" height="3" rx="1.5" fill="#FFC16A" />
        </svg>
      ),
      title: "Easy Access and Navigation",
      body: "We have built a customer-friendly and simple to navigate platform for you.",
    },
    {
      color: "#339BFE",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 shrink-0"
        >
          <path
            d="M6 10V6.5C6 3.46243 8.46243 1 11.5 1H12.5C15.5376 1 18 3.46243 18 6.5V10"
            stroke="#339BFE"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.5C2 11.4624 4.46243 9 7.5 9H16.5C19.5376 9 22 11.4624 22 14.5V16.5C22 19.5376 19.5376 22 16.5 22H7.5C4.46243 22 2 19.5376 2 16.5V14.5ZM12 18.5C13.6569 18.5 15 17.1569 15 15.5C15 13.8431 13.6569 12.5 12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 17.1569 10.3431 18.5 12 18.5ZM12 17C12.8284 17 13.5 16.3284 13.5 15.5C13.5 14.6716 12.8284 14 12 14C11.1716 14 10.5 14.6716 10.5 15.5C10.5 16.3284 11.1716 17 12 17Z"
            fill="#339BFE"
          />
        </svg>
      ),
      title: "Your School Data is Safe",
      body: "We've built a high profile security perimeter around every school's account to ensure that only administrators have access.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 110,
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 md:px-0 md:pt-[176px] md:pb-0">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          className="mb-8 flex flex-col items-start gap-3 sm:gap-5 md:mb-[84px] md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="min-w-0 text-lg font-bold leading-[130%] text-[#203684] sm:text-xl md:text-[40px]">
            Put Your School Ahead of Others
          </h2>

          <p className="max-w-[519px] text-xs font-medium leading-[150%] text-[#475467] sm:text-sm md:text-[18px] md:leading-[1.55]">
            Increase the efficiency of your school by eliminating manual
            management tasks, which are prone to errors.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <motion.article
              key={i}
              className="flex min-h-[220px] flex-col gap-6 rounded-2xl bg-[#F6FBFF] p-6 md:h-[259px] md:min-h-0 md:justify-center md:rounded-[20px] md:px-[31px] md:py-5"
              variants={cardVariants}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0">
                {feature.icon}
              </div>

              <h3 className="-mb-4 text-base font-bold leading-[140%] text-[#282828] md:text-xl">
                {feature.title}
              </h3>

              <p className="text-sm font-medium leading-[155%] text-[#475467] md:text-[14px]">
                {feature.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolAheadSection;

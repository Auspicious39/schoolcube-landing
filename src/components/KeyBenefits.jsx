import { motion, useReducedMotion } from 'framer-motion';
import updateImage from '../assets/update.png';
import analysisImage from '../assets/analysis.png';
import managementImage from '../assets/management.png';
import costImage from '../assets/cost.png';
import securityImage from '../assets/security.png';
import backupImage from '../assets/backup.png';

const benefits = [
  {
    title: 'Up to date Information',
    description:
      'We take pride in collecting and analyzing complete and accurate data on students, staff, and parents.',
    image: updateImage,
  },
  {
    title: 'Data Analysis',
    description:
      'Schoolcube.net provides clear reports and data analysis through the use of tables and charts.',
    image: analysisImage,
  },
  {
    title: 'Easy & Effective Management',
    description:
      'Schoolcube.net is intuitive, clear and easy to use. It provides 24/7 system stability and reliability.',
    image: managementImage,
  },
  {
    title: 'Cost Effective',
    description: 'Schoolcube packages come at almost no cost to its users.',
    image: costImage,
  },
  {
    title: 'Security',
    description:
      'All data on Schoolcube.net is protected by high-profile security.',
    image: securityImage,
  },
  {
    title: 'Data Backup',
    description:
      'Data is backed up automatically on a daily, weekly and monthly basis.',
    image: backupImage,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function KeyBenefits({ variant = 'large' }) {
  const shouldReduceMotion = useReducedMotion();
  const isCompact = variant === 'compact';

  return (
    <section
      className={
        isCompact
          ? 'bg-white px-0 pb-[72px] pt-[44px] md:pb-[102px] md:pt-[96px]'
          : 'bg-white px-6 py-16 md:px-8 md:pb-[96px] md:pt-[18px]'
      }
    >
      <div
        className={
          isCompact
            ? 'mx-auto max-w-[327px] md:max-w-[756px]'
            : 'mx-auto max-w-[1240px]'
        }
      >
        <div className={isCompact ? 'max-w-[520px]' : 'max-w-[900px]'}>
          <h2
            className={
              isCompact
                ? 'text-[18px] font-bold leading-[1.3] text-[#203684] md:text-[20px]'
                : 'text-[40px] font-bold leading-[1.12] text-[#203684] md:text-[56px] md:leading-[1.16]'
            }
          >
            Key Benefits
          </h2>
          <p
            className={
              isCompact
                ? 'mt-3 text-[12px] font-medium leading-[1.55] text-[#475467] md:max-w-[519px] md:text-[12px]'
                : 'mt-8 text-[18px] font-medium leading-[1.45] text-[#344054] md:max-w-[884px] md:text-[24px] md:leading-[1.38]'
            }
          >
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        <div
          className={
            isCompact
              ? 'mt-9 grid grid-cols-1 gap-[24px] md:mt-[44px] md:grid-cols-2 md:gap-x-[52px] md:gap-y-[24px]'
              : 'mt-16 grid grid-cols-1 gap-10 md:mt-[100px] md:grid-cols-2 md:gap-x-[66px] md:gap-y-[94px] md:px-[22px]'
          }
        >
          {benefits.map((benefit, index) => (
            <motion.article
              className={
                isCompact
                  ? 'flex h-[396px] flex-col rounded-[22px] bg-[#F6F6F6] px-7 py-[29px]'
                  : 'flex min-h-[430px] flex-col rounded-[24px] bg-[#F6F6F6] px-7 pb-7 pt-8 md:min-h-[500px] md:px-9 md:pb-9 md:pt-9'
              }
              custom={index}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.24 }}
              variants={cardVariants}
              key={benefit.title}
            >
              <div>
                <h3
                  className={
                    isCompact
                      ? 'text-[20px] font-semibold leading-[1.3] text-black/80'
                      : 'text-[24px] font-bold leading-[1.22] text-[#333333] md:text-[28px]'
                  }
                >
                  {benefit.title}
                </h3>
                <p
                  className={
                    isCompact
                      ? 'mt-[9px] text-[16px] font-normal leading-[1.7] text-[#666666]'
                      : 'mt-5 text-[18px] leading-[1.45] text-[#707070] md:text-[22px] md:leading-[1.45]'
                  }
                >
                  {benefit.description}
                </p>
              </div>

              <div
                className={
                  isCompact
                    ? 'mt-auto flex min-h-0 flex-1 items-center justify-center rounded-[11px] bg-white p-3'
                    : 'mt-auto flex h-[205px] w-full items-center justify-center rounded-[12px] bg-white p-4 md:h-[240px] md:p-5'
                }
              >
                <img
                  src={benefit.image}
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

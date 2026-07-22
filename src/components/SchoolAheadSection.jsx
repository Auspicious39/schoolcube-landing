import { VscThumbsupFilled } from "react-icons/vsc";
import { PiCrosshairThin } from "react-icons/pi";
import { LuLockKeyhole } from "react-icons/lu";

const SchoolAheadSection = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-10 md:h-[415px] md:gap-0">
        <div className="flex max-w-[327px] flex-row items-start gap-6 md:h-[104px] md:max-w-none md:items-start md:justify-between">
          <h2 className="max-w-[151.5px] text-[18px] font-bold leading-[130%] text-[#203684] md:max-w-[438px] md:text-[40px]">
            Put Your School Ahead
            <br className="hidden md:block" />
            of Others
          </h2>

          <p className="max-w-[151.5px] text-[14px] font-medium leading-[155%] text-[#475467] md:max-w-[438px] md:text-[18px]">
            Increase the efficiency of your school by eliminating manual
            management tasks, which are prone to errors.
          </p>
        </div>

        <div className="grid max-w-[327px] grid-cols-1 gap-[30px] md:max-w-none md:grid-cols-3 md:gap-[31px]">
          <article className="flex h-[230px] flex-col gap-6 rounded-[20px] bg-[#F6FBFF] pt-[31px] pr-[20px] pb-[20px] pl-[31px] md:h-[259px]">
            <VscThumbsupFilled
              size={40}
              className="text-[#10C997]"
              fill="#10C997"
            />
            <h3 className="max-w-[296px] text-[20px] font-bold leading-[140%] text-[#282828]">
              Tailored to Meet your School's Needs
            </h3>
            <p className="max-w-[311px] text-[14px] font-medium leading-[155%] text-[#475467]">
              The structure and feature of the Schoolcube portal allows schools
              to customize the functions to suit their individual needs.
            </p>
          </article>

          <article className="flex h-[230px] flex-col gap-6 rounded-[20px] bg-[#F6FBFF] pt-[31px] pr-[20px] pb-[20px] pl-[31px] md:h-[259px]">
            <PiCrosshairThin
              size={40}
              className="text-[#FFBD59]"
              fill="#FFC16A"
            />
            <h3 className="max-w-[296px] text-[20px] font-bold leading-[140%] text-[#282828]">
              Easy Access and Navigation
            </h3>
            <p className="max-w-[311px] text-[14px] font-medium leading-[155%] text-[#475467]">
              We have built a customer-friendly and simple to navigate platform
              for you.
            </p>
          </article>

          <article className="flex h-[230px] flex-col gap-6 rounded-[20px] bg-[#F6FBFF] pt-[31px] pr-[20px] pb-[20px] pl-[31px] md:h-[259px]">
            <LuLockKeyhole
              size={40}
              className="text-[#2F95FF]"
              fill="#339BFE"
            />
            <h3 className="max-w-[296px] text-[20px] font-bold leading-[140%] text-[#282828]">
              Your School Data is Safe
            </h3>
            <p className="max-w-[311px] text-[14px] font-medium leading-[155%] text-[#475467]">
              We've built a high profile security perimeter around every
              school's account to ensure that only administrators have access.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SchoolAheadSection;

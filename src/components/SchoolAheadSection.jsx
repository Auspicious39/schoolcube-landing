import { VscThumbsupFilled } from "react-icons/vsc";
import { PiCrosshairThin } from "react-icons/pi";
import { LuLockKeyhole } from "react-icons/lu";

const SchoolAheadSection = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto flex w-[327px] min-h-[964px] flex-col justify-between gap-[40px] md:h-[415px] md:min-h-0 md:w-full md:max-w-[1200px] md:gap-0">
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
          <article className="flex w-[326px] h-[230px] flex-col gap-[24px] rounded-[20px] bg-[#F6FBFF] pt-[12px] pr-[20px] pb-[12px] pl-[31px] md:w-full md:h-[259px] md:pt-[31px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] shrink-0"
            >
              <rect x="2" y="7" width="4" height="15" rx="2" fill="#0ACC94" />
              <path
                d="M8.5 22H16.28C17.76 22 19.04 20.92 19.27 19.46L20.81 9.72C21.09 7.91 19.69 6.28 17.85 6.28H13.67L14.73 3.65C15.11 2.7 14.41 1.66 13.39 1.66C12.83 1.66 12.3 1.91 11.95 2.34L8.5 6.66V22Z"
                fill="#0ACC94"
              />
            </svg>

            <h3 className="w-[275px] h-[44px] text-[16px] font-bold leading-[139%] tracking-[0px] text-[#282828] md:w-auto md:h-auto md:max-w-[296px] md:text-[20px] md:leading-[140%] font-['Plus_Jakarta_Sans',sans-serif]">
              Tailored to Meet your School's Needs
            </h3>

            <p className="w-[275px] h-[88px] text-[14px] font-medium leading-[155%] tracking-[0px] text-[#475467] md:w-auto md:h-auto md:max-w-[311px] font-['Plus_Jakarta_Sans',sans-serif]">
              The structure and feature of the Schoolcube portal allows schools
              to customize the functions to suit their individual needs.
            </p>
          </article>

          <article className="flex h-[230px] flex-col gap-6 rounded-[20px] bg-[#F6FBFF] pt-[31px] pr-[20px] pb-[20px] pl-[31px] md:h-[259px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"
                fill="#FFC16A"
              />
              <rect
                x="10.5"
                y="1"
                width="3"
                height="4"
                rx="1.5"
                fill="#FFC16A"
              />
              <rect
                x="10.5"
                y="19"
                width="3"
                height="4"
                rx="1.5"
                fill="#FFC16A"
              />
              <rect
                x="1"
                y="10.5"
                width="4"
                height="3"
                rx="1.5"
                fill="#FFC16A"
              />
              <rect
                x="19"
                y="10.5"
                width="4"
                height="3"
                rx="1.5"
                fill="#FFC16A"
              />
            </svg>

            <h3 className="max-w-[296px] text-[16px] md:text-[20px] font-bold leading-[140%] text-[#282828]">
              Easy Access and Navigation
            </h3>

            <p className="max-w-[311px] text-[14px] font-medium leading-[155%] text-[#475467]">
              We have built a customer-friendly and simple to navigate platform
              for you.
            </p>
          </article>

          <article className="flex h-[230px] flex-col gap-6 rounded-[20px] bg-[#F6FBFF] pt-[31px] pr-[20px] pb-[20px] pl-[31px] md:h-[259px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] shrink-0"
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

            <h3 className="max-w-[296px] text-[16px] md:text-[20px] font-bold leading-[140%] text-[#282828]">
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

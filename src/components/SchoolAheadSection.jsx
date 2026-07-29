import { VscThumbsupFilled } from "react-icons/vsc";
import { PiCrosshairThin } from "react-icons/pi";
import { LuLockKeyhole } from "react-icons/lu";

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

  return (
    <section className="bg-white px-4 sm:px-6 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-row items-start justify-between gap-3 sm:gap-5 md:gap-8 mb-8 md:mb-12">
          <h2 className="flex-1 min-w-0 text-lg sm:text-xl md:text-4xl font-bold leading-[130%] text-[#203684] md:max-w-[438px]">
            Put Your School Ahead
            <br className="hidden md:block" />
            of Others
          </h2>

          <p className="flex-1 min-w-0 text-xs sm:text-sm md:text-lg font-medium leading-[150%] text-[#475467] md:max-w-[438px]">
            Increase the efficiency of your school by eliminating manual
            management tasks, which are prone to errors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <article
              key={i}
              className="flex flex-col gap-6 rounded-2xl bg-[#F6FBFF] p-6 md:p-8"
            >
              {feature.icon}

              <h3 className="text-base md:text-xl font-bold leading-[140%] text-[#282828]">
                {feature.title}
              </h3>

              <p className="text-sm font-medium leading-[155%] text-[#475467]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolAheadSection;

import { BadgeCheck } from "lucide-react";
import { TbShieldCheckeredFilled } from "react-icons/tb";

const TrustBadges = () => {
  const badges = [
    { icon: BadgeCheck, label: "Trusted by leading schools" },
    { icon: BadgeCheck, label: "All in one platform" },
    { icon: TbShieldCheckeredFilled, label: "Secure & Compliant" },
  ];

  return (
    <section className="mt-6 px-4 md:mt-9 md:px-0">
      <style>{`
        @keyframes verticalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: verticalScroll 10s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .group:hover .animate-bounce-once,
        .group:active .animate-bounce-once {
          animation: bounceOnce 0.9s 1;
        }
      `}</style>

      <div className="relative h-28 overflow-hidden md:hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-white to-transparent" />

        <div className="animate-vertical-scroll flex flex-col items-center gap-3">
          {[...badges, ...badges].map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="group flex h-12 w-fit cursor-default items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f1f1f1] px-6 shadow-md transition-all duration-300"
            >
              <Icon
                size={24}
                fill="#203684"
                color="white"
                className="animate-bounce-once transition-transform duration-300"
              />
              <span className="text-xs font-medium text-[#282828] transition-all duration-300 group-hover:font-bold">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1200px] flex-col items-start gap-3 md:flex md:flex-row md:flex-nowrap md:justify-between md:gap-0">
        {badges.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="group flex h-12 w-fit cursor-default items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f1f1f1] px-6 shadow-none md:w-[357px] md:gap-3 md:px-5"
          >
            <Icon
              size={24}
              fill="#203684"
              color="white"
              className="animate-bounce-once transition-transform duration-300"
            />
            <span className="text-xs font-medium text-[#282828] transition-all duration-300 group-hover:font-bold group-active:font-bold md:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;

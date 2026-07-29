import { BadgeCheck } from "lucide-react";
import { TbShieldCheckeredFilled } from "react-icons/tb";

const TrustBadges = () => {
  const badges = [
    { icon: BadgeCheck, label: "Trusted by leading schools" },
    { icon: BadgeCheck, label: "All in one platform" },
    { icon: TbShieldCheckeredFilled, label: "Secure & Compliant" },
  ];

  return (
    <section className="mt-6 md:mt-10 px-4 md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 md:flex-row md:flex-wrap md:justify-start md:gap-5 xl:flex-nowrap">
        {badges.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex h-12 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f1f1f1] px-6 md:w-[348px] md:gap-3 md:px-5"
          >
            <Icon size={20} fill="#203684" color="white" />
            <span className="text-xs font-medium text-[#282828] md:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;

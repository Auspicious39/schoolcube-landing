import { BadgeCheck, ShieldCheck } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-4 md:mt-7 md:grid md:grid-cols-3 md:gap-5">
      
      <div className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-4 md:h-[42px] md:gap-3 md:px-5">
        <BadgeCheck
          size={14}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
        <BadgeCheck
          size={18}
          fill="#203684"
          color="white"
          className="hidden md:block"
        />

        <span className="text-[12px] font-medium text-[#242424] md:text-[12px]">
          Trusted by leading schools
        </span>
      </div>

      <div className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-4 md:h-[42px] md:gap-3 md:px-5">
        <ShieldCheck
          size={14}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
        <ShieldCheck
          size={18}
          fill="#203684"
          color="white"
          className="hidden md:block"
        />

        <span className="text-[12px] font-medium text-[#242424] md:text-[12px]">
          Secure &amp; Compliant
        </span>
      </div>

      <div className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-4 md:h-[42px] md:gap-3 md:px-5">
        <BadgeCheck
          size={14}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
        <BadgeCheck
          size={18}
          fill="#203684"
          color="white"
          className="hidden md:block"
        />

        <span className="text-[12px] font-medium text-[#242424] md:text-[12px]">
          All in one platform
        </span>
      </div>

    </section>
  );
};

export default TrustBadges;
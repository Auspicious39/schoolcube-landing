import { BadgeCheck, } from "lucide-react";
import { TbShieldCheckeredFilled } from "react-icons/tb";

const TrustBadges = () => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-4 md:mt-7 md:grid-cols-3 md:gap-5">

      <div className="flex h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-6 md:gap-3 md:px-5">
        <BadgeCheck
          size={24}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
          <BadgeCheck
            size={24}
            fill="#203684"
            color="white"
            className="hidden md:block"
          />

          <span className="text-[10px] font-medium text-[#282828] md:text-[14px]">
            Trusted by leading schools
          </span>
      </div>


      <div className="flex h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-6 md:gap-3 md:px-5">
        <BadgeCheck
          size={24}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
        <BadgeCheck
          size={24}
          fill="#203684"
          color="white"
          className="hidden md:block"
        />

        <span className="text-[10px] font-medium text-[#282828] md:text-[14px]">
          All in one platform
        </span>
      </div>

      <div className="flex h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#f1f1f1] px-6 md:gap-3 md:px-5">
        <TbShieldCheckeredFilled
          size={24}
          fill="#203684"
          color="white"
          className="md:hidden"
        />
        <TbShieldCheckeredFilled
          size={16}
          fill="#203684"
          color="white"
          className="hidden md:block"
        />

        <span className="text-[10px] font-medium text-[#282828] md:text-[14px]">
          Secure &amp; Compliant
        </span>
      </div>

    </section>
  );
};

export default TrustBadges;
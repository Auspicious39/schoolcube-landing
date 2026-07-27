// components/TrustBadges.jsx
import { BadgeCheck, ShieldCheck } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="mt-3 flex flex-wrap justify-center gap-2 md:mt-7 md:grid md:gap-5 md:grid-cols-3">
      <div className="flex h-5 items-center justify-center gap-1.5 rounded-full bg-[#f1f1f1] px-2 md:h-[42px] md:gap-3 md:px-5">
        <BadgeCheck size={10} className="md:hidden" fill="#203684" color="white" /><BadgeCheck size={18} className="hidden md:block" fill="#203684" color="white" />
        <span className="text-[6px] font-medium text-[#242424] md:text-[12px]">
          Trusted by leading schools
        </span>
      </div>

      <div className="flex h-5 items-center justify-center gap-1.5 rounded-full bg-[#f1f1f1] px-2 md:h-[42px] md:gap-3 md:px-5">
        <BadgeCheck size={10} className="md:hidden" fill="#203684" color="white" /><BadgeCheck size={18} className="hidden md:block" fill="#203684" color="white" />
        <span className="text-[6px] font-medium text-[#242424] md:text-[12px]">
          All in one platform
        </span>
      </div>

      <div className="flex h-5 items-center justify-center gap-1.5 rounded-full bg-[#f1f1f1] px-2 md:h-[42px] md:gap-3 md:px-5">
        <ShieldCheck size={10} className="md:hidden" fill="#203684" color="white" /><ShieldCheck size={18} className="hidden md:block" fill="#203684" color="white" />
        <span className="text-[6px] font-medium text-[#242424] md:text-[12px]">
          Secure &amp; Compliant
        </span>
      </div>
    </section>
  );
};

export default TrustBadges;

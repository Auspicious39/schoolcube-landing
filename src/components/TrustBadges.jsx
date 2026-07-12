// components/TrustBadges.jsx
import { BadgeCheck, ShieldCheck } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="mt-7 grid gap-5 md:grid-cols-3">
      <div className="flex h-[42px] items-center justify-center gap-3 rounded-full bg-[#f1f1f1] px-5">
        <BadgeCheck size={18} fill="#203684" color="white" />
        <span className="text-[12px] font-medium text-[#242424]">
          Trusted by leading schools
        </span>
      </div>

      <div className="flex h-[42px] items-center justify-center gap-3 rounded-full bg-[#f1f1f1] px-5">
        <BadgeCheck size={18} fill="#203684" color="white" />
        <span className="text-[12px] font-medium text-[#242424]">
          All in one platform
        </span>
      </div>

      <div className="flex h-[42px] items-center justify-center gap-3 rounded-full bg-[#f1f1f1] px-5">
        <ShieldCheck size={18} fill="#203684" color="white" />
        <span className="text-[12px] font-medium text-[#242424]">
          Secure &amp; Compliant
        </span>
      </div>
    </section>
  );
};

export default TrustBadges;
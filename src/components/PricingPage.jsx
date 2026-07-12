import { Check, X } from "lucide-react";

const features = [
  "Online Student Environment", "Subscription per student per term", "Minimum No of Students", "Zero Signup fee", "Limited Support (virtual only)", "Admin Dashboard", "Student report card generation", "Communication (email only)", "Schoolfees collection and settlement", "Export data to PDF", "Communication (email and newsletter)", "Student medical report", "Parent’s Portal", "Online Learning Management System (LMS)", "Extensive report generation", "Robust communication", "Student Enrollment", "Dedicated Support (physical & virtual)", "Expense Tracker", "Android & iOS mobile app", "Free website design (minimum of 500 students)",
];

const plans = [
  { name: "Schoolcube Basic", price: "₦1000", included: 13 },
  { name: "Schoolcube Bolt", price: "₦1500", included: 14 },
  { name: "Schoolcube Pro", price: "₦2500", included: 17 },
  { name: "Schoolcube Enterprise", price: "₦5000", included: features.length },
];

export default function PricingPage() {
  return (
    <main className="bg-white px-6 pb-[105px] pt-[46px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[846px] text-center">
          <h1 className="text-[42px] font-bold leading-[1.39] tracking-[0.4px] text-[#203684] md:text-[56px]">Pricing that Suits You</h1>
          <p className="mt-[19px] text-[16px] leading-[1.7] tracking-[0.3px] text-[#47505b] md:text-[20px]">Our subscriptions come with flexible and convenient packages for various school needs. Subscribe to either Schoolbolt or SchoolPro plan to experience our amazing service.</p>
        </div>
        <div className="mt-[128px] overflow-x-auto pb-3">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-[minmax(260px,1fr)_repeat(4,167px)] gap-x-5">
              <div />
              {plans.map((plan) => <article key={plan.name} className="min-h-[172px] rounded-t-[20px] border border-[#dae4f2] bg-white px-4 pt-[35px]"><p className="text-[14px] font-medium text-[#203684]">{plan.name}</p><p className="mt-1 text-[24px] font-bold text-[#203684]">{plan.price}</p><p className="mt-1 text-[11px] text-[#47505b]">Per student per term</p><button className="mt-3 h-[27px] w-full rounded-[4px] bg-[#339bfe] px-3 text-[13px] text-white transition hover:bg-[#203684]">Get Started</button></article>)}
            </div>
            <div className="grid grid-cols-[minmax(260px,1fr)_repeat(4,167px)] gap-x-5">
              {features.map((feature, index) => <div key={feature} className="contents"><div className={`flex min-h-[36px] items-center px-[5px] py-2 text-[12px] leading-[1.4] tracking-[0.1px] text-[#47505b] ${index % 2 === 0 ? "bg-[#f0f8ff]" : "bg-white"}`}>{feature}</div>{plans.map((plan) => <div key={`${plan.name}-${feature}`} className={`flex min-h-[36px] items-center justify-center border-x border-[#dae4f2] ${index === features.length - 1 ? "border-b rounded-b-[20px]" : ""} ${index % 2 === 0 ? "bg-[#f0f8ff]" : "bg-white"}`}>{index < plan.included ? <Check size={19} strokeWidth={2.4} className="text-[#47505b]" /> : <X size={19} strokeWidth={2} className="text-[#c7d7e9]" />}</div>)}</div>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

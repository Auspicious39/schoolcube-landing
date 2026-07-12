import { Check, X } from "lucide-react";

const features = [
  "Online Student Environment",
  "Subscription per student per term",
  "Minimum No of Students",
  "Zero Signup fee",
  "Limited Support (virtual only)",
  "Admin Dashboard",
  "Student report card generation",
  "Communication (email only)",
  "Schoolfees collection and settlement",
  "Export data to PDF",
  "Communication (email and newsletter)",
  "Student medical report",
  "Parent’s Portal",
  "Online Learning Management System (LMS)",
  "Extensive report generation",
  "Robust communication",
  "Student Enrollment",
  "Dedicated Support (physical & virtual)",
  "Expense Tracker",
  "Android & iOS mobile app",
  "Free website design (minimum of 500 students)",
];

const plans = [
  {
    name: "Schoolcube Starter",
    price: "₦1,000",
    subtitle: "Per student per term",
    minimum: "100 students",
    included: 12,
  },
  {
    name: "Schoolcube Bolt",
    price: "₦1500",
    subtitle: "Per student per term",
    minimum: "100 students",
    included: 15,
    featured: true,
  },
  {
    name: "Schoolcube Pro",
    price: "₦2,500",
    subtitle: "Per student per term",
    minimum: "100 students",
    included: features.length,
  },
  {
    name: "Schoolcube Enterprise",
    price: "₦5,000",
    subtitle: "Per student per term",
    minimum: "100 students",
    included: features.length,
  },
];

const PricingPage = () => (
  <main className="bg-white px-6 pb-[105px] pt-[46px]">
    <section className="mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-[846px] text-center">
        <h1 className="text-[42px] font-bold leading-[1.39] tracking-[0.4px] text-[#203684] md:text-[56px]">
          Pricing that Suits You
        </h1>
        <p className="mt-[19px] text-[16px] leading-[1.7] tracking-[0.3px] text-[#47505b] md:text-[20px]">
          Our subscriptions come with flexible and convenient packages for various school needs. Subscribe to either Schoolbolt or SchoolPro plan to experience our amazing service.
        </p>
      </div>

      <div className="mt-[90px] overflow-x-auto pb-3">
        <div className="min-w-[940px]">
          <div className="grid grid-cols-[minmax(300px,1fr)_205px_205px_205px] gap-[21px]">
            <div />
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`min-h-[190px] rounded-t-[20px] border border-[#dae4f2] px-[19px] pt-[39px] ${plan.featured ? "border-[#339bfe] bg-[#fbfdff]" : "bg-white"}`}
              >
                <p className="text-[14px] font-medium text-[#203684]">{plan.name}</p>
                <p className="mt-2 text-[24px] font-bold text-[#203684]">{plan.price}</p>
                <p className="mt-2 text-[12px] text-[#47505b]">{plan.subtitle}</p>
                <button className="mt-4 h-8 w-full rounded-[5px] bg-[#339bfe] px-3 text-[14px] text-white transition hover:bg-[#203684]">
                  Get Started
                </button>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-[minmax(300px,1fr)_205px_205px_205px] gap-[21px]">
            {features.map((feature, index) => (
              <div key={feature} className="contents">
                <div className={`flex min-h-[49px] items-center px-[5px] py-3 text-[14px] leading-[1.4] tracking-[0.14px] text-[#47505b] ${index % 2 === 0 ? "bg-[#f0f8ff]" : "bg-white"}`}>
                  {feature}
                </div>
                {plans.map((plan) => {
                  const available = index < plan.included;
                  const value = feature === "Minimum No of Students" ? plan.minimum : null;
                  return (
                    <div key={`${plan.name}-${feature}`} className={`flex min-h-[49px] items-center justify-center border-x border-[#dae4f2] ${index % 2 === 0 ? "bg-[#f0f8ff]" : "bg-white"}`}>
                      {value ? <span className="text-[12px] text-[#47505b]">{value}</span> : available ? <Check size={22} strokeWidth={2.4} className="text-[#339bfe]" /> : <X size={20} strokeWidth={2} className="text-[#9fa9b6]" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default PricingPage;

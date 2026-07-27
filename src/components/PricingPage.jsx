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
          <h1 className="text-[18px] font-bold leading-[1.3] tracking-[0.4px] text-[#203684] md:text-[56px]">
            Pricing that Suits You
          </h1>
          <p className="mt-[19px] text-[18px] leading-[1.7] tracking-[0.3px] text-[#475467] md:text-[20px]">
            Our subscriptions come with flexible and convenient packages for
            various school needs. Subscribe to either Schoolbolt or SchoolPro
            plan to experience our amazing service.
          </p>
        </div>
        <div className="mt-[128px] overflow-x-auto">
          <div className="min-w-[1180px]">
            <div className="grid grid-cols-[300px_repeat(4,220px)]">
              <div />

              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-t-[14px] border  border-[#D8E5F3] bg-white px-6 pt-6 pb-5"
                >
                  <p className="text-[12px] font-medium text-[#203684]">
                    {plan.name}
                  </p>

                  <h3 className="mt-1 text-[30px] font-bold text-[#203684]">
                    {plan.price}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#667085]">
                    Per student per term
                  </p>

                  <button className="mt-5 h-[34px] w-full rounded bg-[#339BFE] text-[12px] text-white transition hover:bg-[#203684]">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
            <div className="w-[1180px] overflow-hidden rounded-b-[14px] border border-t-0 border-[#D8E5F3]">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`grid grid-cols-[300px_repeat(4,220px)] ${
                    index % 2 === 0 ? "bg-[#F3F9FF]" : "bg-white"
                  }`}
                >
                  <div className="flex h-[40px] items-center px-5 text-[12px] text-[#475467]">
                    {feature}
                  </div>

                  {plans.map((plan) => (
                    <div
                      key={plan.name + feature}
                      className="flex h-[40px] items-center justify-center border-l border-[#D8E5F3]" 
                        
                      
                    >
                      {index < plan.included ? (
                        <Check
                          size={17}
                          strokeWidth={2.5}
                          className="text-[#475467]"
                        />
                      ) : (
                        <X
                          size={17}
                          strokeWidth={2}
                          className="text-[#C9D5E5]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Schoolcube Starter",
    price: "₦1,000",
    included: 12,
  },
  {
    name: "Schoolcube Bolt",
    price: "₦1,500",
    included: 15,
    featured: true,
  },
  {
    name: "Schoolcube Pro",
    price: "₦2,500",
    included: 20,
  },
  {
    name: "Schoolcube Enterprise",
    price: "₦5,000",
    included: 21,
  },
];

const features = [
  "Online Student Environment",
  "Subscription per student per term",
  // { label: "Minimum No of Students", value: "100 students" },
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

const featureLabel = (feature) =>
  typeof feature === "string" ? feature : feature.label;

const PricingPage = () => (
  <main className="overflow-hidden bg-white px-5 pb-24 pt-12 sm:px-6 lg:pb-[105px] lg:pt-[46px]">
    <section className="mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-[850px] text-center">
        <span className="inline-flex rounded-full bg-[#edf7ff] px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#218ff1]">
          SIMPLE, TRANSPARENT PRICING
        </span>
        <h1 className="mt-5 text-[38px] font-bold leading-[1.18] tracking-[-1.4px] text-[#203684] sm:text-[48px] lg:text-[56px]">
          Pricing that Suits You
        </h1>
        <p className="mx-auto mt-5 max-w-[790px] text-[15px] leading-[1.75] text-[#596273] sm:text-[17px] lg:text-[18px]">
          Our subscriptions come with flexible and convenient packages for
          various school needs. Subscribe to either Schoolbolt or SchoolPro plan
          to experience our amazing service.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto pb-4 pt-5 lg:mt-[72px]">
        <div className="min-w-[1080px]">
          <div className="grid grid-cols-[minmax(280px,1.45fr)_repeat(4,minmax(175px,1fr))] items-end gap-x-3">
            <div className="pb-5 pl-5 text-sm font-semibold text-[#203684]">
              Compare plans
            </div>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative min-h-[230px] rounded-t-[18px] border px-5 pb-5 pt-8 ${plan.featured ? "border-[#2d9cf7] bg-[#f6fbff] shadow-[0_-8px_24px_rgba(36,154,247,0.12)]" : "border-[#dce6f2] bg-white"}`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2499f4] px-4 py-1.5 text-[10px] font-bold tracking-[0.08em] text-white">
                    MOST POPULAR
                  </span>
                )}
                <p className="min-h-10 text-[14px] font-semibold leading-5 text-[#203684]">
                  {plan.name}
                </p>
                <p className="mt-4 text-[27px] font-bold tracking-[-0.8px] text-[#203684]">
                  {plan.price}
                </p>
                <p className="mt-1.5 text-[11px] text-[#697487]">
                  Per student per term
                </p>
                <button
                  className={`mt-5 h-10 w-full rounded-md px-3 text-[13px] font-semibold transition ${plan.featured ? "bg-[#2499f4] text-white hover:bg-[#203684]" : "border border-[#2499f4] text-[#2499f4] hover:bg-[#2499f4] hover:text-white"}`}
                >
                  Get Started
                </button>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-b-[18px] border border-t-0 border-[#dce6f2]">
            {features.map((feature, index) => {
              const striped = index % 2 === 0;
              const label = featureLabel(feature);
              return (
                <div
                  key={label}
                  className={`grid grid-cols-[minmax(280px,1.45fr)_repeat(4,minmax(175px,1fr))] gap-x-3 ${striped ? "bg-[#eef8ff]" : "bg-white"}`}
                >
                  <div className="flex min-h-[56px] items-center px-5 py-3 text-[13px] font-medium leading-5 text-[#4f5b6d]">
                    {label}
                  </div>
                  {plans.map((plan) => {
                    const available = index < plan.included;
                    return (
                      <div
                        key={plan.name}
                        className={`flex min-h-[56px] items-center justify-center border-l border-[#dce6f2] ${plan.featured && striped ? "bg-[#e7f5ff]" : ""}`}
                      >
                        {typeof feature === "object" ? (
                          <span className="text-xs font-medium text-[#4f5b6d]">
                            {feature.value}
                          </span>
                        ) : available ? (
                          <Check
                            aria-label="Included"
                            size={20}
                            strokeWidth={2.8}
                            className="text-[#2499f4]"
                          />
                        ) : (
                          <X
                            aria-label="Not included"
                            size={18}
                            strokeWidth={2}
                            className="text-[#aeb8c5]"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-2 text-center text-xs leading-5 text-[#7b8594] lg:hidden">
        Swipe sideways to compare all plans
      </p>
    </section>
  </main>
);

export default PricingPage;

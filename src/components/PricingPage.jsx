import { Check, X } from "lucide-react";
import featureHeadingIcon from "../assets/pricing-feature-heading.svg";
import featureCheckIcon from "../assets/pricing-feature-check.svg";

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
  { name: "Schoolcube Basic", price: "₦1000", included: 13, featureListHeight: 704 },
  { name: "Schoolcube Bolt", price: "₦1500", included: 14, featureListHeight: 712 },
  { name: "Schoolcube Pro", price: "₦2500", included: 17, featureListHeight: 832 },
  {
    name: "Schoolcube Enterprise",
    price: "₦5000",
    included: features.length,
    featureListHeight: 1008,
  },
];

const planDescription =
  "Uncover insights fast in video calls, support tickets, docs, and more.";

export default function PricingPage() {
  return (
    <main className="bg-white px-6 pb-[127px] pt-[123px] md:px-6 md:pb-[39px] md:pt-[88px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[846px] pb-[17px] text-center lg:pb-0">
          <h1 className="text-[18px] font-bold leading-[1.3] text-[#203684] md:text-[40px] lg:text-[56px] lg:leading-[1.39] lg:tracking-[0.4px]">
            Pricing that Suits You
          </h1>
          <p className="mx-auto mt-3 max-w-[302px] text-[14px] font-medium leading-[1.55] text-[#475467] md:max-w-[680px] md:text-[18px] lg:mt-[19px] lg:max-w-[846px] lg:text-[20px] lg:leading-[1.7] lg:tracking-[0.3px] lg:text-[#47505b]">
            Our subscriptions come with flexible and convenient packages for
            various school needs. Subscribe to either Schoolbolt or SchoolPro
            plan to experience our amazing service.
          </p>
        </div>

        <div className="mt-[42px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="overflow-hidden rounded-[8px] border border-[#eaebf0] bg-white p-5"
            >
              <div className="flex flex-col gap-[14px]">
                <h2 className="text-[18px] font-bold leading-normal text-[#203684]">
                  {plan.name}
                </h2>
                <p className="text-[14px] font-medium leading-6 text-[#5d5262]">
                  {planDescription}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[24px] font-bold leading-normal text-[#203684]">
                    {plan.price}
                  </p>
                  <p className="text-xs leading-normal text-[#47505b]">
                    Per student per term
                  </p>
                </div>
                <button className="w-full rounded-[5px] bg-[#339bfe] px-[37px] py-3 text-[14px] font-medium leading-[1.2] text-white transition hover:bg-[#203684]">
                  Get Started
                </button>
              </div>
              <ul
                className="flex flex-col gap-4 pb-6 pt-8"
                style={{ height: plan.featureListHeight }}
              >
                <li className="flex items-center gap-2 text-base font-bold leading-6 text-[#475467]">
                  <img src={featureHeadingIcon} alt="" className="h-6 w-6 shrink-0" />
                  Features
                </li>
                {features.slice(0, plan.included).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[14px] leading-[1.4] tracking-[0.14px] text-[#47505b]"
                  >
                    <img src={featureCheckIcon} alt="" className="h-6 w-6 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-[154px] hidden grid-cols-4 gap-6 lg:grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-[346px] flex-col rounded-[8px] border border-[#eaebf0] bg-[#fefeff] p-6"
            >
              <div className="flex flex-1 flex-col gap-[14px] py-8">
                <h2 className="text-[20px] font-bold leading-6 text-[#203684]">
                  {plan.name}
                </h2>
                <p className="text-[16px] font-medium leading-6 text-[#47505b]">
                  {planDescription}
                </p>
                <p className="mt-auto text-[48px] font-extrabold leading-none text-[#203684]">
                  {plan.price}
                </p>
              </div>
              <button className="h-8 w-full rounded-[5px] bg-[#339bfe] px-5 text-[14px] font-normal text-white transition hover:bg-[#203684]">
                Get Started
              </button>
            </article>
          ))}
        </div>

        <div className="mt-[64px] hidden overflow-x-auto pb-2 lg:block">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-[216px_repeat(4,216px)] gap-[30px] pb-8">
              <div />
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-[20px] border border-[#dae4f2] bg-white p-6"
                >
                  <p className="text-[14px] font-medium leading-normal text-[#203684]">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-[24px] font-bold leading-normal text-[#203684]">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[12px] leading-normal text-[#47505b]">
                    Per student per term
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[216px_repeat(4,216px)] gap-x-[30px]">
              {features.map((feature, rowIndex) => (
                <div key={feature} className="contents">
                  <div className="flex min-h-16 items-center text-[12px] leading-[1.3] text-[#47505b]">
                    {feature}
                  </div>
                  {plans.map((plan) => {
                    const included = rowIndex < plan.included;
                    return (
                      <div
                        key={plan.name}
                        className="flex min-h-16 items-center justify-center"
                      >
                        {included ? (
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="text-[#47505b]"
                            aria-label="Included"
                          />
                        ) : (
                          <X
                            size={16}
                            strokeWidth={2}
                            className="text-[#dae4f2]"
                            aria-label="Not included"
                          />
                        )}
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
}

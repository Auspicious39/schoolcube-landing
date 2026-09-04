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
  "Communication (email only)",
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
  { name: "Schoolcube Basic", price: "₦1000", included: 14 },
  { name: "Schoolcube Bolt", price: "₦1500", included: 15 },
  { name: "Schoolcube Pro", price: "₦2500", included: 18 },
  {
    name: "Schoolcube Enterprise",
    price: "₦5000",
    included: features.length,
  },
];

const planDescription =
  "Uncover insights fast in video calls, support tickets, docs, and more.";

export default function PricingPage() {
  return (
    <main className="bg-white px-6 pb-[7.9375rem] pt-[2.5rem] md:px-6 md:pb-[6.25rem] md:pt-[6.25rem]">
      <section className="mx-auto max-w-[75rem]">
        <div className="mx-auto max-w-[52.875rem] pb-[1.0625rem] text-center lg:pb-0">
          <h1 className="text-[1.125rem] font-bold leading-[1.3] text-[#203684] md:text-[2.5rem] lg:text-[3.5rem] lg:leading-[1.39] lg:tracking-[0.025rem]">
            Pricing that Suits You
          </h1>
          <p className="mx-auto mt-3 max-w-[18.875rem] text-[0.875rem] font-medium leading-[1.55] text-[#475467] md:max-w-[42.5rem] md:text-[1.125rem] lg:mt-[1.1875rem] lg:max-w-[52.875rem] lg:text-[1.25rem] lg:leading-[1.7] lg:tracking-[0.01875rem] lg:text-[#47505b]">
            Our subscriptions come with flexible and convenient packages for
            various school needs. Subscribe to either Schoolbolt or SchoolPro
            plan to experience our amazing service.
          </p>
        </div>

        <div className="mt-[2.625rem] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="overflow-hidden rounded-[0.5rem] border border-[#eaebf0] bg-white p-5"
            >
              <div className="flex flex-col gap-[0.875rem]">
                <h2 className="text-[1.125rem] font-bold leading-normal text-[#203684]">
                  {plan.name}
                </h2>
                <p className="text-[0.875rem] font-medium leading-6 text-[#5d5262]">
                  {planDescription}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[1.5rem] font-bold leading-normal text-[#203684]">
                    {plan.price}
                  </p>
                  <p className="text-xs leading-normal text-[#47505b]">
                    Per student per term
                  </p>
                </div>
                <button className="w-full rounded-[0.3125rem] bg-[#339bfe] px-[2.3125rem] py-3 text-[0.875rem] font-medium leading-[1.2] text-white transition hover:bg-[#203684]">
                  Get Started
                </button>
              </div>
              <ul className="flex flex-col gap-4 pb-1 pt-8">
                <li className="flex items-center gap-2 text-base font-bold leading-6 text-[#475467]">
                  <img src={featureHeadingIcon} alt="" className="h-6 w-6 shrink-0" />
                  Features
                </li>
                {features.slice(0, plan.included).map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="flex items-start gap-2 text-[0.875rem] leading-[1.4] tracking-[0.00875rem] text-[#47505b]"
                  >
                    <img src={featureCheckIcon} alt="" className="h-6 w-6 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-[9.625rem] hidden grid-cols-4 gap-6 lg:grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-[21.625rem] flex-col rounded-[0.5rem] border border-[#eaebf0] bg-[#fefeff] p-6"
            >
              <div className="flex flex-1 flex-col gap-[0.875rem] py-8">
                <h2 className="text-[1.25rem] font-bold leading-6 text-[#203684]">
                  {plan.name}
                </h2>
                <p className="text-[1rem] font-medium leading-6 text-[#47505b]">
                  {planDescription}
                </p>
                <p className="mt-auto text-[3rem] font-extrabold leading-none text-[#203684]">
                  {plan.price}
                </p>
              </div>
              <button className="h-8 w-full rounded-[0.3125rem] bg-[#339bfe] px-5 text-[0.875rem] font-normal text-white transition hover:bg-[#203684]">
                Get Started
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden grid-cols-4 gap-6 lg:grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-[0.5rem] border border-[#eaebf0] bg-white p-6"
            >
              <div className="flex items-center gap-2 text-base font-bold leading-6 text-[#475467]">
                <img
                  src={featureHeadingIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                />
                Features
              </div>
              <ul className="mt-6 flex flex-col gap-4">
                {features.slice(0, plan.included).map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="flex items-start gap-2 text-[0.875rem] leading-[1.4] tracking-[0.00875rem] text-[#47505b]"
                  >
                    <img
                      src={featureCheckIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

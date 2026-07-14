import { Crosshair, LockKeyhole, ThumbsUp } from "lucide-react";

const SchoolAheadSection = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1050px]">
        {/* Header */}
        <div className="mb-8 grid grid-cols-2 gap-5 md:mb-10 md:gap-8">
          <h2 className="text-[18px] font-extrabold leading-tight text-[#203684] md:text-[30px]">
            Put Your School Ahead <br />
            of Others
          </h2>

          <p className="text-[12px] leading-6 text-[#4b5568] md:ml-auto md:max-w-[400px] md:text-[13px] md:leading-6">
            Increase the efficiency of your school by eliminating manual
            management tasks, which are prone to errors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          <article className="rounded-[12px] bg-[#f5fbff] p-5 md:rounded-[10px] md:p-7">
            <ThumbsUp
              size={22}
              className="mb-5 text-[#10c997]"
              fill="#10c997"
            />

            <h3 className="mb-3 text-[14px] font-extrabold text-[#2a2d32] md:text-[15px]">
              Tailored to Meet your School's Needs
            </h3>

            <p className="text-[12px] leading-6 text-[#435169] md:text-[12px] md:leading-5">
              The structure and feature of the Schoolcube portal allows schools
              to customize the functions to suit their individual needs.
            </p>
          </article>

          <article className="rounded-[12px] bg-[#f5fbff] p-5 md:rounded-[10px] md:p-7">
            <Crosshair
              size={22}
              className="mb-5 text-[#ffbd59]"
            />

            <h3 className="mb-3 text-[14px] font-extrabold text-[#2a2d32] md:text-[15px]">
              Easy Access and Navigation
            </h3>

            <p className="text-[12px] leading-6 text-[#435169] md:text-[12px] md:leading-5">
              We have built a customer-friendly and simple to navigate platform
              for you.
            </p>
          </article>

          <article className="rounded-[12px] bg-[#f5fbff] p-5 md:rounded-[10px] md:p-7">
            <LockKeyhole
              size={22}
              className="mb-5 text-[#2f95ff]"
            />

            <h3 className="mb-3 text-[14px] font-extrabold text-[#2a2d32] md:text-[15px]">
              Your School Data is Safe
            </h3>

            <p className="text-[12px] leading-6 text-[#435169] md:text-[12px] md:leading-5">
              We've built a high profile security perimeter around every
              school's account to ensure that only administrators have access.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SchoolAheadSection;
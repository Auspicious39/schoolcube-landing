import { Crosshair, LockKeyhole, ThumbsUp } from "lucide-react";

const SchoolAheadSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <h2 className="text-[30px] font-extrabold leading-tight text-[#203684]">
            Put Your School Ahead <br />
            of Others
          </h2>

          <p className="max-w-[400px] text-[13px] font-medium leading-6 text-[#4b5568] md:ml-auto">
            Increase the efficiency of your school by eliminating manual
            management tasks, which are prone to errors.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          <article className="rounded-[10px] bg-[#f5fbff] p-7">
            <ThumbsUp size={28} className="mb-6 text-[#10c997]" fill="#10c997" />
            <h3 className="mb-3 text-[15px] font-extrabold text-[#2a2d32]">
              Tailored to Meet your School’s Needs
            </h3>
            <p className="text-[12px] leading-5 text-[#435169]">
              The structure and feature of the Schoolcube portal allows schools
              to customize the functions to suit their individual needs.
            </p>
          </article>

          <article className="rounded-[10px] bg-[#f5fbff] p-7">
            <Crosshair size={28} className="mb-6 text-[#ffbd59]" />
            <h3 className="mb-3 text-[15px] font-extrabold text-[#2a2d32]">
              Easy Access and Navigation
            </h3>
            <p className="text-[12px] leading-5 text-[#435169]">
              We have built a customer-friendly and simple to navigate platform
              for you.
            </p>
          </article>

          <article className="rounded-[10px] bg-[#f5fbff] p-7">
            <LockKeyhole size={28} className="mb-6 text-[#2f95ff]" />
            <h3 className="mb-3 text-[15px] font-extrabold text-[#2a2d32]">
              Your School Data is Safe
            </h3>
            <p className="text-[12px] leading-5 text-[#435169]">
              We’ve built a high profile security perimeter around every
              school’s account to ensure that only administrators have access.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SchoolAheadSection;
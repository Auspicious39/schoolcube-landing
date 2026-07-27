import listImage from "../assets/List.png";

const HassleFeatureSection = () => {
  return (
    <section className="bg-white px-3 py-10 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-6 grid grid-cols-2 gap-5 md:mb-12 md:gap-8">
          <h2 className="text-[15px] font-extrabold leading-tight text-[#203684] md:text-[30px]">
            Managing a School <br />
            Should Not Be a Hassle
          </h2>

          <p className="max-w-[430px] text-[7px] font-medium leading-3 text-[#4b5568] md:ml-auto md:text-[13px] md:leading-6">
            Improve your school’s efficiency by eliminating bottle necks and
            data management errors all in one platform.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-[7px] font-medium text-[#666666] md:mb-20 md:gap-9 md:text-[12px]">
          <button className="rounded-full bg-[#369bf5] px-3 py-1.5 text-white md:px-5 md:py-2">
            All in one platform
          </button>
          <button className="hover:text-[#203684]">Report and Analytics</button>
          <button className="hover:text-[#203684]">Instant Messaging</button>
          <button className="hover:text-[#203684]">Fees Payment</button>
        </div>

        <div className="grid items-center gap-5 md:gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-[13px] font-extrabold text-[#222222] md:mb-4 md:text-[20px]">
              All in one <span className="text-[#203684]">Platform</span>
            </h3>

            <p className="max-w-[350px] text-[7px] leading-3 text-[#666666] md:text-[13px] md:leading-6">
              Schoolcube collects and organizes lists and profiles of students,
              staff, and parents, so that you can keep up to date, accurate
              school data.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src={listImage}
              alt="Manage records"
              className="w-full max-w-[150px] object-contain md:max-w-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HassleFeatureSection;

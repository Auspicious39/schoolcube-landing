import listImage from "../assets/List.png";

const HassleFeatureSection = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1050px]">
        {/* Header */}
        <div className="mb-8 grid grid-cols-2 gap-6 md:mb-12 md:gap-8">
          <h2 className="text-[18px] font-extrabold leading-tight text-[#203684] md:text-[30px]">
            Managing a School
            <br />
            Should Not Be a Hassle
          </h2>

          <p className="text-[12px] leading-6 text-[#4b5568] md:ml-auto md:text-[13px] md:leading-6">
            Improve your school's efficiency by eliminating bottle necks and
            data management errors all in one platform.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-4 text-[12px] font-medium text-[#666666] md:mb-20 md:gap-9 md:text-[12px]">
          <button className="rounded-full bg-[#369bf5] px-5 py-2 text-[12px] text-white">
            All in one platform
          </button>

          <button className="text-[12px] hover:text-[#203684]">
            Report and Analytics
          </button>

          <button className="hidden text-[12px] hover:text-[#203684] md:block">
            Instant Messaging
          </button>

          <button className="hidden text-[12px] hover:text-[#203684] md:block">
            Fees Payment
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <h3 className="mb-4 text-[20px] font-extrabold text-[#222222] md:text-[20px]">
              All in one <span className="text-[#203684]">Platform</span>
            </h3>

            <p className="max-w-[350px] text-[13px] leading-6 text-[#666666] md:text-[13px] md:leading-6">
              Schoolcube collects and organizes lists and profiles of students,
              staff, and parents, so that you can keep up to date, accurate
              school data.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={listImage}
              alt="Manage records"
              className="w-full max-w-[180px] object-contain md:max-w-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HassleFeatureSection;
import listImage from "../assets/List.png";

const HassleFeatureSection = () => {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <h2 className="text-[30px] font-extrabold leading-tight text-[#203684]">
            Managing a School <br />
            Should Not Be a Hassle
          </h2>

          <p className="max-w-[430px] text-[13px] font-medium leading-6 text-[#4b5568] md:ml-auto">
            Improve your school’s efficiency by eliminating bottle necks and
            data management errors all in one platform.
          </p>
        </div>

        <div className="mb-20 flex flex-wrap items-center justify-center gap-9 text-[12px] font-medium text-[#666666]">
          <button className="rounded-full bg-[#369bf5] px-5 py-2 text-white">
            All in one platform
          </button>
          <button className="hover:text-[#203684]">Report and Analytics</button>
          <button className="hover:text-[#203684]">Instant Messaging</button>
          <button className="hover:text-[#203684]">Fees Payment</button>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-[20px] font-extrabold text-[#222222]">
              All in one <span className="text-[#203684]">Platform</span>
            </h3>

            <p className="max-w-[350px] text-[13px] leading-6 text-[#666666]">
              Schoolcube collects and organizes lists and profiles of students,
              staff, and parents, so that you can keep up to date, accurate
              school data.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src={listImage}
              alt="Manage records"
              className="w-full max-w-[280px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HassleFeatureSection;
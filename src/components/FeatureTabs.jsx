import listImage from "../assets/List.png";

const FeatureTabs = () => {
  return (
    <section className="overflow-hidden  px-6 pb-24">
      <div className="mx-auto max-w-[892px] h-px[444px]">
        <div className="flex flex-col gap-6 pt-0 md:flex-row md:items-center md:justify-between">
          <button className="h-[134px] rounded-full bg-[#369bf5] px-12 text-[32px] font-medium text-white md:w-[430px] md:text-[40px]">
            All in one platform
          </button>

          <button className="text-left text-[32px] font-semibold text-[#5a5a5a] md:text-center md:text-[40px]">
            Report and Analytics
          </button>

          <button className="text-left text-[32px] font-semibold text-[#5a5a5a] md:text-center md:text-[40px]">
            Instant Messaging
          </button>

          <button className="text-left text-[32px] font-semibold text-[#5a5a5a] md:text-center md:text-[40px]">
            Fees Payment
          </button>
        </div>

        <div className="mt-64 grid gap-14 md:grid-cols-[0.9fr_1fr] md:items-start">
          <div>
            <h2 className="mb-14 text-center text-[46px] font-extrabold leading-none text-[#203684] md:text-[68px]">
              All in one Platform
            </h2>
    
            <p className="max-w-[358px] h-[112px] text-[18px] font-regular leading-[1.5] text-[#666666] md:text-[42px]">
              Schoolcube collects and organizes lists and profiles of students,
              staff, and parents, so that you can keep up to date, accurate
              school data.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src={listImage}
              alt="Schoolcube platform list"
              className="w-full max-w-[277px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
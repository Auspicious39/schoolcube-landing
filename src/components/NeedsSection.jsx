const NeedsSection = () => {
  return (
    <section className="bg-white px-4 py-12 text-center md:px-6 md:py-20">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[32px] font-extrabold leading-[1.15] text-[#203684] md:text-[34px]">
          Everything Your School Needs
          <br />
          in One Place
        </h2>

        <p className="mx-auto mt-8 max-w-[820px] text-[14px] font-medium leading-[1.9] text-[#4b5568] md:mt-5 md:max-w-[620px] md:text-[13px] md:leading-6">
          Streamline admissions, attendance,
          communication, and academic records with
          one easy to use platform designed for
          modern schools.
        </p>

        <div className="mt-14 flex gap-5 md:mt-8 md:justify-center md:gap-5">
          <button className="flex-1 rounded-[14px] bg-[#203684] py-5 text-[18px] font-semibold text-white hover:bg-[#1a2861] md:flex-none md:rounded-[4px] md:px-7 md:py-3 md:text-[13px]">
            Start Free Trial
          </button>

          <button className="flex-1 rounded-[14px] border-2 border-[#203684] py-5 text-[18px] font-semibold text-[#203684] hover:bg-[#f5fbff] md:flex-none md:rounded-[4px] md:px-7 md:py-3 md:text-[13px]">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
const NeedsSection = () => {
  return (
    <section className="bg-white px-3 py-10 text-center md:px-6 md:py-20">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[17px] font-extrabold leading-tight text-[#203684] md:text-[34px]">
          Everything Your School Needs <br />
          in One Place
        </h2>

        <p className="mx-auto mt-3 max-w-[260px] text-[8px] font-medium leading-3 text-[#4b5568] md:mt-5 md:max-w-[620px] md:text-[13px] md:leading-6">
          Streamline admissions, attendance, communication, and academic
          records with one easy to use platform designed for modern schools.
        </p>

        <div className="mt-5 flex justify-center gap-3 md:mt-8 md:gap-5">
          <button className="rounded-[3px] bg-[#203684] px-4 py-2 text-[8px] font-semibold text-white hover:bg-[#1a2861] md:rounded-[4px] md:px-7 md:py-3 md:text-[13px]">
            Start Free Trial
          </button>

          <button className="rounded-[3px] border border-[#203684] px-4 py-2 text-[8px] font-semibold text-[#203684] hover:bg-[#f5fbff] md:rounded-[4px] md:border-2 md:px-7 md:py-3 md:text-[13px]">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;

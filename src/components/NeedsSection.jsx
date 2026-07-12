const NeedsSection = () => {
  return (
    <section className="bg-white px-6 py-20 text-center">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[28px] font-extrabold leading-tight text-[#203684] md:text-[34px]">
          Everything Your School Needs <br />
          in One Place
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[13px] font-medium leading-6 text-[#4b5568]">
          Streamline admissions, attendance, communication, and academic
          records with one easy to use platform designed for modern schools.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <button className="rounded-[4px] bg-[#203684] px-7 py-3 text-[13px] font-semibold text-white hover:bg-[#1a2861]">
            Start Free Trial
          </button>

          <button className="rounded-[4px] border-2 border-[#203684] px-7 py-3 text-[13px] font-semibold text-[#203684] hover:bg-[#f5fbff]">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
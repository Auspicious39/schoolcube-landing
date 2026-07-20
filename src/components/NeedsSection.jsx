const NeedsSection = () => {
  return (
    <section className="bg-white px-4 py-12 text-center md:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[18px] font-bold leading-[1.15] text-[#203684] md:text-[36px]">
          Everything Your School Needs
          <br />
          in One Place
        </h2>

        <p className="mx-auto mt-8 max-w-[302px] text-[14px] font-medium leading-[1.9] text-[#475467] md:mt-5 md:max-w-[584px] md:text-[18px] md:leading-6">
          Streamline admissions, attendance,
          communication, and academic records with
          one easy to use platform designed for
          modern schools.
        </p>

        <div className="mt-14 flex justify-center gap-6 md:mt-8">
          <button className="flex h-[40px] w-[168px] shrink-0 items-center justify-center whitespace-nowrap gap-[10px] rounded-[5px] bg-[#203684] px-[30px] py-[15px] font-medium text-[16px] text-white hover:bg-[#1a2861] md:h-[49px] md:w-[168px]">
            Start Free Trial
          </button>

          <button className="flex h-[40px] w-[151.5px] items-center justify-center whitespace-nowrap rounded-[5px] border-[0.5px] border-[#203684] px-[30px] py-[15px] font-medium text-[16px] text-[#203684] hover:bg-[#f5fbff] md:h-[49px] md:w-[168px]">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
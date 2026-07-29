const NeedsSection = () => {
  return (
    <section className="bg-white px-4 py-12 text-center md:px-6 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-lg sm:text-xl md:text-4xl font-bold leading-[1.15] text-[#203684]">
          Everything Your School Needs
          <br />
          in One Place
        </h2>

        <p className="mx-auto mt-6 sm:mt-8 md:mt-5 max-w-[302px] sm:max-w-[420px] md:max-w-[584px] text-sm md:text-lg font-medium leading-[1.7] md:leading-6 text-[#475467]">
          Streamline admissions, attendance, communication, and academic records
          with one easy to use platform designed for modern schools.
        </p>

        <div className="mt-10 md:mt-8 flex flex-row justify-center items-stretch gap-2 sm:gap-6">
          <button className="flex flex-1 sm:flex-none min-h-11 md:h-[49px] sm:w-[168px] items-center justify-center whitespace-normal sm:whitespace-nowrap text-center leading-tight gap-[10px] rounded-[5px] bg-[#203684] px-3 sm:px-[30px] font-medium text-[13px] sm:text-base text-white hover:bg-[#1a2861]">
            Start Free Trial
          </button>

          <button className="flex flex-1 sm:flex-none min-h-11 md:h-[49px] sm:w-[168px] items-center justify-center whitespace-normal sm:whitespace-nowrap text-center leading-tight rounded-[5px] border-[0.5px] border-[#203684] px-3 sm:px-[30px] font-medium text-[13px] sm:text-base text-[#203684] hover:bg-[#f5fbff]">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;

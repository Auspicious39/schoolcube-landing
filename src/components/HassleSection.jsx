const HassleFeatureSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 py-10 md:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-row items-start gap-3 sm:gap-5 md:items-center md:justify-between md:gap-8">
        <h2 className="flex-1 min-w-0 text-lg sm:text-xl md:text-4xl font-bold leading-[136%] tracking-[0.2px] text-[#203684] md:max-w-[498px] font-['Plus_Jakarta_Sans',sans-serif]">
          Managing a School
          <br className="hidden md:block" /> Should Not Be a Hassle
        </h2>

        <p className="flex-1 min-w-0 text-xs sm:text-sm md:text-xl font-normal leading-[155%] text-[#475467] md:max-w-[498px] font-['Plus_Jakarta_Sans',sans-serif]">
          Improve your school's efficiency by eliminating bottle necks and data
          management errors all in one platform.
        </p>
      </div>
    </section>
  );
};

export default HassleFeatureSection;

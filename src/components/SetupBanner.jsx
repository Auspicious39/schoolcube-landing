import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-[90px]">
      <div className="relative mx-auto flex w-full max-w-[327px] min-h-[261px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F6FBFF] px-6 md:max-w-[1200px] md:min-h-[261px] md:justify-start md:rounded-[10px] md:px-[86px]">
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[80px] opacity-35 md:bottom-[-68px] md:left-[-42px] md:w-[250px]"
        />

        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[80px] opacity-35 md:bottom-[-55px] md:right-[-40px] md:w-[245px]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[185px] flex-col items-center gap-8 text-center md:h-[119px] md:max-w-[1003px] md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex w-[268px] flex-col gap-3 md:h-[119px] md:w-[525px]">
            <h2 className="w-[170px] text-[18px] font-bold leading-[100%] tracking-[-0.01em] text-[#000000] md:w-[339px] md:h-[45px] md:text-[36px]">
              Instant Portal Setup
            </h2>

            <p className="w-[268px] text-center text-[14px] font-normal leading-[170%] tracking-[0px] text-[#666666] md:w-[525px] md:h-[62px] md:text-left md:text-[18px]">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="flex h-auto w-auto items-center justify-center gap-[18px] rounded-[5px] bg-[#203684] px-10 py-2 text-center text-[18px] font-medium text-white md:py-5">
  Get Started
</button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

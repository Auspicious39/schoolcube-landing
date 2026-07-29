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

        <div className="relative z-10 mx-auto flex w-full max-w-[280px] flex-col items-center gap-8 text-center md:max-w-[1003px] md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex w-full flex-col gap-3 md:max-w-[525px]">
            <h2 className="w-full text-lg font-bold leading-[100%] tracking-[-0.01em] text-black md:text-4xl">
              Instant Portal Setup
            </h2>

            <p className="w-full text-center text-sm font-normal leading-[170%] tracking-[0px] text-[#666666] md:text-left md:text-lg">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="flex h-auto w-auto shrink-0 items-center justify-center gap-[18px] rounded-[5px] bg-[#203684] px-10 py-2 text-center text-lg font-medium text-white md:py-5">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

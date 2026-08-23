import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-0 md:py-[90px]">
      <div className="relative mx-auto flex min-h-[261px] w-full max-w-[327px] items-center overflow-hidden rounded-[20px] bg-[#F6FBFF] px-6 md:h-[261px] md:max-w-[1200px] md:rounded-none md:px-[98px]">
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[80px] md:bottom-auto md:left-[-168px] md:top-[79px] md:h-[374px] md:w-[203px] md:rotate-[44.31deg]"
        />

        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[80px] md:bottom-auto md:left-[1098px] md:top-[55px] md:h-[335px] md:w-[234px] md:rotate-[-150deg]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[280px] flex-col items-center gap-8 text-center md:max-w-none md:flex-row md:items-center md:justify-between md:gap-0 md:text-left">
          <div className="flex w-full flex-col gap-3 md:w-[525px] md:gap-3">
            <h2 className="w-full text-lg font-bold leading-[100%] tracking-[-0.01em] text-black md:w-[339px] md:text-[36px] md:leading-[1.25]">
              Instant Portal Setup
            </h2>

            <p className="w-full text-center text-sm font-normal leading-[170%] tracking-[0px] text-[#666666] md:text-left md:text-lg md:leading-[1.72]">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="flex h-auto w-auto shrink-0 items-center justify-center rounded-[5px] bg-[#203684] px-10 py-2 text-center text-lg font-medium text-white md:h-[56px] md:w-[160px] md:px-0 md:py-0 md:text-[18px] md:leading-[1.3]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-0 md:py-[5.625rem]">
      <div className="relative mx-auto flex min-h-[16.3125rem] w-full max-w-[20.4375rem] items-center overflow-hidden rounded-[1.25rem] bg-[#F6FBFF] px-6 md:h-[16.3125rem] md:max-w-[75rem] md:rounded-none md:px-[6.125rem]">
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[5rem] md:bottom-auto md:left-[-10.5rem] md:top-[4.9375rem] md:h-[23.375rem] md:w-[12.6875rem] md:rotate-[44.31deg]"
        />

        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[5rem] md:bottom-auto md:left-[68.625rem] md:top-[3.4375rem] md:h-[20.9375rem] md:w-[14.625rem] md:rotate-[-150deg]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[17.5rem] flex-col items-center gap-8 text-center md:max-w-none md:flex-row md:items-center md:justify-between md:gap-0 md:text-left">
          <div className="flex w-full flex-col gap-3 md:w-[32.8125rem] md:gap-3">
            <h2 className="w-full text-lg font-bold leading-[100%] tracking-[-0.01em] text-black md:w-[21.1875rem] md:text-[2.25rem] md:leading-[1.25]">
              Instant Portal Setup
            </h2>

            <p className="w-full text-center text-sm font-normal leading-[170%] tracking-[0rem] text-[#666666] md:text-left md:text-lg md:leading-[1.72]">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="flex h-auto w-auto shrink-0 items-center justify-center rounded-[0.3125rem] bg-[#203684] px-10 py-2 text-center text-lg font-medium text-white md:h-[3.5rem] md:w-[10rem] md:px-0 md:py-0 md:text-[1.125rem] md:leading-[1.3]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

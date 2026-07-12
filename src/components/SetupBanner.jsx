import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-3 py-10 md:px-6 md:py-[90px]">
      <div className="relative mx-auto flex min-h-[126px] max-w-[1200px] items-center overflow-hidden rounded-[6px] bg-[#f5fbff] px-5 md:min-h-[261px] md:rounded-[10px] md:px-[86px]">
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-[-30px] left-[-20px] w-[115px] opacity-35 md:bottom-[-68px] md:left-[-42px] md:w-[250px]"
        />

        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-[-28px] right-[-18px] w-[112px] opacity-35 md:bottom-[-55px] md:right-[-40px] md:w-[245px]"
        />

        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-10">
          <div>
            <h2 className="text-[14px] font-extrabold text-black md:text-[36px]">
              Instant Portal Setup
            </h2>

            <p className="mt-2 max-w-[190px] text-[7px] leading-3 text-[#444444] md:mt-4 md:max-w-[525px] md:text-[15px] md:leading-6">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="h-7 min-w-[80px] rounded-[3px] bg-[#203684] px-3 text-[7px] font-semibold text-white hover:bg-[#1a2861] md:mr-[86px] md:h-[56px] md:min-w-[160px] md:rounded-[4px] md:px-6 md:text-[15px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

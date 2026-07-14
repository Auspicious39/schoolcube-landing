import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-[90px]">
      <div className="relative mx-auto flex min-h-[260px] max-w-[1200px] items-center justify-center overflow-hidden rounded-[24px] bg-[#f5fbff] px-6 md:min-h-[261px] md:justify-start md:rounded-[10px] md:px-[86px]">

        {/* Left Pattern */}
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[80px] opacity-35 md:bottom-[-68px] md:left-[-42px] md:w-[250px]"
        />

        {/* Right Pattern */}
        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-[80px] opacity-35 md:bottom-[-55px] md:right-[-40px] md:w-[245px]"
        />

        <div className="relative z-10 flex w-full flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <h2 className="text-[18px] font-extrabold text-black md:text-[36px]">
              Instant Portal Setup
            </h2>

            <p className="mx-auto mt-5 max-w-[260px] text-[14px] leading-8 text-[#444444] md:mx-0 md:mt-4 md:max-w-[525px] md:text-[15px] md:leading-6">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="mt-8 h-[48px] min-w-[160px] rounded-[6px] bg-[#203684] px-8 text-[18px] font-semibold text-white hover:bg-[#1a2861] md:mt-0 md:mr-[86px] md:h-[56px] md:min-w-[160px] md:text-[15px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;
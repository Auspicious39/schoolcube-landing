import leftPattern from "../assets/6.png";
import rightPattern from "../assets/5.png";

const SetupBanner = () => {
  return (
    <section className="bg-white px-6 py-[90px]">
      <div className="relative mx-auto flex min-h-[261px] max-w-[1200px] items-center overflow-hidden rounded-[10px] bg-[#f5fbff] px-[86px]">
        <img
          src={leftPattern}
          alt=""
          className="pointer-events-none absolute bottom-[-68px] left-[-42px] w-[250px] opacity-35"
        />

        <img
          src={rightPattern}
          alt=""
          className="pointer-events-none absolute bottom-[-55px] right-[-40px] w-[245px] opacity-35"
        />

        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-10">
          <div>
            <h2 className="text-[36px] font-extrabold text-black">
              Instant Portal Setup
            </h2>

            <p className="mt-4 max-w-[525px] text-[15px] leading-6 text-[#444444]">
              When you sign up, our team of tech experts designs your school
              portal without delay.
            </p>
          </div>

          <button className="h-[56px] min-w-[160px] rounded-[4px] bg-[#203684] px-6 text-[15px] font-semibold text-white hover:bg-[#1a2861] md:mr-[86px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;

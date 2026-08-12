import backgroundImage from "../assets/Background.png";
import searchGif from "../assets/Search.gif";

const HeroText = () => {
  return (
    <section
      className="relative flex h-[262px] items-center justify-center overflow-hidden rounded-[10px] bg-cover bg-center md:h-[725px] md:rounded-[8px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-white md:h-[369px] md:w-[968px] md:justify-between">
        <div className="flex w-[263px] flex-col items-center gap-2 md:w-auto md:gap-0">
          <h1 className="max-w-[236px] text-[22px] font-extrabold leading-[1.3] md:max-w-[654px] md:text-[64px]">
            School Management
            <br />
            Made For You!
          </h1>

          <p className="max-w-[263px] text-[14px] font-medium leading-[1.55] md:max-w-[674px] md:text-[24px]">
            All aspects of your school management consolidated into
            <br className="hidden md:block" />a single secure suite.
          </p>
        </div>

        <img
          src={searchGif}
          autoPlay
          loop
          muted
          playsInline
          className="mt-5 h-[26px] w-[182px] rounded-[32px] object-cover md:mt-0 md:h-[70px] md:w-[726px]"
        />
      </div>
    </section>
  );
};

export default HeroText;

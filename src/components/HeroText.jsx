import backgroundImage from "../assets/Background.png";
import searchIcon from "../assets/Search 1.png";

const HeroText = () => {
  return (
    <section
      className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[12px] bg-cover bg-center md:h-[505px] md:rounded-[6px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-white md:px-6">
        <h1 className="max-w-[300px] text-[22px] font-extrabold leading-tight md:max-w-[620px] md:text-[52px]">
          School Management <br />
          Made For You!
        </h1>

        <p className="mt-3 max-w-[290px] text-[11px] leading-4 md:mt-4 md:max-w-[620px] md:text-[19px] md:leading-7">
          All aspects of your school management consolidated into
          <br className="hidden md:block" />
          a single secure suite.
        </p>

        <div className="mt-5 flex w-full max-w-[260px] items-center justify-center rounded-full bg-white px-4 py-2 md:mt-9 md:max-w-[635px] md:px-6 md:py-3">
          <img
            src={searchIcon}
            alt="Search"
            className="w-full max-w-[220px] object-contain md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroText;
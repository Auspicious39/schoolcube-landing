import backgroundImage from "../assets/Background.png";

const HeroText = () => {
  return (
    <section
      className="relative flex h-[172px] items-center justify-center overflow-hidden rounded-[4px] bg-cover bg-center md:h-[505px] md:rounded-[6px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      <div className="relative z-10 flex w-full flex-col items-center px-4 text-center text-white md:px-6">
        <h1 className="max-w-[620px] text-[18px] font-extrabold leading-tight md:text-[52px]">
          School Management <br />
          Made For You!
        </h1>

        <p className="mt-1.5 max-w-[620px] text-[8px] leading-3 md:mt-4 md:text-[19px] md:leading-7">
          All aspects of your school management consolidated into <br className="hidden md:block" />
          a single secure suite.
        </p>

        <div className="mt-4 flex w-full max-w-[635px] items-center rounded-full bg-white px-4 py-1.5 md:mt-9 md:px-6 md:py-3">
          <input
            type="text"
            placeholder="Search schools..."
            className="w-full bg-transparent text-[9px] text-gray-700 outline-none placeholder:text-gray-400 md:text-[14px]"
          />
          <button className="ml-auto text-gray-500">
            <svg className="h-3 w-3 md:h-5 md:w-5" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
              <line x1="12.5" y1="12.5" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroText;

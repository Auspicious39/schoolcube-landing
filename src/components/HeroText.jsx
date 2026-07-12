import backgroundImage from "../assets/Background.png";

const HeroText = () => {
  return (
    <section
      className="relative flex h-[505px] items-center justify-center overflow-hidden rounded-[6px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-white">
        <h1 className="max-w-[620px] text-[42px] font-extrabold leading-tight md:text-[52px]">
          School Management <br />
          Made For You!
        </h1>

        <p className="mt-4 max-w-[620px] text-[17px] leading-7 md:text-[19px]">
          All aspects of your school management consolidated into <br className="hidden md:block" />
          a single secure suite.
        </p>

        <div className="mt-9 flex w-full max-w-[635px] items-center rounded-full bg-white px-6 py-3">
          <input
            type="text"
            placeholder="Search schools..."
            className="w-full bg-transparent text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button className="ml-auto text-gray-500">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
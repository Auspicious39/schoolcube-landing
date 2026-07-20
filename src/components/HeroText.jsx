import backgroundImage from "../assets/Background.png";
import searchVideo from "../assets/search.mp4";


const HeroText = () => {
  return (
    <section
      className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[12px] bg-cover bg-center md:h-[575px] md:rounded-[8px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-white">
        <h1 className="max-w-[236px] text-[22px] font-extrabold leading-tight md:max-w-[654px] md:text-[64px] md:leading-[1.3]">
          School Management
          <br />
          Made For You!
        </h1>

        <p className="mt-3 max-w-[263px] text-[14px]  font-medium leading-4 md:mt-6 md:max-w-[674px] md:text-[24px] md:leading-[1.5]">
          All aspects of your school management consolidated into
          <br className="hidden md:block" />
          a single secure suite.
        </p>


        <video
          src={searchVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-8 w-8 object-contain"
        />
      
    </div>
    </section>
  );
};

export default HeroText;
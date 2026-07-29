import backgroundImage from "../assets/background-2.png";
import onboardingCard from "../assets/Frame 867.png";
import oneStopCard from "../assets/Frame 868-2.png";
import trainingCard from "../assets/Frame 2147228983.png";
import interfaceCard from "../assets/Frame 2147228984.png";

const cards = [
  { src: onboardingCard, alt: "Seamless Onboarding" },
  { src: oneStopCard, alt: "Instant Portal Setup" },
  { src: trainingCard, alt: "Free Training" },
  { src: interfaceCard, alt: "Custom Interface" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full h-[250vh] md:h-auto bg-[#EBEBEB] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="sticky top-0 z-0 h-[399px] md:h-screen w-full overflow-hidden flex flex-col">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0  w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-[327px] pt-9 px-4 gap-3 sm:gap-5 text-white md:max-w-[1200px] md:justify-between md:px-6 md:pt-16 md:gap-8">
          <h2 className="flex-1 min-w-0 text-lg font-bold leading-[136%] tracking-[0.2px] text-white md:max-w-[430px] md:text-4xl md:leading-[130%] md:tracking-normal">
            Why Choose Us?
          </h2>

          <p className="flex-1 min-w-0 text-xs sm:text-sm font-normal leading-[155%] tracking-[0px] text-white md:max-w-[420px] md:text-lg md:text-slate-200">
            Built with educators in mind, our platform makes managing students,
            staff and daily operations easier than ever.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-[220px] md:-mt-[calc(100vh-220px)] mx-auto max-w-[1149px] px-4 pb-0 md:px-6 md:pb-[15vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="sticky pb-[40vh] md:pb-0 md:mb-20 top-[var(--mobile-top)] md:top-[var(--desktop-top)]"
            style={{
              "--mobile-top": `${178 + index * 8}px`,
              "--desktop-top": `${220 + index * 16}px`,
              zIndex: index + 1,
            }}
          >
            <div className="overflow-hidden rounded-[16px] md:rounded-[24px] bg-white shadow-2xl transition-all duration-300">
              <img
                src={card.src}
                alt={card.alt || ""}
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

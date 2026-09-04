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
    <section className="relative isolate w-full bg-[#EBEBEB] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header / Background — stays pinned at the back (z-0) */}
      <div className="sticky top-0 z-0 h-[24.9375rem] md:h-screen w-full overflow-hidden flex flex-col">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-[20.4375rem] gap-6 pt-9 text-white md:max-w-[75rem] md:justify-between md:gap-8 md:px-6 md:pt-16">
          <h2 className="w-[8.875rem] shrink-0 text-lg font-bold leading-[136%] tracking-[0.0125rem] text-white md:max-w-[26.875rem] md:flex-1 md:text-[2.5rem] md:leading-[130%] md:tracking-normal">
            Why Choose Us?
          </h2>
          <p className="w-[9.75rem] shrink-0 text-sm font-normal leading-[155%] tracking-[0rem] text-white md:hidden">
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
          <p className="hidden md:block md:max-w-[26.25rem] md:flex-1 md:text-lg md:font-normal md:leading-[155%] md:tracking-[0rem] md:text-slate-200">
            Built with educators in mind, our platform makes managing students,
            staff, and daily operations easier than ever.
          </p>
        </div>
      </div>

      {/* Cards — each card owns a full viewport of scroll distance */}
      {/* Cards */}
<div className="relative z-10 -mt-[13.0625rem] md:-mt-[calc(100vh-12.6875rem)]">
  {cards.map((card, index) => (
    <div
      key={index}
      className="
        sticky top-[11rem]
        flex h-[85dvh] min-h-[31.5rem]
        items-start justify-center
        px-6 pt-6
        md:top-[5rem]
        md:h-screen md:min-h-0
        md:items-center md:pt-0
      "
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full max-w-[71.8125rem] overflow-hidden rounded-[0.356rem] bg-white shadow-none md:rounded-[1.5rem] md:shadow-2xl">
        <img
          src={card.src}
          alt={card.alt || ""}
          className="block aspect-[3447/1587] w-full object-cover"
        />
      </div>
    </div>
  ))}

  <div className="h-[20dvh] md:h-[30vh]" />
</div>
    </section>
  );
};

export default WhyChooseUs;

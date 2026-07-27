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
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex w-[327px] h-[132px] pt-[36px] px-0 gap-[24px] text-white md:w-full md:max-w-[1200px] md:h-auto md:justify-between md:px-6 md:pt-16 md:gap-0">
          <h2 className="w-[142px] h-[48px] text-[18px] font-bold leading-[136%] tracking-[0.2px] text-white md:w-[430px] md:h-auto md:text-[40px] md:leading-[130%] md:tracking-normal">
            Why Choose Us?
          </h2>

          <p className="w-[156px] h-[132px] text-[14px] font-normal leading-[155%] tracking-[0px] text-white md:w-[420px] md:h-auto md:text-[18px] md:text-slate-200">
            Built with educators in mind, our platform makes managing students,
            staff and daily operations easier than ever.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-[220px] md:-mt-[calc(100vh-220px)] mx-auto max-w-[1149px] px-4 pb-0 md:px-6 md:pb-[15vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="sticky pb-[40vh] md:pb-0 md:mb-20"
            style={{
              top: `var(--top-offset-${index})`,
              zIndex: index + 1,
            }}
          >
            <style jsx>{`
              :root {
                --top-offset-${index}: calc(178px + ${index * 8}px);
              }
              @media (min-width: 768px) {
                :root {
                  --top-offset-${index}: calc(220px + ${index * 16}px);
                }
              }
            `}</style>

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

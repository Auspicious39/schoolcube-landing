// import backgroundImage from "../assets/background-2.png";
// import onboardingCard from "../assets/Frame 867.png";
// import oneStopCard from "../assets/Frame 868-2.png";
// import trainingCard from "../assets/Frame 2147228983.png";
// import interfaceCard from "../assets/Frame 2147228984.png";

// const cards = [onboardingCard, oneStopCard, trainingCard, interfaceCard];

// const CARD_TOP_BASE = 180;  // where the first card pins
// const CARD_TOP_STEP = 32;   // how much lower each next card pins (creates the peek/stack)

// const WhyChooseUs = () => {
//   return (
//     <section className="relative">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <img
//           src={backgroundImage}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30" />
//         <div className="relative z-30 mx-auto flex max-w-[1200px] justify-between px-6 pt-16 text-white">
//           <h2 className="w-[430px] text-[40px] font-bold leading-[130%]">
//             Why Choose Us?
//           </h2>
//           <p className="w-[420px] text-[18px] leading-[155%]">
//             Built with educators in mind, our platform makes managing students,
//             staff and daily operations easier than ever.
//           </p>
//         </div>
//       </div>

//       <div className="relative z-40">
//         {cards.map((card, index) => (
//           <div key={index} className="relative h-[140vh]">
//             <div
//               className="sticky mx-auto max-w-[1149px] px-6"
//               style={{ top: CARD_TOP_BASE + index * CARD_TOP_STEP, zIndex: index }}
//             >
//               <img
//                 src={card}
//                 alt=""
//                 className="w-full rounded-[20px] shadow-2xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import backgroundImage from "../assets/background-2.png";
import onboardingCard from "../assets/Frame 867.png";
import oneStopCard from "../assets/Frame 868-2.png";
import trainingCard from "../assets/Frame 2147228983.png";
import interfaceCard from "../assets/Frame 2147228984.png";

const cards = [onboardingCard, oneStopCard, trainingCard, interfaceCard];

const CARD_TOP = 180; // fixed pin position — every card lands here, fully covering the last

const WhyChooseUs = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-30 mx-auto flex max-w-[1200px] justify-between px-6 pt-16 text-white">
          <h2 className="w-[430px] text-[40px] font-bold leading-[130%]">
            Why Choose Us?
          </h2>
          <p className="w-[420px] text-[18px] leading-[155%]">
            Built with educators in mind, our platform makes managing students,
            staff and daily operations easier than ever.
          </p>
        </div>
      </div>

      <div className="relative z-40">
        {cards.map((card, index) => (
          <div key={index} className="relative h-[140vh]">
            <div
              className="sticky mx-auto max-w-[1149px] px-6"
              style={{ top: `${CARD_TOP}px`, zIndex: index + 1 }}
            >
              <img
                src={card}
                alt=""
                className="block w-full rounded-[20px] shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

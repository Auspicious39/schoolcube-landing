import googleCloud from "../assets/image 7.png";
import flutterwave from "../assets/image 6.png";
import paystack from "../assets/image 9.png";

const Partners = () => {
  return (
    <section className="mt-12 mb-8 md:mt-0 md:mb-0 md:pb-[88px]">
      <div className="mx-auto flex flex-col items-center rounded-[20px] bg-white px-4 py-8 md:max-w-[892px] md:flex-row md:justify-between md:gap-10 md:rounded-none md:px-0 md:py-0">
        <h3 className="mb-8 text-[16px] font-medium tracking-[0.5em] text-[#B0B0B0] md:mb-0 md:text-[18px]">
          PARTNERS
        </h3>

        <div className="flex items-center justify-center gap-8 md:gap-14">
          <img
            src={paystack}
            alt="Paystack"
            className="w-[85px] object-contain md:w-[102px]"
          />

          <img
            src={flutterwave}
            alt="Flutterwave"
            className="w-[110px] object-contain md:w-[132px]"
          />

          <img
            src={googleCloud}
            alt="Google Cloud"
            className="w-[110px] object-contain md:w-[90px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

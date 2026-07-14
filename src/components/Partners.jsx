import googleCloud from "../assets/image 7.png";
import flutterwave from "../assets/image 6.png";
import paystack from "../assets/image 9.png";

const Partners = () => {
  return (
    <section className="mt-12 mb-8 md:hidden">
  <div className="flex flex-col items-center">
    <h3 className="mb-8 text-[14px] font-medium tracking-[0.5em] text-[#B0B0B0]">
      PARTNERS
    </h3>

    <div className="flex items-center justify-center gap-8">
      <img
        src={paystack}
        alt="Paystack"
        className="w-[85px] object-contain"
      />

      <img
        src={flutterwave}
        alt="Flutterwave"
        className="w-[110px] object-contain"
      />

      <img
        src={googleCloud}
        alt="Google Cloud"
        className="w-[70px] object-contain"
      />
    </div>
  </div>
</section>
  );
};

export default Partners;
import leftPattern from "../assets/17.png";
import rightPattern from "../assets/Fill 519.png";
import emailIcon from "../assets/contact-email.svg";
import phoneIcon from "../assets/contact-phone.svg";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-12 lg:px-6 lg:pb-[132px] lg:pt-[100px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[290px] text-center sm:max-w-[560px] lg:max-w-[846px]">
          <h1 className="text-[22px] font-bold leading-[1.2] tracking-[0.2px] text-[#203684] sm:text-[40px] lg:text-[56px] lg:tracking-[-1px] font-['Plus_Jakarta_Sans',sans-serif]">
            Let's Hear From You
          </h1>
          <p className="mt-2 text-[13px] font-normal leading-[150%] tracking-[0px] text-[#47505b] sm:text-[16px] lg:mt-[19px] lg:max-w-[734px] lg:text-[20px] lg:leading-[1.7] lg:tracking-[0px] font-['Plus_Jakarta_Sans',sans-serif]">
            Our team of experts are ready to help. Please fill the form below to
            enable us serve you better.
          </p>
        </div>

        <section className="relative mx-auto mt-6 max-w-[1159px] pt-6 sm:mt-10 sm:pt-14 lg:mt-[48px] lg:h-[647px] lg:pt-0">
          <div className="absolute inset-x-0 bottom-0 h-[220px] rounded-[16px] bg-[#f4faff] sm:h-[340px] lg:bottom-0 lg:left-[45px] lg:right-auto lg:h-[430px] lg:w-[1055px] lg:rounded-none" />

          <img
            src={leftPattern}
            alt=""
            className="pointer-events-none absolute top-2 left-1 w-[28px] opacity-35 sm:left-5 sm:w-[36px] lg:left-0 lg:top-[154px] lg:h-[40px] lg:w-[48px] lg:rotate-[-18.92deg]"
          />

          <img
            src={rightPattern}
            alt=""
            className="pointer-events-none absolute top-2 right-1 w-[32px] opacity-35 sm:right-5 sm:w-[42px] lg:right-0 lg:top-[139px] lg:h-[61px] lg:w-[59px]"
          />

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative z-10 mx-auto w-full max-w-[290px] rounded-[12px] bg-white px-4 py-5 shadow-[0_10px_30px_rgba(36,71,113,0.04)] sm:max-w-[440px] sm:rounded-[16px] sm:px-8 sm:py-10 lg:h-[557px] lg:max-w-[585px] lg:rounded-none lg:px-[73px] lg:pb-0 lg:pt-[84px]"
          >
            <label className="block text-[13px] font-medium text-[#5f5f5f] md:text-[16px]">
              Name
              <input
                className="mt-1 h-[42px] w-full rounded-[5px] border border-[#e7e5ea] px-3 text-[13px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[48px] sm:px-[15px] sm:text-[14px]"
                placeholder="Enter your full name"
              />
            </label>

            <label className="mt-3 block text-[13px] font-medium text-[#5f5f5f] sm:mt-[15px] md:text-[16px]">
              Email
              <input
                type="email"
                className="mt-1 h-[42px] w-full rounded-[5px] border border-[#e7e5ea] px-3 text-[13px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[48px] sm:px-[15px] sm:text-[14px]"
                placeholder="Enter your email"
              />
            </label>

            <label className="mt-3 block text-[13px] font-medium text-[#5f5f5f] sm:mt-[15px] md:text-[16px]">
              Message
              <textarea
                className="mt-1 h-[95px] w-full resize-none rounded-[5px] border border-[#e7e5ea] px-3 py-2 text-[13px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[123px] sm:px-[15px] sm:py-[10px] sm:text-[14px]"
                placeholder="Your Message"
              />
            </label>

            <button className="mt-5 h-[46px] w-full rounded-[8px] bg-[#203684] text-[13px] font-medium text-white transition hover:bg-[#172a6a] sm:mt-[30px] sm:h-[56px] sm:rounded-[10px] sm:text-[14px]">
              Get Started
            </button>
          </form>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 md:mt-[132px] md:grid-cols-2 md:gap-[30px]">
          <article className="flex w-full min-h-[90px] items-start justify-center gap-3 rounded-none border border-[#e7e5ea] bg-white p-4 text-left sm:min-h-[110px] sm:gap-4 sm:p-5 md:h-[136px] md:min-h-0 md:items-center md:gap-8 md:p-[15px]">
            <img src={emailIcon} alt="" className="mt-1 h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:mt-0 md:h-10 md:w-10" />
            <div className="flex-1">
              <h2 className="text-[16px] font-medium leading-none text-black sm:text-[18px] md:text-[24px]">
                Email
              </h2>
              <p className="mt-1 text-[12px] leading-5 text-[#666] sm:text-[13px] sm:leading-6 md:text-[16px] md:leading-normal">
                info@schoolcube.net
                <br />
                support@schoolcube.net
              </p>
            </div>
          </article>

          <article className="flex w-full min-h-[90px] items-start justify-center gap-3 rounded-none border border-[#e7e5ea] bg-white p-4 text-left sm:min-h-[110px] sm:gap-4 sm:p-5 md:h-[136px] md:min-h-0 md:items-center md:gap-8 md:p-[15px]">
            <img src={phoneIcon} alt="" className="mt-1 h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:mt-0 md:h-10 md:w-10" />
            <div className="flex-1">
              <h2 className="text-[16px] font-medium leading-none text-black sm:text-[18px] md:text-[24px]">
                Phone
              </h2>
              <p className="mt-1 text-[12px] leading-5 text-[#666] sm:text-[13px] sm:leading-6 md:text-[16px] md:leading-normal">
                (+234)705–394–4592
                <br />
                (+234)705–394–4594
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
import leftPattern from "../assets/17.png";
import rightPattern from "../assets/Fill 519.png";
import emailIcon from "../assets/contact-email.svg";
import phoneIcon from "../assets/contact-phone.svg";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-6 lg:pb-[132px] lg:pt-[20px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[327px] text-center sm:max-w-[560px] lg:max-w-[846px]">
          <h1 className="text-[28px] font-bold leading-[1.2] tracking-[0.2px] text-[#203684] sm:text-[40px] lg:text-[56px] lg:tracking-[-1px] font-['Plus_Jakarta_Sans',sans-serif]">
            Let's Hear From You
          </h1>
          <p className="mt-3 text-[14px] font-normal leading-[160%] tracking-[0px] text-[#47505b] sm:text-[16px] lg:mt-[19px] lg:max-w-[734px] lg:text-[20px] lg:leading-[1.7] lg:tracking-[0px] font-['Plus_Jakarta_Sans',sans-serif]">
            Our team of experts are ready to help. Please fill the form below to
            enable us serve you better.
          </p>
        </div>

        <section className="relative mx-auto mt-8 max-w-[1159px] pt-10 sm:mt-10 sm:pt-14 lg:mt-[48px] lg:h-[647px] lg:pt-0">
          <div className="absolute inset-x-0 bottom-0 h-[280px] rounded-[16px] bg-[#f4faff] sm:h-[340px] lg:bottom-0 lg:left-[45px] lg:right-auto lg:h-[430px] lg:w-[1055px] lg:rounded-none" />

          <img
            src={leftPattern}
            alt=""
            className="pointer-events-none absolute top-4 left-2 w-[36px] opacity-35 sm:left-5 lg:left-0 lg:top-[154px] lg:h-[40px] lg:w-[48px] lg:rotate-[-18.92deg]"
          />

          <img
            src={rightPattern}
            alt=""
            className="pointer-events-none absolute top-4 right-2 w-[42px] opacity-35 sm:right-5 lg:right-0 lg:top-[139px] lg:h-[61px] lg:w-[59px]"
          />

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative z-10 mx-auto w-full max-w-[327px] rounded-[16px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(36,71,113,0.04)] sm:max-w-[440px] sm:px-8 sm:py-10 lg:h-[557px] lg:max-w-[585px] lg:rounded-none lg:px-[73px] lg:pb-0 lg:pt-[84px]"
          >
            <label className="block text-[14px] font-medium text-[#5f5f5f] md:text-[16px]">
              Name
              <input
                className="mt-[6px] h-[48px] w-full rounded-[5px] border border-[#e7e5ea] px-[15px] text-[14px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684]"
                placeholder="Enter your full name"
              />
            </label>

            <label className="mt-[15px] block text-[14px] font-medium text-[#5f5f5f] md:text-[16px]">
              Email
              <input
                type="email"
                className="mt-[6px] h-[48px] w-full rounded-[5px] border border-[#e7e5ea] px-[15px] text-[14px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684]"
                placeholder="Enter your email"
              />
            </label>

            <label className="mt-[15px] block text-[14px] font-medium text-[#5f5f5f] md:text-[16px]">
              Message
              <textarea
                className="mt-[6px] h-[123px] w-full resize-none rounded-[5px] border border-[#e7e5ea] px-[15px] py-[10px] text-[14px] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684]"
                placeholder="Your Message"
              />
            </label>

            <button className="mt-[30px] h-[56px] w-full rounded-[10px] bg-[#203684] text-[14px] font-medium text-white transition hover:bg-[#172a6a]">
              Get Started
            </button>
          </form>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-4 md:mt-[132px] md:grid-cols-2 md:gap-[30px]">
          <article className="flex w-full min-h-[110px] items-center justify-center gap-4 rounded-none border border-[#e7e5ea] bg-white p-5 text-left md:h-[136px] md:min-h-0 md:gap-8 md:p-[15px]">
            <img src={emailIcon} alt="" className="h-10 w-10 shrink-0" />
            <div>
              <h2 className="text-[18px] font-medium text-black md:text-[24px]">
                Email
              </h2>
              <p className="mt-1 text-[13px] leading-6 text-[#666] md:text-[16px] md:leading-normal">
                info@schoolcube.net
                <br />
                support@schoolcube.net
              </p>
            </div>
          </article>

          <article className="flex w-full min-h-[110px] items-center justify-center gap-4 rounded-none border border-[#e7e5ea] bg-white p-5 text-left md:h-[136px] md:min-h-0 md:gap-8 md:p-[15px]">
            <img src={phoneIcon} alt="" className="h-10 w-10 shrink-0" />
            <div>
              <h2 className="text-[18px] font-medium text-black md:text-[24px]">
                Phone
              </h2>
              <p className="mt-1 text-[13px] leading-6 text-[#666] md:text-[16px] md:leading-normal">
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

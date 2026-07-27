import { Mail, Phone } from "lucide-react";
import leftPattern from "../assets/17.png";
import rightPattern from "../assets/Fill 519.png";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white px-4 pb-12 pt-6 md:px-6 md:pb-[108px] md:pt-[46px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[327px] text-center md:max-w-[846px]">
          <h1 className="text-[28px] font-bold leading-[130%] tracking-[0.2px] text-[#203684] md:text-[56px] md:leading-[139%] md:tracking-[0.4px] font-['Plus_Jakarta_Sans',sans-serif]">
            Let's Hear From You
          </h1>
          <p className="mt-3 text-[14px] font-normal leading-[160%] tracking-[0px] text-[#47505b] md:mt-[19px] md:text-[20px] md:leading-[170%] md:tracking-[0.3px] font-['Plus_Jakarta_Sans',sans-serif]">
            Our team of experts are ready to help. Please fill the form below to
            enable us serve you better.
          </p>
        </div>

        <section className="relative mx-auto mt-8 max-w-[1076px] pt-10 md:mt-[84px] md:pt-[176px]">
          <div className="absolute inset-x-0 bottom-0 h-[280px] rounded-[16px] bg-[#f0f8ff] md:h-[412px] md:rounded-none" />

          <img
            src={leftPattern}
            alt=""
            className="pointer-events-none absolute top-0 left-2 w-[36px] opacity-35 md:left-0 md:top-[154px] md:h-[40px] md:w-[48px] md:rotate-[18.92deg]"
          />

          <img
            src={rightPattern}
            alt=""
            className="pointer-events-none absolute top-0 right-2 w-[42px] opacity-35 md:left-[1100px] md:top-[139px] md:h-[61px] md:w-[59px] md:right-auto"
          />

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative z-10 mx-auto w-full max-w-[327px] rounded-[16px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(35,54,132,0.06)] md:max-w-[558px] md:rounded-[20px] md:px-[70px] md:py-[72px]"
          >
            <label className="block text-[14px] font-medium text-[#5c5f66] md:text-[16px]">
              Name
              <input
                className="mt-2 h-[47px] w-full rounded-[6px] border border-[#e1e3e8] px-[14px] text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]"
                placeholder="Enter your full name"
              />
            </label>

            <label className="mt-4 block text-[14px] font-medium text-[#5c5f66] md:text-[16px]">
              Email
              <input
                type="email"
                className="mt-2 h-[47px] w-full rounded-[6px] border border-[#e1e3e8] px-[14px] text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]"
                placeholder="Enter your email"
              />
            </label>

            <label className="mt-4 block text-[14px] font-medium text-[#5c5f66] md:text-[16px]">
              Message
              <textarea
                className="mt-2 h-[118px] w-full resize-none rounded-[6px] border border-[#e1e3e8] px-[14px] py-3 text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]"
                placeholder="Your Message"
              />
            </label>

            <button className="mt-7 h-[54px] w-full rounded-[8px] bg-[#203684] text-[14px] font-semibold text-white transition hover:bg-[#172a6a]">
              Get Started
            </button>
          </form>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-4 md:mt-[126px] md:grid-cols-2 md:gap-7">
          <article className="flex w-full min-h-[110px] items-center gap-4 rounded-[16px] border border-[#e0e3e8] bg-white p-5 text-left md:min-h-[130px] md:gap-8 md:px-8 md:py-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]">
              <Mail size={21} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[18px] font-bold text-[#111] md:text-[24px]">
                Email
              </h2>
              <p className="mt-1 text-[13px] leading-6 text-[#47505b] md:text-[16px] md:leading-7">
                info@schoolcube.net
                <br />
                support@schoolcube.net
              </p>
            </div>
          </article>

          <article className="flex w-full min-h-[110px] items-center gap-4 rounded-[16px] border border-[#e0e3e8] bg-white p-5 text-left md:min-h-[130px] md:gap-8 md:px-8 md:py-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]">
              <Phone size={21} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[18px] font-bold text-[#111] md:text-[24px]">
                Phone
              </h2>
              <p className="mt-1 text-[13px] leading-6 text-[#47505b] md:text-[16px] md:leading-7">
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

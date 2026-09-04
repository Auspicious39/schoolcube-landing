import leftPattern from "../assets/17.png";
import rightPattern from "../assets/Fill 519.png";
import emailIcon from "../assets/contact-email.svg";
import phoneIcon from "../assets/contact-phone.svg";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-12 lg:px-6 lg:pb-[8.25rem] lg:pt-[6.25rem]">
      <section className="mx-auto max-w-[75rem]">
        <div className="mx-auto max-w-[18.125rem] text-center sm:max-w-[35rem] lg:max-w-[52.875rem]">
          <h1 className="text-[1.375rem] font-bold leading-[1.2] tracking-[0.0125rem] text-[#203684] sm:text-[2.5rem] lg:text-[3.5rem] lg:tracking-[-0.0625rem] font-['Plus_Jakarta_Sans',sans-serif]">
            Let's Hear From You
          </h1>
          <p className="mt-2 text-[0.8125rem] font-normal leading-[150%] tracking-[0rem] text-[#47505b] sm:text-[1rem] lg:mt-[1.1875rem] lg:max-w-[45.875rem] lg:text-[1.25rem] lg:leading-[1.7] lg:tracking-[0rem] font-['Plus_Jakarta_Sans',sans-serif]">
            Our team of experts are ready to help. Please fill the form below to
            enable us serve you better.
          </p>
        </div>

        <section className="relative mx-auto mt-6 max-w-[72.4375rem] pt-6 sm:mt-10 sm:pt-14 lg:mt-[3rem] lg:h-[40.4375rem] lg:pt-0">
          <div className="absolute inset-x-0 bottom-0 h-[13.75rem] rounded-[1rem] bg-[#f4faff] sm:h-[21.25rem] lg:bottom-0 lg:left-[2.8125rem] lg:right-auto lg:h-[26.875rem] lg:w-[65.9375rem] lg:rounded-none" />

          <img
            src={leftPattern}
            alt=""
            className="pointer-events-none absolute top-2 left-1 w-[1.75rem] opacity-35 sm:left-5 sm:w-[2.25rem] lg:left-0 lg:top-[9.625rem] lg:h-[2.5rem] lg:w-[3rem] lg:rotate-[-18.92deg]"
          />

          <img
            src={rightPattern}
            alt=""
            className="pointer-events-none absolute top-2 right-1 w-[2rem] opacity-35 sm:right-5 sm:w-[2.625rem] lg:right-0 lg:top-[8.6875rem] lg:h-[3.8125rem] lg:w-[3.6875rem]"
          />

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative z-10 mx-auto w-full max-w-[18.125rem] rounded-[0.75rem] bg-white px-4 py-5 shadow-[0_0.625rem_1.875rem_rgba(36,71,113,0.04)] sm:max-w-[27.5rem] sm:rounded-[1rem] sm:px-8 sm:py-10 lg:h-[34.8125rem] lg:max-w-[36.5625rem] lg:rounded-none lg:px-[4.5625rem] lg:pb-0 lg:pt-[5.25rem]"
          >
            <label className="block text-[0.8125rem] font-medium text-[#5f5f5f] md:text-[1rem]">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="mt-1 h-[2.75rem] w-full rounded-[0.3125rem] border border-[#e7e5ea] px-3 text-[0.8125rem] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[3rem] sm:px-[0.9375rem] sm:text-[0.875rem]"
                placeholder="Enter your full name"
              />
            </label>

            <label className="mt-3 block text-[0.8125rem] font-medium text-[#5f5f5f] sm:mt-[0.9375rem] md:text-[1rem]">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                className="mt-1 h-[2.75rem] w-full rounded-[0.3125rem] border border-[#e7e5ea] px-3 text-[0.8125rem] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[3rem] sm:px-[0.9375rem] sm:text-[0.875rem]"
                placeholder="Enter your email"
              />
            </label>

            <label className="mt-3 block text-[0.8125rem] font-medium text-[#5f5f5f] sm:mt-[0.9375rem] md:text-[1rem]">
              Message
              <textarea
                name="message"
                className="mt-1 h-[5.9375rem] w-full resize-none rounded-[0.3125rem] border border-[#e7e5ea] px-3 py-2 text-[0.8125rem] text-[#47505b] outline-none placeholder:text-[#bababa] focus:border-[#203684] sm:h-[7.6875rem] sm:px-[0.9375rem] sm:py-[0.625rem] sm:text-[0.875rem]"
                placeholder="Your Message"
              />
            </label>

            <button className="mt-5 h-[2.875rem] w-full rounded-[0.5rem] bg-[#203684] text-[0.8125rem] font-medium text-white transition hover:bg-[#172a6a] sm:mt-[1.875rem] sm:h-[3.5rem] sm:rounded-[0.625rem] sm:text-[0.875rem]">
              Get Started
            </button>
          </form>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 md:mt-[8.25rem] md:grid-cols-2 md:gap-[1.875rem]">
          <article className="flex w-full min-h-[5.625rem] items-start justify-center gap-3 rounded-none border border-[#e7e5ea] bg-white p-4 text-left sm:min-h-[6.875rem] sm:gap-4 sm:p-5 md:h-[8.5rem] md:min-h-0 md:items-center md:gap-8 md:p-[0.9375rem]">
            <img src={emailIcon} alt="" className="mt-1 h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:mt-0 md:h-10 md:w-10" />
            <div className="flex-1">
              <h2 className="text-[1rem] font-medium leading-none text-black sm:text-[1.125rem] md:text-[1.5rem]">
                Email
              </h2>
              <p className="mt-1 flex flex-col text-[0.75rem] leading-5 text-[#666] sm:text-[0.8125rem] sm:leading-6 md:text-[1rem] md:leading-normal">
                <a
                  href="mailto:info@schoolcube.net"
                  className="transition hover:text-[#203684] hover:underline"
                >
                  info@schoolcube.net
                </a>
                <a
                  href="mailto:support@schoolcube.net"
                  className="transition hover:text-[#203684] hover:underline"
                >
                  support@schoolcube.net
                </a>
              </p>
            </div>
          </article>

          <article className="flex w-full min-h-[5.625rem] items-start justify-center gap-3 rounded-none border border-[#e7e5ea] bg-white p-4 text-left sm:min-h-[6.875rem] sm:gap-4 sm:p-5 md:h-[8.5rem] md:min-h-0 md:items-center md:gap-8 md:p-[0.9375rem]">
            <img src={phoneIcon} alt="" className="mt-1 h-7 w-7 shrink-0 sm:h-8 sm:w-8 md:mt-0 md:h-10 md:w-10" />
            <div className="flex-1">
              <h2 className="text-[1rem] font-medium leading-none text-black sm:text-[1.125rem] md:text-[1.5rem]">
                Phone
              </h2>
              <p className="mt-1 flex flex-col text-[0.75rem] leading-5 text-[#666] sm:text-[0.8125rem] sm:leading-6 md:text-[1rem] md:leading-normal">
                <a
                  href="tel:+2347053944592"
                  className="transition hover:text-[#203684] hover:underline"
                >
                  (+234)705–394–4592
                </a>
                <a
                  href="tel:+2347053944594"
                  className="transition hover:text-[#203684] hover:underline"
                >
                  (+234)705–394–4594
                </a>
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
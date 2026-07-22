import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white px-6 pb-16 pt-8 md:pb-[108px] md:pt-[46px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[846px] text-center">
          <h1 className="text-[28px] font-bold leading-[1.3] tracking-[0.4px] text-[#203684] md:text-[42px] md:leading-[1.39] md:text-[56px]">
            Let's Hear From You
          </h1>
          <p className="mt-3 text-[14px] leading-[1.6] tracking-[0.3px] text-[#47505b] md:mt-[19px] md:text-[16px] md:leading-[1.7] md:text-[20px]">
            Our team of experts are ready to help. Please fill the form below to
            enable us serve you better.
          </p>
        </div>

        <section className="relative mx-auto mt-10 max-w-[1076px] pt-16 md:mt-[84px] md:pt-[176px]">
          <div className="absolute inset-x-0 bottom-0 h-[412px] bg-[#f0f8ff]" />
          <span
            className="absolute left-[-16px] top-[90px] hidden h-12 w-12 rounded-full border-[3px] border-[#339bfe] border-r-transparent md:left-[-39px] md:top-[145px] md:block"
            aria-hidden="true"
          />
          <span
            className="absolute right-[-16px] top-[70px] hidden h-12 w-12 rounded-full border-[3px] border-[#339bfe] border-l-transparent md:right-[-54px] md:top-[116px] md:block"
            aria-hidden="true"
          />
          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative z-10 mx-auto w-full max-w-[558px] bg-white px-6 py-8 shadow-[0_10px_30px_rgba(35,54,132,0.04)] md:px-[70px] md:py-[72px]"
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
            <button className="mt-7 h-[54px] w-full rounded-[8px] bg-[#203684] text-[14px] font-medium text-white transition hover:bg-[#172a6a]">
              Get Started
            </button>
          </form>
        </section>

        <section className="mt-16 grid gap-4 md:mt-[126px] md:grid-cols-2 md:gap-7">
          <article className="flex min-h-[110px] flex-col items-center gap-4 border border-[#e0e3e8] px-6 py-6 text-center md:min-h-[130px] md:flex-row md:justify-center md:gap-8 md:px-8 md:py-7 md:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]">
              <Mail size={21} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[20px] font-medium text-[#111] md:text-[24px]">Email</h2>
              <p className="mt-1 text-[14px] leading-6 text-[#94979d] md:text-[16px] md:leading-7">
                info@schoolcube.net
                <br />
                support@schoolcube.net
              </p>
            </div>
          </article>
          <article className="flex min-h-[110px] flex-col items-center gap-4 border border-[#e0e3e8] px-6 py-6 text-center md:min-h-[130px] md:flex-row md:justify-center md:gap-8 md:px-8 md:py-7 md:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]">
              <Phone size={21} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-[20px] font-medium text-[#111] md:text-[24px]">Phone</h2>
              <p className="mt-1 text-[14px] leading-6 text-[#94979d] md:text-[16px] md:leading-7">
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
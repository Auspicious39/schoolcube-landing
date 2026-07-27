import { Mail, Phone } from "lucide-react";

const ContactPage = () => (
  <main className="overflow-hidden bg-white px-5 pb-[106px] pt-[53px] sm:px-6 lg:pt-[58px]">
    <section className="mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-[720px] text-center">
        <h1 className="text-[42px] font-bold leading-[1.18] tracking-[-1.8px] text-[#203684] sm:text-[52px] lg:text-[56px]">
          Let’s Hear From You
        </h1>
        <p className="mx-auto mt-4 max-w-[695px] text-[16px] leading-[1.55] tracking-[-0.2px] text-[#4c4c4c] sm:text-[18px] lg:text-[20px]">
          Our team of experts are ready to help. Please fill the form below to enable us serve you better.
        </p>
      </div>

      <div className="relative mx-auto mt-[62px] max-w-[1010px] pt-[196px] lg:mt-[67px] lg:pt-[202px]">
        <div className="h-[412px] bg-[#f1f9ff]" />

        <span className="pointer-events-none absolute left-[-35px] top-[143px] h-[44px] w-[50px] rotate-[28deg] rounded-tl-[45px] border-l-[4px] border-t-[4px] border-[#339bfe]" />
        <span className="pointer-events-none absolute left-[-6px] top-[148px] h-[32px] w-[36px] rotate-[40deg] rounded-tl-[36px] border-l-[4px] border-t-[4px] border-[#339bfe]" />
        <span className="pointer-events-none absolute right-[-56px] top-[124px] h-[58px] w-[58px] rounded-full border-[3px] border-[#339bfe]" />
        <span className="pointer-events-none absolute right-[-46px] top-[130px] h-[48px] w-[48px] rounded-full border-l-[3px] border-[#339bfe]" />

        <form className="absolute left-1/2 top-0 w-[min(560px,calc(100%_-_36px))] -translate-x-1/2 bg-white px-7 py-[68px] shadow-[0_12px_30px_rgba(32,54,132,0.045)] sm:px-[70px]" onSubmit={(event) => event.preventDefault()}>
          <label className="block">
            <span className="mb-1.5 block text-[14px] font-medium text-[#585858]">Name</span>
            <input type="text" name="name" placeholder="Enter your full name" className="h-[46px] w-full rounded-[5px] border border-[#e2e2e8] px-[14px] text-[13px] text-[#3c3c3c] outline-none placeholder:text-[#c6c6c9] focus:border-[#339bfe]" />
          </label>
          <label className="mt-[15px] block">
            <span className="mb-1.5 block text-[14px] font-medium text-[#585858]">Email</span>
            <input type="email" name="email" placeholder="Enter your email" className="h-[46px] w-full rounded-[5px] border border-[#e2e2e8] px-[14px] text-[13px] text-[#3c3c3c] outline-none placeholder:text-[#c6c6c9] focus:border-[#339bfe]" />
          </label>
          <label className="mt-[15px] block">
            <span className="mb-1.5 block text-[14px] font-medium text-[#585858]">Message</span>
            <textarea name="message" rows={5} placeholder="Your Message" className="h-[118px] w-full resize-none rounded-[5px] border border-[#e2e2e8] px-[14px] py-3 text-[13px] text-[#3c3c3c] outline-none placeholder:text-[#c6c6c9] focus:border-[#339bfe]" />
          </label>
          <button type="submit" className="mt-[28px] h-[54px] w-full rounded-[8px] bg-[#263e93] text-[13px] font-medium text-white transition hover:bg-[#203684]">
            Get Started
          </button>
        </form>
      </div>

      <div className="mx-auto mt-[126px] grid max-w-[1200px] gap-7 md:grid-cols-2 md:gap-[28px]">
        <article className="flex min-h-[130px] items-center justify-center gap-8 border border-[#e1e2e6] px-6 py-8 sm:px-10">
          <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#eef7ff] text-[#203e94]">
            <Mail size={21} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="text-[23px] font-medium leading-7 text-black">Email</h2>
            <p className="mt-1 text-[14px] leading-6 text-[#888]">info@schoolcube.net<br />support@schoolcube.net</p>
          </div>
        </article>
        <article className="flex min-h-[130px] items-center justify-center gap-8 border border-[#e1e2e6] px-6 py-8 sm:px-10">
          <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#eef7ff] text-[#203e94]">
            <Phone size={20} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="text-[23px] font-medium leading-7 text-black">Phone</h2>
            <p className="mt-1 text-[14px] leading-6 text-[#888]">(+234)705-394-4592<br />(+234)705-394-4594</p>
          </div>
        </article>
      </div>
    </section>
  </main>
);

export default ContactPage;

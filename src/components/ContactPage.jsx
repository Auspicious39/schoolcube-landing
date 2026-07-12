import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white px-6 pb-[108px] pt-[46px]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[846px] text-center">
          <h1 className="text-[42px] font-bold leading-[1.39] tracking-[0.4px] text-[#203684] md:text-[56px]">Let’s Hear From You</h1>
          <p className="mt-[19px] text-[16px] leading-[1.7] tracking-[0.3px] text-[#47505b] md:text-[20px]">Our team of experts are ready to help. Please fill the form below to enable us serve you better.</p>
        </div>
        <section className="relative mx-auto mt-[84px] max-w-[1076px] pt-[176px]">
          <div className="absolute inset-x-0 bottom-0 h-[412px] bg-[#f0f8ff]" />
          <span className="absolute left-[-39px] top-[145px] h-12 w-12 rounded-full border-[3px] border-[#339bfe] border-r-transparent" aria-hidden="true" />
          <span className="absolute right-[-54px] top-[116px] h-12 w-12 rounded-full border-[3px] border-[#339bfe] border-l-transparent" aria-hidden="true" />
          <form onSubmit={(event) => event.preventDefault()} className="relative z-10 mx-auto w-full max-w-[558px] bg-white px-[70px] py-[72px] shadow-[0_10px_30px_rgba(35,54,132,0.04)]">
            <label className="block text-[16px] font-medium text-[#5c5f66]">Name<input className="mt-2 h-[47px] w-full rounded-[6px] border border-[#e1e3e8] px-[14px] text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]" placeholder="Enter your full name" /></label>
            <label className="mt-4 block text-[16px] font-medium text-[#5c5f66]">Email<input type="email" className="mt-2 h-[47px] w-full rounded-[6px] border border-[#e1e3e8] px-[14px] text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]" placeholder="Enter your email" /></label>
            <label className="mt-4 block text-[16px] font-medium text-[#5c5f66]">Message<textarea className="mt-2 h-[118px] w-full resize-none rounded-[6px] border border-[#e1e3e8] px-[14px] py-3 text-[14px] text-[#47505b] outline-none placeholder:text-[#c8cbd1] focus:border-[#203684]" placeholder="Your Message" /></label>
            <button className="mt-7 h-[54px] w-full rounded-[8px] bg-[#203684] text-[14px] font-medium text-white transition hover:bg-[#172a6a]">Get Started</button>
          </form>
        </section>
        <section className="mt-[126px] grid gap-7 md:grid-cols-2">
          <article className="flex min-h-[130px] items-center justify-center gap-8 border border-[#e0e3e8] px-8 py-7"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]"><Mail size={21} strokeWidth={1.8} /></span><div><h2 className="text-[24px] font-medium text-[#111]">Email</h2><p className="mt-1 text-[16px] leading-7 text-[#94979d]">info@schoolcube.net<br />support@schoolcube.net</p></div></article>
          <article className="flex min-h-[130px] items-center justify-center gap-8 border border-[#e0e3e8] px-8 py-7"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f8ff] text-[#203684]"><Phone size={21} strokeWidth={1.8} /></span><div><h2 className="text-[24px] font-medium text-[#111]">Phone</h2><p className="mt-1 text-[16px] leading-7 text-[#94979d]">(+234)705–394–4592<br />(+234)705–394–4594</p></div></article>
        </section>
      </section>
    </main>
  );
}

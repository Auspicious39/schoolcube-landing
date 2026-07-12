import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 pb-8 pt-10 md:px-6 md:pb-[87px] md:pt-[79px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-5 md:gap-12 md:grid-cols-[1.6fr_0.55fr_0.7fr_0.7fr]">
          <img src={logo} alt="Schoolcube" className="w-[100px] md:w-[195px]" />

          <div>
            <h3 className="mb-1.5 text-[9px] font-medium text-[#222222] md:mb-4 md:text-[14px]">
              Address
            </h3>
            <p className="text-[8px] leading-3 text-[#8a8a8a] md:text-[12px] md:leading-5">
              12 Ajisafe street, Ikeja <br /> GRA
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-[9px] font-medium text-[#222222] md:mb-4 md:text-[14px]">
              Contact
            </h3>
            <p className="text-[8px] leading-3 text-[#8a8a8a] md:text-[12px] md:leading-5">
              info@schoolcube.net <br />
              support@schoolcube.
              <br />
              net
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-[9px] font-medium text-[#222222] md:mb-4 md:text-[14px]">
              Phone
            </h3>
            <p className="text-[8px] leading-3 text-[#8a8a8a] md:text-[12px] md:leading-5">
              +234-012914298. <br />
              +234-705-394-4592 <br />
              +234-705-394-4594 <br />
              +1-888-705-0968
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e5e5e5] pt-4 md:mt-[76px] md:pt-7">
          <div className="flex flex-col gap-3 text-[7px] text-[#5f5f5f] md:flex-row md:items-center md:justify-between md:gap-6 md:text-[11px]">
            <p>Copyright © 2026 Revocube. All Rights Reserved</p>

            <div className="flex gap-5 md:gap-8">
              <a href="/">Facebook</a>
              <a href="/">Instagram</a>
              <a href="/">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

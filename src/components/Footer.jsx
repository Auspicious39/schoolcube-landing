import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 pb-[87px] pt-[79px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[1.6fr_0.55fr_0.7fr_0.7fr]">
          <img src={logo} alt="Schoolcube" className="w-[195px]" />

          <div>
            <h3 className="mb-4 text-[14px] font-medium text-[#222222]">
              Address
            </h3>
            <p className="text-[12px] leading-5 text-[#8a8a8a]">
              12 Ajisafe street, Ikeja <br /> GRA
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[14px] font-medium text-[#222222]">
              Contact
            </h3>
            <p className="text-[12px] leading-5 text-[#8a8a8a]">
              info@schoolcube.net <br />
              support@schoolcube.
              <br />
              net
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[14px] font-medium text-[#222222]">
              Phone
            </h3>
            <p className="text-[12px] leading-5 text-[#8a8a8a]">
              +234-012914298. <br />
              +234-705-394-4592 <br />
              +234-705-394-4594 <br />
              +1-888-705-0968
            </p>
          </div>
        </div>

        <div className="mt-[76px] border-t border-[#e5e5e5] pt-7">
          <div className="flex flex-col gap-6 text-[11px] text-[#5f5f5f] md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2026 Revocube. All Rights Reserved</p>

            <div className="flex gap-8">
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

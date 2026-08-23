import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#BEDFFE1F] px-6 pb-[31px] pt-[31px] md:h-[369px] md:bg-[linear-gradient(79.28deg,rgba(190,223,254,0.06),#bdc8f0)] md:px-6 md:pb-[12px] md:pt-[79px]">
      <div className="w-full md:px-[6.25%]">
        <div className="md:hidden">
          <img src={logo} alt="Schoolcube" className="mb-[35px] w-[167px]" />

          <div className="mb-[30px]">
            <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
              Address
            </h3>

            <p className="text-[14px] leading-[18px] font-medium text-[#666666]">
              12 Ajisafe street, Ikeja GRA
            </p>
          </div>

          <div className="mb-[30px]">
            <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
              Contact
            </h3>

            <p className="text-[14px] leading-[24px] font-medium text-[#424242]">
              info@schoolcube.net
              <br />
              support@schoolcube.net
            </p>
          </div>

          <div className="mb-[30px]">
            <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
              Phone
            </h3>

            <p className="text-[14px] leading-[24px] font-medium text-[#424242]">
              +234-012914298
              <br />
              +234-705-394-4592
              <br />
              +234-705-394-4594
              <br />
              +1-888-705-0968
            </p>
          </div>

          <div className="mb-[30px] flex gap-[31px] text-[14px] font-medium text-[#424242]">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Linkedin</a>
          </div>

          <div className="border-t border-[#e5e5e5] pt-[16px]">
            <p className="text-[14px] text-[#424242] font-medium">
              Copyright © 2026 Revocube. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid gap-5 md:gap-12 md:grid-cols-[1.6fr_0.55fr_0.7fr_0.7fr]">
            <img src={logo} alt="Schoolcube" className="w-[195px]" />

            <div>
              <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
                Address
              </h3>

              <p className="text-[16px] leading-5 text-[#424242]">
                12 Ajisafe street, Ikeja <br /> GRA
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
                Contact
              </h3>

              <p className="text-[16px] leading-5 text-[#424242]">
                info@schoolcube.net <br />
                support@schoolcube.net
              </p>
            </div>

            <div className="text-right">
              <h3 className="mb-4 text-[18px]  font-medium text-[#424242]">
                Phone
              </h3>

              <p className="text-[16px] leading-5 text-[#424242]">
                +234-012914298 <br />
                +234-705-394-4592 <br />
                +234-705-394-4594 <br />
                +1-888-705-0968
              </p>
            </div>
          </div>

          <div className="mt-[76px] border-t border-[#e5e5e5] pt-7">
            <div className="flex items-center justify-between text-[14px] text-[#000000] font-medium">
              <p>Copyright © 2026 Revocube. All Rights Reserved</p>

              <div className="flex gap-8 text-[#424242]">
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

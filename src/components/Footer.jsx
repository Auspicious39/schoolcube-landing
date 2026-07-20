import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 pb-8 pt-10 md:px-6 md:pb-[87px] md:pt-[79px]">
      <div className="mx-auto max-w-[1200px]">

        <div className="md:hidden">
          <img
            src={logo}
            alt="Schoolcube"
            className="mb-10 w-[100px]"
          />

          <div className="mb-8">
            <h3 className="mb-4 text-[16px] font-medium text-[#424242]">
              Address
            </h3>

            <p className="text-[14px] leading-8 text-[#666666]">
              12 Ajisafe street, Ikeja
              <br />
              GRA
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
              Contact
            </h3>

            <p className="text-[14px] leading-8 text-[#424242]">
              info@schoolcube.net
              <br />
              support@schoolcube.net
            </p>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-[18px] font-medium text-[#424242]">
              Phone, 
            </h3>

            <p className="text-[14px] leading-8 text-[#424242]">
              +234-012914298
              <br />
              +234-705-394-4592
              <br />
              +234-705-394-4594
              <br />
              +1-888-705-0968
            </p>
          </div>

          <div className="mb-8 flex gap-10 text-[14px] font-semi-bold text-[#424242]">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Linkedin</a>
          </div>

          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[14px] text-[#5f5f5f]">
              Copyright © 2026 Revocube. All Rights Reserved
            </p>
          </div>
        </div>


        <div className="hidden md:block">
          <div className="grid gap-5 md:gap-12 md:grid-cols-[1.6fr_0.55fr_0.7fr_0.7fr]">
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
                support@schoolcube.net
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-[16px] font-medium text-[#424242]">
                Phone
              </h3>

              <p className="text-[14px] leading-5 text-[#424242]">
                +234-012914298 <br />
                +234-705-394-4592 <br />
                +234-705-394-4594 <br />
                +1-888-705-0968
              </p>
            </div>
          </div>

          <div className="mt-[76px] border-t border-[#e5e5e5] pt-7">
            <div className="flex items-center justify-between text-[11px] text-[#424242]">
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
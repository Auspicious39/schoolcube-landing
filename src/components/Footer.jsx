import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#BEDFFE1F] px-6 pb-[1.9375rem] pt-[1.9375rem] md:h-[23.0625rem] md:bg-[linear-gradient(79.28deg,rgba(190,223,254,0.06),#bdc8f0)] md:px-6 md:pb-[0.75rem] md:pt-[4.9375rem]">
      <div className="w-full md:px-[6rem]">
        <div className="md:hidden">
          <img src={logo} alt="Schoolcube" className="mb-[2.1875rem] w-[10.4375rem] ml-[-0.5rem]"/>

          <div className="mb-[1.875rem]">
            <h3 className="mb-4 text-[1.125rem] font-medium text-[#424242]">
              Address
            </h3>

            <p className="text-[0.875rem] leading-[1.125rem] font-medium text-[#666666]">
              12 Ajisafe street, Ikeja GRA
            </p>
          </div>

          <div className="mb-[1.875rem]">
            <h3 className="mb-4 text-[1.125rem] font-medium text-[#424242]">
              Contact
            </h3>

            <a className="text-[0.875rem] leading-[1.5rem] font-medium text-[#424242]">
              info@schoolcube.net
              <br />
              support@schoolcube.net
            </a>
          </div>

          <div className="mb-[1.875rem]">
            <h3 className="mb-4 text-[1.125rem] font-medium text-[#424242]">
              Phone
            </h3>

            <p className="text-[0.875rem] leading-[1.5rem] font-medium text-[#424242]">
              +234-012914298
              <br />
              +234-705-394-4592
              <br />
              +234-705-394-4594
              <br />
              +1-888-705-0968
            </p>
          </div>

          <div className="mb-[1.875rem] flex gap-[1.9375rem] text-[0.875rem] font-medium text-[#424242]">
            <a href="https://www.facebook.com/schoolcubeportal">Facebook</a>
            <a href="https://www.instagram.com/school_revs">Instagram</a>
            <a href="https://www.linkedin.com/company/revocube-schoolrevs">Linkedin</a>
          </div>

          <div className="border-t border-[#e5e5e5] pt-[1rem]">
            <p className="text-[0.875rem] text-[#424242] font-medium">
              Copyright © 2026 Revocube. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid gap-5 md:gap-12 md:grid-cols-[1.6fr_0.55fr_0.7fr_0.7fr]">
            <img src={logo} alt="Schoolcube" className="w-[12.1875rem] ml-[-2rem]" />

            <div>
              <h3 className="mb-4 text-[1.125rem] font-medium text-[#424242]">
                Address
              </h3>

              <p className="text-[1rem] leading-5 text-[#424242]">
                12 Ajisafe street, Ikeja <br /> GRA
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-[1.125rem] font-medium text-[#424242]">
                Contact
              </h3>

              <p className="text-[1rem] leading-5 text-[#424242]">
                info@schoolcube.net <br />
                support@schoolcube.net
              </p>
            </div>

            <div className="text-right">
              <h3 className="mb-4 text-[1.125rem]  font-medium text-[#424242]">
                Phone
              </h3>

              <p className="text-[1rem] leading-5 text-[#424242]">
                +234-012914298 <br />
                +234-705-394-4592 <br />
                +234-705-394-4594 <br />
                +1-888-705-0968
              </p>
            </div>
          </div>

          <div className="mt-[4.75rem] border-t border-[#e5e5e5] pt-7">
            <div className="flex items-center justify-between text-[0.875rem] text-[#000000] font-medium">
              <p className="ml-[-1.4rem]">
              Copyright © 2026 Revocube. All Rights Reserved</p>

              <div className="flex gap-8 text-[#424242]">
                <a href="https://www.facebook.com/schoolcubeportal">Facebook</a>
                <a href="https://www.instagram.com/school_revs">Instagram</a>
                <a href="https://www.linkedin.com/company/revocube-schoolrevs">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  const mobileNavClass = ({ isActive }) =>
    `mb-[1.25rem] text-[1.125rem] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8 ${
      isActive
        ? "font-semibold text-[#203684] underline decoration-2 underline-offset-8"
        : "text-[#000000]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 h-[4rem] bg-white px-6 py-0 transition-shadow duration-200 md:mt-2 md:h-[4.9375rem] md:px-10 md:py-[0.375rem] ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="flex h-[3.5625rem] w-[91%] mx-auto items-center justify-between py-5 md:h-[4.1875rem]">
        <Link to="/" onClick={scrollToTop}>
          <img
            src={logo}
            alt="Schoolcube"
            className="ml-[-1.25rem] w-[10.25rem] object-contain sm:w-[10.25rem] md:w-[12.125rem]"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-[1rem] font-medium text-black lg:flex">
          <NavLink
            end
            to="/"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            onClick={scrollToTop}
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="https://schoolrevs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap hover:text-[#203684]"
            onClick={scrollToTop}
          >
            SchoolRevs Suite  
          </NavLink>
        </nav>

        <Link className="hidden rounded-[0.3125rem] bg-[#203684] md:mr-[-0.6rem] px-[1.875rem] py-[0.9375rem] text-[1rem] font-semibold text-white transition-transform duration-200 active:scale-95 lg:block">
          Get Started
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-md text-[#203684] lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="9" y1="18" x2="15" y2="18" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          <div className="absolute right-0 top-0 max-h-dvh w-full overflow-y-auto bg-white px-[2rem] py-[1.75rem] shadow-xl">
            <div className="mb-10 flex justify-end">
              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#203684]"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col font-normal">
              <NavLink
                end
                to="/"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/features"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Features
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Pricing
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Contact
              </NavLink>

              <NavLink
                to="https://schoolrevs.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mb-[2.5rem] text-[1.125rem] text-[#000000] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                SchoolRevs Suite
              </NavLink>

              <Link
                onClick={closeMobileMenu}
                className="flex h-[3rem] w-full  items-center justify-center rounded-[0.3125rem] bg-[#203684] text-[1rem] font-semibold text-white"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
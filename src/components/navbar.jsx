import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileNavClass = ({ isActive }) =>
    `mb-[20px] text-[18px] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8 ${
      isActive
        ? "font-semibold text-[#203684] underline decoration-2 underline-offset-8"
        : "text-[#000000]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-2 md:px-3 md:py-[15px]">
      <div className="mx-auto flex h-11 max-w-[1209px] items-center justify-between md:h-[67px]">
        <Link to="/">
          <img
            src={logo}
            alt="Schoolcube"
            className="w-[164px] object-contain sm:w-[164px] md:w-[194px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#4b5568] md:flex">
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"
            }
          >
            Contact
          </NavLink>

          <Link className="hover:text-[#203684]">SchoolRevs Suite</Link>
        </nav>

        <Link className="hidden rounded-[5px] bg-[#203684] px-[30px] py-[15px] text-[16px] font-semibold text-white md:block">
          Get Started
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-md text-[#203684] md:hidden"
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={closeMobileMenu}
          />

          <div className="absolute right-0 top-0 h-screen w-full bg-white px-[32px] py-[28px] shadow-xl">
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

              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className="mb-[20px] text-[18px] text-[#000000] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Blog
              </Link>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Contact
              </NavLink>

              <Link
                to="/schoolrevs"
                onClick={closeMobileMenu}
                className="mb-[40px] text-[18px] text-[#000000] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                SchoolRevs Suite
              </Link>

              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="flex h-[48px] w-full items-center justify-center rounded-[5px] bg-[#203684] text-[16px] font-semibold text-white"
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

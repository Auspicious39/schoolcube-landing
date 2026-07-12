import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative z-40 bg-white px-4 py-2 md:px-6 md:py-[45px]">
      <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between md:h-[67px]">
      <Link to="/">
        <img src={logo} alt="Schoolcube" className="w-[80px] object-contain sm:w-[145px] md:w-[170px]" />
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#4b5568] md:flex">
        <NavLink end to="/" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Home</NavLink>
        <NavLink to="/features" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Features</NavLink>
        <NavLink to="/pricing" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Pricing</NavLink>
        {/* <Link to="/blog" className="hover:text-[#203684]">Blog</Link> */}
        <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>
          Contact
        </NavLink>
        <Link to="/schoolrevs" className="hover:text-[#203684]">
          SchoolRevs Suite
        </Link>
      </nav>

      <Link
        to="/signup"
        className="hidden rounded-[4px] bg-[#203684] px-7 py-4 text-[14px] font-semibold text-white md:block"
      >
        Get Started
      </Link>

      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-md text-[#203684] md:hidden"
      >
        <Menu size={18} strokeWidth={2} />
      </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex min-h-screen flex-col bg-white px-6 pb-8 pt-5 md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Schoolcube" className="w-[145px] object-contain" />
            </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e6f1] text-[#203684]"
          >
            <X size={24} strokeWidth={2} />
          </button>
          </div>

          <nav className="mt-16 flex flex-col border-t border-[#edf0f5] text-[18px] font-medium text-[#1f1f1f]">
            <NavLink end to="/" onClick={closeMobileMenu} className={({ isActive }) => `border-b border-[#edf0f5] py-5 ${isActive ? "font-bold text-[#203684]" : ""}`}>Home</NavLink>
            <NavLink to="/features" onClick={closeMobileMenu} className={({ isActive }) => `border-b border-[#edf0f5] py-5 ${isActive ? "font-bold text-[#203684]" : ""}`}>Features</NavLink>
            <NavLink to="/pricing" onClick={closeMobileMenu} className={({ isActive }) => `border-b border-[#edf0f5] py-5 ${isActive ? "font-bold text-[#203684]" : ""}`}>Pricing</NavLink>
            <Link to="/blog" onClick={closeMobileMenu} className="border-b border-[#edf0f5] py-5">Blog</Link>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => `border-b border-[#edf0f5] py-5 ${isActive ? "font-bold text-[#203684]" : ""}`}>Contact</NavLink>
            <Link to="/schoolrevs" onClick={closeMobileMenu} className="border-b border-[#edf0f5] py-5">SchoolRevs Suite</Link>
          </nav>

          <Link
            to="/signup"
            onClick={closeMobileMenu}
            className="mt-auto flex h-[52px] w-full items-center justify-center rounded-[5px] bg-[#203684] text-[16px] font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

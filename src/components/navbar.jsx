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
        <Link to="/blog" className="hover:text-[#203684]">Blog</Link>
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
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center text-white"
          >
            <X size={30} strokeWidth={1.8} />
          </button>

          <nav className="absolute inset-x-10 top-[18%] flex flex-col items-center gap-7 text-xl font-medium text-white">
            <NavLink end to="/" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/features" onClick={closeMobileMenu}>Features</NavLink>
            <NavLink to="/pricing" onClick={closeMobileMenu}>Pricing</NavLink>
            <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            <Link to="/schoolrevs" onClick={closeMobileMenu}>SchoolRevs Suite</Link>
          </nav>

          <Link
            to="/signup"
            onClick={closeMobileMenu}
            className="absolute bottom-0 left-1/2 flex h-[74px] w-[calc(100%_-_96px)] -translate-x-1/2 items-center justify-center rounded-t-[12px] bg-[#293f91] text-[24px] font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

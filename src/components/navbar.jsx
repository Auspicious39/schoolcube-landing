import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white px-6 py-[45px]">
      <div className="mx-auto flex h-[67px] max-w-[1200px] items-center justify-between">
      <Link to="/">
        <img src={logo} alt="Schoolcube" className="w-[170px] object-contain" />
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#4b5568] md:flex">
        <NavLink end to="/" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Home</NavLink>
        <NavLink to="/features" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Features</NavLink>
        <NavLink to="/pricing" className={({ isActive }) => isActive ? "font-bold text-[#203684]" : "hover:text-[#203684]"}>Pricing</NavLink>
        <Link to="/contact" className="hover:text-[#203684]">
          Contact
        </Link>
        <Link to="/schoolrevs" className="hover:text-[#203684]">
          SchoolRevs Suite
        </Link>
      </nav>

      <Link
        to="/signup"
        className="rounded-[4px] bg-[#203684] px-7 py-4 text-[14px] font-semibold text-white"
      >
        Get Started
      </Link>
      </div>
    </header>
  );
};

export default Navbar;

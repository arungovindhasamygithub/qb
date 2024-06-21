import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white to-blue-500 shadow-md z-50">
      <div className="w-full flex items-center justify-between p-5">
        <Link to="/" className="h-16">
          <img src={Logo} alt="logo" className="h-16" />
        </Link>
        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden text-3xl" onClick={handleMenuToggle}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        {/* Desktop navigation links */}
        <ul className="hidden md:flex items-center gap-8 font-poppins">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks setOpen={setOpen} />
          <li>
            <Link to="/workshop" className="py-7 px-3 inline-block">
              Workshop
            </Link>
          </li>
          <li>
            <Link to="/internship" className="py-7 px-3 inline-block">
              Internship
            </Link>
          </li>
          <li>
            <Link to="/placement" className="py-7 px-3 inline-block">
              Placement
            </Link>
          </li>
          <li>
            <Link to="/robotics" className="py-7 px-3 inline-block">
              Robotics
            </Link>
          </li>
        </ul>
        {/* Button component on desktop */}
        <div className="hidden md:block">
          <Button />
        </div>
      </div>
      {/* Mobile nav */}
      <ul
        className={`md:hidden bg-blue-500 fixed w-full top-16 left-0 ${
          open ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/"
            className="block py-3 px-4 text-white"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
        </li>
        <NavLinks setOpen={setOpen} />
        <li>
          <Link
            to="/workshop"
            className="block py-3 px-4 text-white"
            onClick={handleMenuToggle}
          >
            Workshop
          </Link>
        </li>
        <li>
          <Link
            to="/internship"
            className="block py-3 px-4 text-white"
            onClick={handleMenuToggle}
          >
            Internship
          </Link>
        </li>
        <li>
          <Link
            to="/placement"
            className="block py-3 px-4 text-white"
            onClick={handleMenuToggle}
          >
            Placement
          </Link>
        </li>
        <li>
          <Link
            to="/robotics"
            className="block py-3 px-4 text-white"
            onClick={handleMenuToggle}
          >
            Robotics
          </Link>
        </li>
        {/* Button component on mobile */}
        <li className="pt-4">
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

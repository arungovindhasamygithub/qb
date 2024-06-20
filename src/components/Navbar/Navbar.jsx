import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white to-blue-500 shadow-md z-50">
      <div className="w-full flex items-center justify-between p-5">
        <a href="/" className="h-16">
          <img src={Logo} alt="logo" className="h-16" />
        </a>
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <ul className="hidden md:flex items-center gap-8 font-poppins">
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <NavLinks setOpen={setOpen} />
          <li>
            <a href="/workshop" className="py-7 px-3 inline-block">
              Workshop
            </a>
          </li>
          <li>
            <a href="/internship" className="py-7 px-3 inline-block">
              Internship
            </a>
          </li>
          <li>
            <a href="/placement" className="py-7 px-3 inline-block">
              Placement
            </a>
          </li>
          <li>
            <a href="/robotics" className="py-7 px-3 inline-block">
              Robotics
            </a>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button />
        </div>
      </div>
      {/* Mobile nav */}
      <ul
        className={`md:hidden bg-blue-500 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-50 ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <li>
          <a href="/" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <NavLinks setOpen={setOpen} />
        <li>
          <a href="/workshop" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Workshop
          </a>
        </li>
        <li>
          <a href="/internship" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Internship
          </a>
        </li>
        <li>
          <a href="/placement" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Placement
          </a>
        </li>
        <li>
          <a href="/robotics" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Robotics
          </a>
        </li>
        <div className="py-5">
          <Button />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

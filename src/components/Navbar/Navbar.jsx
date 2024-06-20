import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarStyle = {
    background: "linear-gradient(to right, #FFFFFF, #007bff)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    width: "100%",
  };

  return (
    <nav className="fixed top-0 z-50" style={navbarStyle}>
      <div className="w-full flex items-center justify-between p-5">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-16" />
        </Link>
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <ul className="hidden md:flex items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/qb" className="py-7 px-3 inline-block">
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
          <Link to="/" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <NavLinks setOpen={setOpen} />
        <li>
          <Link to="/workshop" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Workshop
          </Link>
        </li>
        <li>
          <Link to="/internship" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Internship
          </Link>
        </li>
        <li>
          <Link to="/placement" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Placement
          </Link>
        </li>
        <li>
          <Link to="/robotics" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
            Robotics
          </Link>
        </li>
        <div className="py-5">
          <Button />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

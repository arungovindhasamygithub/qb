import React, { useState } from 'react';
import Log from '../assets/Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center h-20">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#robofest">RoboFest 2024</NavLink>
            <NavLink href="#courses">Our Courses</NavLink>
        <NavLink href="#why-robotics">Why Robotics</NavLink>
        <NavLink href="#workshops">Our Workshops</NavLink>
        <NavLink href="#faq">Contact</NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <ion-icon name={isOpen ? "close" : "menu"} size="large"></ion-icon>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-800 flex flex-col items-center md:hidden">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#robofest">RoboFest 2024</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#why-robotics">Why Robotics</NavLink>
          <NavLink href="#courses">Our Courses</NavLink>
          <NavLink href="#workshops">Our Workshops</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="hover:underline text-white py-2 px-4 block md:inline-block">
      {children}
    </a>
  );
};

const Logo = () => {
  return (
    <img
      src={Log}
      alt="Logo"
      className="w-40 h-auto"
    />
  );
};

export default Navigation;

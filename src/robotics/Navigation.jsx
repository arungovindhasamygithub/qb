import React from 'react';
import Log from '../assets/Logo.png';

const Navigation = () => {
  return (
    <nav className="bg-purple-800 p-4 flex justify-between  h-50">
      <div>
        <Logo />
      </div>
      <div className="flex space-x-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#robofest">RoboFest 2024</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
        <NavLink href="#why-robotics">Why Robotics</NavLink>
        <NavLink href="#courses">Our Courses</NavLink>
        <NavLink href="#workshops">Our Workshops</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="hover:underline text-white">
      {children}
    </a>
  );
};

const Logo = () => {
  return (
    <img
      src={Log}
      alt="Logo"
      className="w-60 h-full"
      width={128}
      height={32}
    />
  );
};

export default Navigation;

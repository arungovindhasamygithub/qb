import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Log from '../assets/Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSoftwareClick = () => {
    setIsOpen(false);
    navigate('/'); 
  };

  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center h-20 fixed w-full z-10">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink to="home" offset={-80}>Home</NavLink>
        <NavLink to="robofest" offset={-80}>RoboFest 2024</NavLink>
        <NavLink to="courses" offset={-80}>Our Courses</NavLink>
        <NavLink to="why-robotics" offset={-80}>Why Robotics</NavLink>
        <NavLink to="workshops" offset={-80}>Our Workshops</NavLink>
        <NavLink to="contact" offset={-80}>Contact</NavLink>
        <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <ion-icon name={isOpen ? "close" : "menu"} size="large"></ion-icon>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-800 flex flex-col items-center md:hidden">
          <NavLink to="home" offset={-80} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="robofest" offset={-80} onClick={() => setIsOpen(false)}>RoboFest 2024</NavLink>
          <NavLink to="courses" offset={-80} onClick={() => setIsOpen(false)}>Our Courses</NavLink>
          <NavLink to="why-robotics" offset={-80} onClick={() => setIsOpen(false)}>Why Robotics</NavLink>
          <NavLink to="workshops" offset={-80} onClick={() => setIsOpen(false)}>Our Workshops</NavLink>
          <NavLink to="contact" offset={-80} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, offset, children, onClick }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={offset}
      className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Logo = () => {
  return (
    <img
      src={Log}
      alt="Logo"
      className="w-48 h-auto"
    />
  );
};

export default Navigation;

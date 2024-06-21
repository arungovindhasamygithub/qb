import React, { useState, useEffect } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate for navigation
import Log from '../assets/Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      const sections = ['home', 'robofest', 'courses', 'why-robotics', 'workshops', 'contact'];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.hash.substring(1));
  }, [location]);

  const handleSoftwareClick = () => {
    setIsOpen(false);
    navigate('/'); // Navigate to home route on software click
  };

  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center h-20 fixed w-full z-10">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink to="home" offset={-80} activeClass="font-bold">Home</NavLink>
        <NavLink to="robofest" offset={-80} activeClass="font-bold">RoboFest 2024</NavLink>
        <NavLink to="courses" offset={-80} activeClass="font-bold">Our Courses</NavLink>
        <NavLink to="why-robotics" offset={-80} activeClass="font-bold">Why Robotics</NavLink>
        <NavLink to="workshops" offset={-80} activeClass="font-bold">Our Workshops</NavLink>
        <NavLink to="contact" offset={-80} activeClass="font-bold">Contact</NavLink>
        <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <ion-icon name={isOpen ? "close" : "menu"} size="large"></ion-icon>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-800 flex flex-col items-center md:hidden">
          <NavLink to="home" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="robofest" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>RoboFest 2024</NavLink>
          <NavLink to="courses" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>Our Courses</NavLink>
          <NavLink to="why-robotics" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>Why Robotics</NavLink>
          <NavLink to="workshops" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>Our Workshops</NavLink>
          <NavLink to="contact" offset={-80} activeClass="font-bold" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, offset, activeClass, children, onClick }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={offset}
      spy={true}
      activeClass={activeClass}
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

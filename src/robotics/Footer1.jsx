// Footer.js

import React from 'react';

const Footer1 = () => {
  return (
    <footer className="bg-purple-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-300">403/5 Mullai Nagar, 1st street, 45, T.N.H.B,</p>
            <p className="text-gray-300">West Tambaram, Tambaram, Chennai,</p>
            <p className="text-gray-300">Tamil Nadu 600045</p>
            <p className="text-gray-300 mt-2">Mobile No: +91 86102 10593</p>
            <p className="text-gray-300">E-mail: qbee.academy@gmail.com</p>
          </div>
          {/* Useful Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Useful Links</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-gray-700 my-6" />
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 QBee Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

import React from 'react';
import headerBlob from '../assets/robotics.png';
import Oto from '../assets/Oto.png';

const Head = () => {
  return (
    <div className="p-6 md:p-12 w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-white text-4xl md:text-6xl lg:text-5xl mb-6">
            Empower your child's future <b>with robotics</b>
          </h1>
          <p className="text-white text-base md:text-2xl mb-8">
            Let your child tinker, innovate, and experiment in our next-gen robotics & IoT program, paired with top tutors.
          </p>
          <div className="lg:col-span-7 md:col-span-7 p-6 bg-purple-800">
            <div className="flex items-center mb-6">
              <div className="partner-data">
                <p className="text-white">Official Authorized Partner of</p>
                <img
                  src={Oto}
                  alt="google partner logo"
                  loading="lazy"
                  className="h-16 md:h-24 w-auto"
                />
              </div>
            </div>
            <a
              href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-medium hover:bg-green-600 transition duration-300"
            >
              Register RoboFest 2024
              <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={headerBlob}
            alt="Tech Illustration"
            className="w-full md:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

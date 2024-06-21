import React from 'react';
import Oto from '../assets/Oto.png';



const LandingSection = () => {
  return (
    <div className="lg:col-span-7 md:col-span-7 p-6 bg-purple-800">
          <div className="flex items-center mb-6">
                <div className="partner-data">
          <p className="text-white">Official Authorized Partner of</p>
          <img
            src={Oto}
            alt="google partner logo"
            loading="lazy"
            className="h-24 w-auto"
          />
        </div>
      </div>
      <a
        href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
        className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-300"
        target="_blank" >
    Register RoboFest 2024
        <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default LandingSection;

import React, { useRef } from 'react';
import planeIcon from '../assets/send.svg';

const RoboFest2024 = () => {
  const roboFestRef = useRef(null);

  return (
    <div ref={roboFestRef} className="px-6 py-14 md:px-10 md:py-16 lg:pb-12 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#202658] md:text-5xl lg:text-6xl mb-2">
            Celebrate with us at <span className="text-blue-600">RoboFest 2024!</span> <br/>
          </h2>
          <h1 className='text-blue-500 md:text-2xl'>Join us in celebrating Robofest 2024, a state-level robotics competition</h1>
        
          <h1 className='text-blue-500 md:text-2xl'>for children to showcase their engineering and programming skills through exciting challenges.</h1>
          </div>
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="flex-1  p-8 rounded-lg shadow-md mb-8 lg:mb-0 lg:order-2">
            <h3 className="text-2xl font-bold text-[#202658] mb-4 text-center">
              Discover our <span className="text-blue-600">Robotics and Coding</span> courses and win exciting prizes.
            </h3>
            <p className="text-[#202658] text-lg mb-4 text-center">When: <span className="text-blue-600">30th June, 5 PM, xxx</span></p>
            <p className="text-[#202658] text-lg mb-2">Why Attend?</p>
            <ul className="list-disc list-inside text-[#202658] text-lg mb-6">
              <li><span className="text-blue-600 font-bold">Exclusive Discount</span></li>
              <li>Enroll in any of our courses during RoboFest 2024 and receive an incredible <span className="text-blue-600 font-bold">75% discount</span>. This is a limited-time offer only available to event attendees.</li>
            </ul>
            <div className="text-center">
            <a 
            href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view" 
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER NOW
          </a>
            </div>
          </div>
          <div className="flex-1 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl text-[#345ABC] font-bold mb-6 text-center">Event Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img className="h-8 w-8" src={planeIcon} alt="bulletpoint" />
                  <div>
                    <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">RoboRace Challenge</h4>
                    <p className="text-[#202658]">Enjoy an evening of fun and excitement with our <span className="">RoboRace Challenge</span>, where kids can participate in thrilling robot races and showcase their skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img className="h-8 w-8" src={planeIcon} alt="bulletpoint" />
                  <div>
                    <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Hands-On Workshop</h4>
                    <p className="text-[#202658]">Engage in interactive hands-on sessions where kids can experience the fascinating world of robotics firsthand. Learn about the tools and technologies that power modern robots.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img className="h-8 w-8" src={planeIcon} alt="bulletpoint" />
                  <div>
                    <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Showcase of Various BOTS</h4>
                    <p className="text-[#202658]">Discover an array of robots on display, each demonstrating unique working principles and capabilities. See the innovative creations of our talented students and get inspired.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboFest2024;

import React, { useState, useEffect } from 'react';
import Head from './Head';
import Course from './Course';
import Navigation from './Navigation';
import RoboFest_2024 from './RoboFest_2024';
import FAQ from './FAQ';
import RoboCHAMPS from './RoboCHAMPS';
import Course1 from './Course1';
import Footer1 from './Footer1';
import PreviousWorkshopVideos from './PreviousWorkshopVideos';
import PopularCourses from './PopularCourses';

const Robotics = () => {
  const [showPopularCourses, setShowPopularCourses] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopularCourses(prev => !prev);
    }, 5000); // Change component every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navigation />
      
      <div id="home" className="bg-purple-800 pt-20 relative min-h-screen">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showPopularCourses ? 'opacity-0' : 'opacity-100'}`}>
          <div className="mt-20">
            <Head />
          </div>
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showPopularCourses ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mt-10">
            <PopularCourses />
          </div>
        </div>
      </div>
      <div id="robofest" className="relative z-0">
        <RoboFest_2024 />
      </div>
      <div id="courses">
        <Course />
        <Course1 />
      </div>
      <div id="why-robotics">
        <RoboCHAMPS />
      </div>
      <div id="workshops">
        <PreviousWorkshopVideos />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Footer1 />
      </div>
    </div>
  );
};

export default Robotics;

import React from 'react';
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
  return (
    <div>
      <Navigation />
      <div id="home" className="pt-20">
        <Head />
      </div>
      <div id="robofest">
        <RoboFest_2024 />
      </div>
      <div id="courses">
        <PopularCourses />
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

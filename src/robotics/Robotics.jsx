import React from 'react'
import Head from './Head'
import Course from './Course'
import Navigation from './Navigation'
import RoboFest_2024 from './RoboFest_2024'
import FAQ from './FAQ'
import RoboCHAMPS from './RoboCHAMPS'
import Course1 from './Course1'
import Footer1 from './Footer1'
import PreviousWorkshopVideos from './PreviousWorkshopVideos'
import PopularCourses from './PopularCourses'



const Robotics = () => {
  return (
    <div>
      <Navigation />
      <Head />
     
      <RoboFest_2024 />
     
     
      <PopularCourses />
        <Course />
        <Course1 />
        <RoboCHAMPS />
        <PreviousWorkshopVideos />
        <FAQ />
     <Footer1 />
    </div>
  )
}

export default Robotics
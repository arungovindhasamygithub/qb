import React from 'react';
import Main from '../../assets/main.png'; 

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 mx-auto max-w-screen-xl mt-32">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:mr-12">
        <p className="text-center md:text-left text-[36px] font-medium text-navy-blue tracking-[0.84px] md:text-[48px] md:font-semibold md:text-[#2C2E45] lg:text-[56px] lg:font-normal lg:leading-[76px]">
          Upskill &amp; Grab your
        </p>
        <p className="whitespace-nowrap text-center md:text-left text-[36px] font-extrabold text-light-blue tracking-[0.96px] md:text-[54px] lg:text-[64px] lg:font-bold lg:leading-[76px]">
          Dream Tech Offer
        </p>
        <p className="text-center md:text-left text-[#2C2E45] max-w-[572px] tracking-[0.35px] leading-[24px] mt-4 mb-8 md:text-base md:tracking-[0.4px] lg:text-lg lg:leading-normal">
          Join India's leading platform dedicated to realizing professional dreams and fostering growth for businesses and educational institutions.
        </p>
        <div className="flex flex-col justify-center items-center gap-6 mb-8 md:flex-row md:justify-start md:mb-0">
              </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 md:ml-12">
        <img src={Main} alt="Tech Illustration" className="w-full md:w-3/5 lg:w-2/5 xl:w-3/5"/>
      </div>
    </div>
  );
}

export default Home;

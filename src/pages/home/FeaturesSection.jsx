import React from 'react';
import Curr from '../../assets/Interactive Live Classes.png'
import Open from '../../assets/open.svg'
import Close from '../../assets/close.svg'
import Men from '../../assets/Self-Paced Courses.png'
import Comm from '../../assets/Tailored Solutions for Corporates.png'
const FeaturesSection = () => {
  return (
    <div id="features_sec" className="py-14 px-6 md:py-16 md:px-10 xl:px-[140px]">
      <div className="max-w-[1160px] m-auto flex flex-col items-center justify-center">
        <p className="text-light-blue font-bold text-[28px] text-center md:font-semibold xl:text-[32px] xl:font-bold">
          QBee Blueprint <span className="text-dark-blue">for</span>
        </p>
        <p className="text-dark-blue font-bold text-[28px] text-center mb-8 md:font-semibold xl:text-[32px] xl:font-bold">
          Accelerating Your Career
        </p>
        <div className="flex flex-col justify-between px-[23px] py-8 gap-16 md:flex-row md:items-start md:gap-8 md:pt-0 xl:flex-col xl:px-8 xl:gap-12">
          {/* Curriculum Section */}
          <div className="flex flex-col justify-center items-center md:max-w-[285px] xl:max-w-full md:py-8 xl:flex-row-reverse xl:justify-between xl:bg-no-repeat xl:bg-[right_top_118px] xl:bg-bg-placement">
            <div className="md:h-[138px] md:w-[210px] xl:w-[595px] xl:h-[386px] shrink-0">
              <img
                alt="curriculum"
                loading="lazy"
                width="595"
                height="386"
                decoding="async"
                src={Curr}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurriculum.261deb9b.webp&w=1200&q=75 2x"
                className="color-transparent"
              />
            </div>
            <div className="mt-3 xl:w-1/3">
              <p className="text-dark-blue text-base font-bold text-center xl:text-2xl xl:font-bold xl:text-left xl:mb-8 ">
                <span className="text-light-blue">1.</span> Structured Industry-vetted Curriculum
              </p>
              <div className="inline-flex gap-1">
                <img src={Open} alt="opening" className="self-start" />
                <p className="text-[#252525] text-center xl:text-base xl:text-left">
                  Instructors have a great level of clarity and it's easy to understand any concept. The curriculum is structured and the level of questions is also very good.
                </p>
                <img src={Close} alt="closing" className="self-end" />
              </div>
                        </div>
          </div>
          
          {/* Mentorship Section */}
          <div className="flex flex-col justify-center items-center md:max-w-[295px] xl:max-w-full md:py-8 xl:flex-row  xl:justify-between xl:px-0 xl:py-0 xl:bg-no-repeat xl:bg-top-left xl:bg-bg-placement">
            <div className="md:h-[138px] md:w-[210px] xl:w-[595px] xl:h-[386px] shrink-0 xl:bg-no-repeat xl:bg-right-bottom xl:bg-bg-placement">
              <img
                alt="mentorship"
                loading="lazy"
                width="595"
                height="386"
                decoding="async"
                src={Men}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmentorship.457332a0.webp&w=1200&q=75 2x"
                className="z-20 color-transparent"
              />
            </div>
            <div className="mt-3 xl:w-1/3">
              <p className="text-dark-blue text-base font-bold max-w-[300px] text-center xl:text-2xl xl:font-bold xl:text-right xl:mb-8">
                <span className="text-light-blue">2.</span> 1:1 Mentorship from Industry experts
              </p>
              <div className="inline-flex gap-1">
                <img src={Open} alt="opening" className="self-start" />
                <p className="text-[#252525] text-center xl:text-left xl:text-base">
                  Being a student in Bosscoder Academy, I overcame many problem-solving issues in a smooth way. 1:1 mentorship with mock interviews gives me confidence to solve more and more problems.
                </p>
                <img src={Close} alt="closing" className="self-end" />
              </div>
                         </div>
          </div>
          
          {/* Community Section */}
          <div className="flex flex-col justify-center items-center md:max-w-[285px] xl:max-w-full md:py-8 xl:flex-row-reverse xl:px-0 xl:py-0 xl:justify-between xl:bg-no-repeat xl:bg-right-top xl:bg-bg-placement">
            <div className="md:h-[138px] md:w-[210px] xl:w-[588px] xl:h-[383px] shrink-0 xl:bg-no-repeat xl:bg-bg-placement">
              <img
                alt="community"
                loading="lazy"
                width="588"
                height="383"
                decoding="async"
                src={Comm}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommunity.6fac1257.webp&w=1200&q=75 2x"
                className="color-transparent"
              />
            </div>
            <div className="mt-3 xl:w-1/3">
              <p className="text-dark-blue text-base font-bold text-center xl:text-2xl xl:text-left xl:mb-8">
                <span className="text-light-blue">3.</span> Be part of a Like-Minded Community for a lifetime
              </p>
              <div className="inline-flex gap-1">
                <img src={Open} alt="opening" className="self-start" />
                <p className="text-[#252525] text-center xl:text-base xl:text-left">
                  BCA provided much-needed guidance and motivation to move forward in my career, by great teachers, mentors, and peer groups
                </p>
                <img src={Close} alt="closing" className="self-end" />
              </div>
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

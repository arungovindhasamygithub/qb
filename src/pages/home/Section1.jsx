import React from 'react';
import Self from '../../assets/Self-Paced Courses.png'
import Intractive from '../../assets/Interactive Live Classes.png'
import Practice from '../../assets/Interactive Practice Platforms.png'
import Solutions from '../../assets/Tailored Solutions for Corporates.png'

const Section1 = () => {
    return (
        <section className="pt-8 pb-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8 text-center">Empower Yourself with QBEE</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full md:w-1/2 lg:w-auto grid grid-cols-1 gap-8">
                        <div className="card offer-card-bg p-6 rounded-md flex flex-col items-center justify-center">
                            <img src={Self} alt="logo" className="md:cursor-pointer h-48 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Self-Paced Courses</h3>
                            <p className="text-lg text-gray-700 text-center">Master skills at your own pace with our library of self-paced courses covering various topics from programming to personal development.</p>
                            <a href="courses.html" className="text-green-600 hover:text-green-700 inline-block mt-4">Explore Now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                        <div className="card offer-card-bg p-6 rounded-md flex flex-col items-center justify-center">
                            <img src={Intractive} alt="logo" className="md:cursor-pointer h-48 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Interactive Live Classes</h3>
                            <p className="text-lg text-gray-700 text-center">Engage with expert instructors in real-time and get personalized guidance to accelerate your learning journey.</p>
                            <a href="zen-class.html" className="text-green-600 hover:text-green-700 inline-block mt-4">Join Now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                        <div className="card offer-card-bg p-6 rounded-md flex flex-col items-center justify-center">
                            <img src={Practice} alt="logo" className="md:cursor-pointer h-48 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Interactive Practice Platforms</h3>
                            <p className="text-lg text-gray-700 text-center">Gain hands-on experience and reinforce your learning through our gamified practice platforms designed to make learning fun and effective.</p>
                            <a href="code-kata.html" className="text-green-600 hover:text-green-700 inline-block mt-4">Start Practicing <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                        <div className="card offer-card-bg p-6 rounded-md flex flex-col items-center justify-center">
                            <img src={Solutions} alt="logo" className="md:cursor-pointer h-48 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Tailored Solutions for Corporates</h3>
                            <p className="text-lg text-gray-700 text-center">Discover how QBEE's tailored corporate solutions can address your organization's specific training and upskilling needs.</p>
                            <a href="GUVI-for-corporates.html" className="text-green-600 hover:text-green-700 inline-block mt-4">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;

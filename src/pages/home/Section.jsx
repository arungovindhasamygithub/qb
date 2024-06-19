import React from 'react';

const Section = () => {
    return (
        <section className="pt-8 pb-8 bg-white">
            <div className="container mx-auto flex justify-center">
                <div className="flex flex-wrap -mx-4 w-full md:w-4/5 justify-center" >
                    <div className="w-full md:w-1/2 px-4">
                    {/* <div className="features">
                            <h2 className="text-3xl font-bold mb-4">Features</h2>
                            <ul className="text-lg">
                                <li className="mb-2">Live Project Training</li>
                                <li className="mb-2">One-on-One Interaction</li>
                                <li className="mb-2">Interview Preparation</li>
                                <li className="mb-2">Placement Support</li>
                            </ul>
                        </div> */}

                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="sec-learning">
                            <h1 className="text-4xl font-bold hidden md:block mb-4">Reputed Edtech platform for <span className="text-primary"><br /> Qbee Academy</span></h1>
                            <p className="text-lg leading-relaxed mb-4">
                                Qbee Academy is an IIT-M &amp; IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling &amp; recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.
                            </p>
                            <p className="text-lg mb-4">
                                <span className="font-bold">Q</span>uick <span className="font-bold">B</span>ridge for <span className="font-bold">E</span>ducational <span className="font-bold">E</span>xcellence - <span className="font-bold">A</span>cademy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;

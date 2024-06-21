import React from 'react';

const Section = () => {
  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap -mx-4 w-full md:w-4/5 justify-center">
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-4xl font-bold hidden md:block mb-4">Reputed Edtech platform for <span className="text-primary"><br /> QBee Academy</span></h1>
            <p className="text-lg leading-relaxed mb-4">
              QBee Academy is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Q</span>uick <span className="font-bold">B</span>ridge for <span className="font-bold">E</span>ducational <span className="font-bold">E</span>xcellence - <span className="font-bold">A</span>cademy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

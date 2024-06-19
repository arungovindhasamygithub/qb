import React from 'react';
import Course_1 from '../assets/Course_1.png';
import Course_2 from '../assets/Course_2.png';
import Course_3 from '../assets/Course_3.png';

const PopularCourses = () => {
  const courses = [
    {
      src: Course_1,
      title: 'Robo Explorers',
      age: 'Age 6-8',
      modules: '25 Modules',
      duration: '24 Hr 40 Mins',
      description: 'An introductory course for young kids to explore the basics of robotics.',
      link: 'https://chatbot.page/Wn2wW5',
    },
    {
      src: Course_2,
      title: 'App Development',
      age: 'Age 9-11',
      modules: '12 Modules',
      duration: '24 Hr 40 Mins',
      description: 'Learn to create simple mobile applications using MIT App Inventor.',
      link: 'https://chatbot.page/Wn2wW5',
    },
    {
      src: Course_3,
      title: 'Python For Kids',
      age: 'Age 6-8',
      modules: '25 Modules',
      duration: '24 Hr 40 Mins',
      description: 'A fun and engaging way for kids to start learning Python programming.',
      link: 'https://chatbot.page/Wn2wW5',
    },
  ];

  return (
    <div className="py-12">
      <section className="container mx-auto px-6 lg:px-24">
        <h1 className="text-center text-4xl font-bold mb-8">Popular Courses</h1>
        
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="relative bg-gray-100 p-4">
                  <img src={course.src} alt={course.title} className="w-30 h-auto mx-auto" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span>{course.age}</span>
                    <span>{course.modules}</span>
                    <span>{course.duration}</span>
                  </div>
                  
                  <p className="text-gray-700">{course.description}</p>
                  <div className="flex justify-end mb-4">
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;

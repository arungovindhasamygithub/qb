import React from 'react';
import Course_1 from '../assets/Course_7.png';
import Course_2 from '../assets/Course_12.png';
import Course_3 from '../assets/Course_8.png';
import Course_4 from '../assets/Course_9.png';
import Course_5 from '../assets/Course_10.png';
import Course_6 from '../assets/Course_11.png';

const Course = () => {
  const courses = [
    {
      src: Course_1,
      title: 'Scratch/Pictoblox',
      description: 'Learn the basics of programming and robotics using Scratch and Pictoblox. This course is perfect for young beginners to start their coding journey with fun and interactive projects.',
      rating: 'Level 1',
    },
    {
      src: Course_2,
      title: 'MIT App Inventor',
      description: 'Discover the world of mobile app development with MIT App Inventor. Students will learn to create their own apps and understand the fundamentals of app design and development.',
      rating: 'Level 2',
    },
    {
      src: Course_3,
      title: 'Python For Kids',
      description: 'Dive into the world of Python programming. This course teaches kids how to code in Python, focusing on developing problem-solving skills through fun and engaging projects.',
      rating: 'Level 3',
    },
    {
      src: Course_4,
      title: 'AI For Kids',
      description: 'Introduce kids to the exciting field of Artificial Intelligence. This course covers basic AI concepts and allows students to create simple AI projects and applications.',
      rating: 'Level 4',
    },
    {
      src: Course_5,
      title: 'AI Intermediate',
      description: 'Build on basic AI knowledge with intermediate concepts and projects. This course is designed for students who have some experience in AI and want to deepen their understanding.',
      rating: 'Level 5',
    },
    {
      src: Course_6,
      title: 'AI Advanced',
      description: 'Master advanced AI techniques and applications. This course is for students who are serious about AI and robotics, covering complex topics and hands-on projects.',
      rating: 'Level 6',
    },
  ];
  return (
    <div className="py-12">
      <section className="container mx-auto px-6 lg:px-24">
        <h1 className="text-center text-4xl font-bold mb-8">Coding Courses</h1>

        {/* Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative bg-gray-100 p-4">
                <img src={course.src} alt={course.title} className="w-30 h-auto mx-auto" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.rating && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      <i className="fas fa-star"></i>
                      <p className="ml-2 text-sm text-gray-700">{course.rating}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Course;

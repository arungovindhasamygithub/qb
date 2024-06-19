import React from 'react';
import Thumbnail from '../assets/Dream.png'; // Ensure this path is correct

const videos = [
  { title: "Workshop 1: Intro to Robotics", description: "An introductory workshop on the basics of robotics." },
  { title: "Workshop 2: Advanced Robotics", description: "Advanced concepts in robotics and their applications." },
  { title: "Workshop 3: Robotics in AI", description: "Exploring the role of AI in robotics." },
  { title: "Workshop 4: Building Robots", description: "Hands-on session on building robots." },
  { title: "Workshop 5: Robotics Programming", description: "Programming techniques for robotics." },
  { title: "Workshop 6: Future of Robotics", description: "Discussion on the future trends in robotics." },
];

const PreviousWorkshopVideos = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Previous Workshop Videos</h2>
      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-8 mx-4"> {/* Added mx-4 for margin */}
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={Thumbnail}
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-white font-bold mb-2 text-center">{video.title}</h3>
                <p className="text-white text-center">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousWorkshopVideos;

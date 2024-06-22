import React from 'react';

const Robo_Head_Content = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#202658] md:text-5xl lg:text-6xl mb-2">
        Celebrate with us at <span className="text-blue-600">RoboFest 2024!</span>
      </h2>

      <div className="mx-auto" style={{ maxWidth: '70%' }}>
        <p className="text-sm md:text-base text-left mb-4">
          Welcome to RoboFest 2024! Join us for an exciting event where innovation meets education. This is your chance to experience firsthand the future of learning with our cutting-edge robotics classes designed for young minds. At RoboFest, you'll discover how our programs can transform your child's curiosity into real-world skills.
        </p>

        <p className="text-sm md:text-base text-left mb-4">
          RoboFest is an annual event hosted by [Your Robotics Training Institute], dedicated to showcasing the incredible potential of our robotics education programs. This year, we are thrilled to invite parents and children to a day filled with interactive demos, hands-on activities, and inspiring talks by industry experts. Whether your child is new to robotics or already passionate about technology, RoboFest offers something for everyone.
        </p>

        <ul className="list-disc list-inside text-sm md:text-base text-left">
          <li>Interactive demos, hands-on activities, and inspiring talks by industry experts.</li>
          <li>Opportunities for both newcomers and tech enthusiasts to explore robotics.</li>
        </ul>
      </div>
    </div>
  );
};

export default Robo_Head_Content;

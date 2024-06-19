import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 mx-auto text-lg lg:text-xl">
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">FAQ</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion
          title="What is robotics?"
          answer={
            <span>
              Robotics is a field of engineering and science that involves the design, construction, operation, and use of robots.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What are robots used for?"
          answer={
            <span>
              Robots are used in various applications, including manufacturing, healthcare, military, space exploration, and entertainment.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What is a robot made of?"
          answer={
            <span>
              A robot typically consists of a mechanical structure, sensors, actuators, and a control system.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="How do robots work?"
          answer={
            <span>
              Robots work by using sensors to gather information, processors to analyze it, and actuators to perform actions based on the analysis.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What is artificial intelligence in robotics?"
          answer={
            <span>
              Artificial intelligence in robotics involves creating robots that can perform tasks autonomously or with minimal human intervention.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What is a humanoid robot?"
          answer={
            <span>
              A humanoid robot is designed to resemble the human body in shape and function, often with the ability to walk, talk, and interact with humans.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="How are robots programmed?"
          answer={
            <span>
              Robots are programmed using various programming languages, such as C++, Python, and Java, depending on the application and complexity.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What is robotic automation?"
          answer={
            <span>
              Robotic automation involves using robots to perform repetitive tasks, increasing efficiency and reducing human error in industrial processes.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What are the challenges in robotics?"
          answer={
            <span>
              Challenges in robotics include developing advanced sensors, achieving precise control, ensuring safety, and creating intelligent algorithms for decision-making.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
        <Accordion
          title="What is the future of robotics?"
          answer={
            <span>
              The future of robotics is expected to see advancements in AI, machine learning, and robotics integration in everyday life, including personal assistants and advanced medical robots.
            </span>
          }
          className="transform transition-transform duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default FAQ;

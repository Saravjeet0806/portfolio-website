import React from 'react';
import myImage from '../assets/myImage.png';

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md md:flex-row md:items-start">
    <div className="w-60 h-auto mb-4 md:mb-0 md:mr-6">
      <img src={myImage} alt="my-image" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">About Me</h2>
      <p className="text-gray-600 leading-relaxed">
        Hi, I'm Saravjeet Singh, a 3rd-year BTech IT student with a passion for Data Structures and Algorithms, front-end web development, and DevOps. I have solved over 200 questions on LeetCode, attended Pragyaan (a soft skill program conducted by TP Cell GJUST), and maintained a good CGPA of 7+ each semester. I'm currently working on various projects, including a Weather App, a To-Do List App, and an MCQ App in React.
      </p>
    </div>
  </div>
  );
}

export default About;


import React from 'react';
import myImage from '../assets/myImage.png';

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 m-5 bg-gray-100 rounded-lg shadow-md md:flex-row md:items-start">
    <div className="w-60 h-auto mb-4 md:mb-0 md:mr-6">
      <img src={myImage} alt="my-image" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2 text-gray-900">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
      I am a 3rd-year B.Tech IT student at GJU S&T with a strong passion for technology and problem-solving. My primary interests lie in Data Structures and Algorithms (DSA), front-end web development, and DevOps.
        </p>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Bring:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Analytical Skills:</strong> Proficient in DSA, enabling the creation of efficient and scalable solutions.</li>
            <li><strong>Front-End Development:</strong> Experienced in HTML, CSS, JavaScript, and React, with projects including a Weather App, To-Do List app, and Calculator app.</li>
            <li><strong>DevOps Enthusiast:</strong> Knowledgeable in shell scripting, GitHub, and CI/CD practices, with practical experience in resource tracking scripts.</li>
          </ul>
        </div>
        <p className="mt-4 text-gray-900">
          I am always eager to expand my knowledge and am open to networking and exploring opportunities in software development and DevOps. Let’s connect to discuss potential collaborations or share insights on technology and innovation.
      </p>
    </div>
  </div>
  );
}

export default About;


import React from 'react';

const Skills = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md m-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Programming Languages</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>C++</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Frameworks & Libraries</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tools & Technologies</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>GitHub</li>
            <li>Shell Scripting</li>
            <li>CI/CD Practices</li>
            <li>Terraform </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Problem Solving</li>
            <li>Analytical Thinking</li>
            <li>Team Collaboration</li>
            <li>Effective Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

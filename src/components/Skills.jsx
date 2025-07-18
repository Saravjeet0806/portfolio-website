import React from 'react';
import {
  SiCplusplus, SiC, SiTailwindcss, SiBootstrap,
  SiExpress, SiKubernetes, SiTerraform, SiAnsible,
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiGit, SiDocker, SiLinux, SiMongodb
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';
import { FaAws, FaJava, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = {
    'Frontend': [
      { name: 'HTML', icon: <SiHtml5 size={40} /> },
      { name: 'CSS', icon: <SiCss3 size={40} /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} /> },
      { name: 'React', icon: <SiReact size={40} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs size={40} /> },
      { name: 'Express.js', icon: <SiExpress size={40} /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} /> },
    ],
    'DevOps & Cloud': [
      { name: 'Docker', icon: <SiDocker size={40} /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
      { name: 'Ansible', icon: <SiAnsible size={40} /> },
      { name: 'Terraform', icon: <SiTerraform size={40} /> },
      { name: 'Linux', icon: <SiLinux size={40} /> },
      { name: 'AWS', icon: <FaAws size={40} /> },
      { name: 'Git', icon: <SiGit size={40} /> },
    ],
    'Programming Languages': [
      { name: 'C++', icon: <SiCplusplus size={40} /> },
      { name: 'C', icon: <SiC size={40} /> },
      { name: 'Java', icon: <FaJava size={40} /> },
      { name: 'Bash', icon: <VscTerminalBash size={40} /> },
    ],
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-center">
          <span className="text-orange-500">My</span> Tech Stack
        </h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-orange-400">{skill.icon}</div>
                  <p className="text-lg font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

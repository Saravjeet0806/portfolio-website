import React from 'react';
import ProjectCard from './ProjectCard';

// Example project data, replace with your actual project details
const projectsData = [
  {
    title: 'Weather App',
    description: 'A web application to display weather information using HTML, CSS, and JavaScript.',
    image: '', // Update with actual image path
    link: '', // Update with actual project link
  },
  {
    title: 'To-Do List App',
    description: 'A simple to-do list app built with React to manage tasks efficiently.',
    image: '', // Update with actual image path
    link: '', // Update with actual project link
  },
  {
    title: 'Calculator App',
    description: 'A basic calculator app developed in React to perform arithmetic operations.',
    image: '', // Update with actual image path
    link: '', // Update with actual project link
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

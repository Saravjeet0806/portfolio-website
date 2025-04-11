import React from 'react';
import ProjectCard from './ProjectCard';
import TodolistImage from '../assets/projects/todo-list-project.png';
import WeatherImage from '../assets/projects/weatherapp.png';
import CalImage from '../assets/projects/calculator.png';
import Aarogya from '../assets/projects/aarogya_smart.png';
import Exam_app from '../assets/projects/exam_app.png';
import Kubernetes from '../assets/projects/kubernetes.png';
import Ansible from '../assets/projects/ansible.png';
import Terraform from '../assets/projects/terraform.png';
import Docker from '../assets/projects/docker.png';
const projectsData = [
  {
    title: 'Kubernetes_Projects',
    description: 'Contains all the kubernetes projects and exampless',
    image: Kubernetes, 
    link: 'https://github.com/Saravjeet0806/Kubernetes_examples', 
  },
  {
    title: 'Ansible_examples',
    description: 'Contains all my ansible playbooks and demos',
    image: Ansible, 
    link: 'https://github.com/Saravjeet0806/ansible_example_codes/tree/main/AWS', 
  },
  {
    title: 'Docker_examples',
    description: 'Contains all my docker examples and demos',
    image: Docker, 
    link: 'https://github.com/Saravjeet0806/docker_projects', 
  },
  {
    title: 'AarogyaSmart',
    description: 'A fitness application which shows fitness recommendations according to a various attributes',
    image: Aarogya, 
    link: 'https://saravjeet0806.github.io/aarogya_smart/', 
  },
  {
    title: 'Weather App',
    description: 'A web application to display weather information using HTML, CSS, and JavaScript.',
    image: WeatherImage, 
    link: 'https://saravjeet0806.github.io/weather-app-using-html-css-javascript-openweatherapi/',
  },
  {
    title: 'To-Do List App',
    description: 'A simple to-do list app built with React to manage tasks efficiently.',
    image: TodolistImage,
    link: 'https://todolistsaravjeet.netlify.app/', 
  },
  {
    title: 'Terraform_scripts',
    description: 'Contains all my terraform scripts and demos',
    image: Terraform, 
    link: 'https://github.com/Saravjeet0806/Terraform_codes', 
  },
  {
    title: 'Calculator App',
    description: 'A basic calculator app developed in React to perform arithmetic operations.',
    image: CalImage, 
    link: 'https://saravjeet0806.github.io/calculator-app-reactjs/', 
  },

  {
    title: 'Exam_app',
    description: 'An app that converts xlsx files to JSON files and can be used to conduct online exams and display scores',
    image: Exam_app, 
    link: 'https://saravjeet0806.github.io/exam-app/', 
  },

];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 border-b-4 inline-block border-pink-500 pb-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
      </div>
    </section>
  );
};

export default Projects;

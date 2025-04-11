import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-black rounded-lg shadow-md border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/30">

      {image && (
        <div className="w-full h-40 mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

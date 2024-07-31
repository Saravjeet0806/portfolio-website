import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      {image && (
        <div className="w-full h-40 mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

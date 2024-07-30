import React from 'react';

const Skills = ({ logo, name }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md m-5">
      <div className="w-12 h-12 mr-4">
        <img src={logo} alt={name} className="w-full h-full object-contain" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      </div>
    </div>
  );
}

export default Skills;

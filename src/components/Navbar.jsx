import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container flex justify-between items-center">
        <div className="text-white text-3xl">My Portfolio</div>
        <div className="flex justify-center flex-grow space-x-4">
          <a href="#About" className="text-white hover:text-red-500 mx-2 text-xl">About</a>
          <a href="#Skills" className="text-white hover:text-red-500 mx-2 text-xl">Skills</a>
          <a href="#Projects" className="text-white hover:text-red-500 mx-2 text-xl">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

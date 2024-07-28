import React from 'react';
import myImage from '../assets/myImage.png';

const About = () => {
  return (
    <div>
      <div className="m-4 max-w-40 bg-slate-950">
        <img src={myImage} alt="my-image" />
      </div>
    </div>
  );
}

export default About;


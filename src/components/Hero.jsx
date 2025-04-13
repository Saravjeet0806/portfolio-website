import React from 'react'
import Image from '../assets/myImage.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8  mx-auto py-8 bg-black'>

      <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
        <img src={Image} alt="saravjeet image" />
      </div>
      <div className='col-span-2 px-5'>

        <h1 className='text-white text-4xl sm:5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>I'm a </span> <br />
          <TypeAnimation sequence={["Web Developer", 1000, "DevOps Engineer", 1000]}
            wrapper="span" speed={50} repeat={Infinity} />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>My name is Saravjeet Singh and I am a passionate Devops Engineer and Web Developer</p>
        <div className="my-8">
          <a
            href="https://media.licdn.com/dms/document/media/v2/D562DAQFK6MLx5pOBvQ/profile-treasury-document-pdf-analyzed/B56ZYudrrZHoAk-/0/1744536257306?e=1745452800&v=beta&t=WE709ftNCjViYMtjEfOW5X4lAjZ6JlmlBE0H1rSwwoE"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a href="#contact"
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
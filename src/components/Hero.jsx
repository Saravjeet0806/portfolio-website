import React from 'react'
import Image from '../assets/myImage.png'
import { TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'> 
    
      <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
            <img src={Image} alt="saravjeet image" />
      </div>
      <div className='col-span-2 px-5'></div>

      <h1 className='text-white text-4xl sm:5xl lg:text-8xl font-extrabold'>
       <span className='primary-color'>I'm a </span> <br/>
       <TypeAnimation sequence={["Frontend Developer", 1000, "DevOps Engineer", 1000]} 
       wrapper="span" speed={50} repeat={Infinity}/>
    </h1>
    </div>
  )
}

export default Hero;
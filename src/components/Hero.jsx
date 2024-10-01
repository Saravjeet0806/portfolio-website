import React from 'react'
import Image from '../assets/myImage.png'
import { TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'> 
    
      <div className='my-auto mx-auto'>
        <div className='w-[300px] h-auto lg:w-[400px]'>
            <img src={Image} alt="saravjeet image" />
        </div>
      </div>

      <div className='col-span-2 px-5'></div>
    
    </div>
  )
}

export default Hero;
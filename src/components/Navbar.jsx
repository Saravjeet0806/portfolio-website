import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div>
      <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

        <h1 className='text-3xl font-bold primary-color ml-4'>Saravjeet Singh</h1>
        <ul className='hidden md:flex'>
          <li className='p-5'><a href='#about'>About</a></li>
          <li className='p-5'><a href='#work'>Work</a></li>
          <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>



        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
      </div>
    </div>
   
  )
};

export default Navbar;

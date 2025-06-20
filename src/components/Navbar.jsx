import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div>
      <div className='bg-black text-gray-400 h-[100px]  mx-auto flex justify-between items-center text-2xl sm:text-xl'>

        <h1 className='text-3xl font-bold ml-4'>Saravjeet Singh</h1>
        <ul className='hidden md:flex'>
          <li className='p-5'><a href='#about'>About</a></li>
          <li className='p-5'><a href='#projects'>Projects</a></li>
          <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul> 

        <div onClick={handleNav} className='block md:hidden mr-5'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed top-0 left-0 h-[50%] w-[60%] bg-[#202121] backdrop-blur-md shadow-lg rounded-br-2xl p-6 flex flex-col gap-4 text-gray-200 text-lg ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold ml-4'>Menu</h1>
          <ul className='p-8 text-2xl'>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#projects'>Projects</a></li>
          <li className='p-2'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
   
  )
};

export default Navbar;

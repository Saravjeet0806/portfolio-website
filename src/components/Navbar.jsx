import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div>
      <div className='bg-black h-[100px]'>



        <div onClick={handleNav} className='block md:hidden'>
          {nav?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
      </div>
    </div>
   
  )
};

export default Navbar;

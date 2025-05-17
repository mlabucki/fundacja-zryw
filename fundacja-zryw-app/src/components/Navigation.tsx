import { NavLink } from 'react-router-dom';
import React from "react";
import logo from "/logo/logo.png";
import burger from "/burger/burger.png";

const Navigation: React.FC = () => {
  return (
    <nav className="h-16 xs:h-24 w-mobile xs:w-main bg-red-500 mx-auto flex justify-between items-center">
      <NavLink to='/' aria-label="Go to home">
        <img src={logo} alt="zryw-logo" className='w-9'/>
      </NavLink>
      
      <div className='hidden xs:flex justify-between items-center'>
        <NavLink to='/about' className='mr-12'>
          <p className='font-calluna text-xl text-black'>O nas</p>
        </NavLink>

        <NavLink to='/apply' className='mr-4'>
          <p className='font-calluna text-xl text-black'>Aplikuj</p>
        </NavLink>
      </div>

      <div className='xs:hidden'>
         <button aria-label="Otwórz menu">
          <img src={burger} alt="burger-icon" />
        </button>
      </div>
    </nav>
  )
};

export default Navigation;

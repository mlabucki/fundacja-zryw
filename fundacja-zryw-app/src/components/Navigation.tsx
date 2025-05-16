import { NavLink } from 'react-router-dom';
import React from "react";
import logo from "/logo/logo.png";

const Navigation: React.FC = () => {
  return (
    <nav className="h-24 w-main bg-red-500 mx-auto flex justify-between items-center">
      <NavLink to='/' aria-label="Go to home">
        <img src={logo} alt="zryw-logo" />
      </NavLink>
      
      <div className='flex justify-between items-center'>
        <NavLink to='/about' className='mr-12'>
          <p className='font-calluna text-xl text-black'>O nas</p>
        </NavLink>

        <NavLink to='/apply' className='mr-4'>
          <p className='font-calluna text-xl text-black'>Aplikuj</p>
        </NavLink>
      </div>
    </nav>
  )
};

export default Navigation;

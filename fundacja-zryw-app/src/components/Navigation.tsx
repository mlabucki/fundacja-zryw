import { NavLink } from 'react-router-dom';
import React from "react";
import logo from "/logo/logo.png";
import burger from "/burger/burger.png";
import Container from './Container';

const Navigation: React.FC = () => {
  return (
    <Container>
      <nav className="w-full h-16 xs:h-24 flex justify-between items-center">
        <NavLink to='/' aria-label="Go to home">
          <img src={logo} alt="zryw-logo" className='w-9'/>
        </NavLink>
        
        <div className='hidden xs:flex justify-between items-center'>
          <NavLink to='/about' className='mr-12'>
            <p className='font-calluna text-xl text-black'>O nas</p>
          </NavLink>

          <NavLink to='/apply' className='w-24 h-11 bg-green rounded-full flex justify-center items-center'>
            <p className='font-calluna text-xl text-white'>Aplikuj</p>
          </NavLink>
        </div>

        <div className='xs:hidden'>
          <button aria-label="Otwórz menu" className='w-9 h-9 bg-green flex justify-center items-center rounded-full'>
            <img src={burger} alt="burger-icon" />
          </button>
        </div>
      </nav>
    </Container>
    
  )
};

export default Navigation;

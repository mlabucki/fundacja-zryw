import React from "react";
import logo from "/logo/logo-outline.png";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    const data = {
        NIP: '7011177639',
        'E-mail': 'kontakt@fundacjazryw.pl',
        REGON: '527088981',
        Telefon: '+48 575 934 017',
        KRS: '0001072883',
    }

  return (
    <footer className="h-footer bg-green">
        <section className="w-main mx-auto flex justify-between mt-12">
            <div className="">
                <div className="flex"> 
                    <NavLink to='/' className=''>
                        <p className='font-calluna text-xl text-white'>Strona główna</p>
                    </NavLink>
                    <NavLink to='/about' className=''>
                        <p className='font-calluna text-xl text-white'>O nas</p>
                    </NavLink>
                    <NavLink to='/apply' className=''>
                        <p className='font-calluna text-xl text-white'>Aplikuj</p>
                    </NavLink>
                </div>
                <div>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <div className="font-calluna text-base text-white">{key}</div>
                            <div className="font-calluna text-base text-white">{value}</div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={logo} alt="" />
        </section>
    </footer>
  );
};

export default Footer;

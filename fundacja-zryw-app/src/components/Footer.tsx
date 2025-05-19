import React from "react";
import logo from "/logo/logo-outline.png";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    const data = {
        NIP: '7011177639',
        '': '',
        'E-mail': 'kontakt@fundacjazryw.pl',
        REGON: '527088981',
        Telefon: '+48 575 934 017',
        KRS: '0001072883',
    }

  return (
    <footer className="h-footer-mobile xs:h-footer bg-green">
        <section className="w-mobile xs:w-main mx-auto flex xs:flex-row flex-col justify-between mt-7 xs:mt-12">
            <div className="max-w-[410px]">
                <div className="w-full flex justify-between xs:grid xs:grid-cols-2 xs:gap-x-40 xs:gap-y-12">
                    <NavLink to='/' className=''>
                        <p className='font-calluna text-xl text-white'>Strona główna</p>
                    </NavLink>
                    <NavLink to='/about'>
                        <p className='font-calluna text-xl text-white'>O nas</p>
                    </NavLink>
                    <NavLink to='/apply'>
                        <p className='font-calluna text-xl text-white'>Aplikuj</p>
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-6 xs:gap-y-12 mt-6 xs:mt-12">
                    {Object.entries(data).map(([key, value]) => (
                    <div
                        key={key}
                        className={key === '' ? "hidden xs:block" : ""}
                    >
                        <div className="font-calluna text-base text-white">{key}</div>
                        <div className="font-calluna text-base text-white">{value}</div>
                    </div>
                    ))}
                </div>
            </div>
            <img src={logo} alt="" className="w-full xs:w-auto mt-6 xs:mt-0"/>
        </section>
    </footer>
  );
};

export default Footer;

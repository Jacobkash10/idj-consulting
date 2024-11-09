"use client";

import React, { useEffect, useState } from 'react';
import NavNormal from './NavNormal';
import NavMobile from './NavMobile';
import Image from 'next/image';
import image1 from '@/public/images/logo1.png';
import Link from 'next/link';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`z-40 transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 bg-[#1c1b1b] shadow-lg px-10 xl:px-20'
            : 'absolute top-0 left-10 xl:left-20 right-10 xl:right-20 bg-transparent'
        }`}
      >
        <NavNormal />
      </div>
      <NavMobile />
      <div className='flex flex-col justify-center items-center bg-black mt-14 py-5 lg:hidden'>
        <div className='lg:hidden w-[8%] md:w-[10%]'>
          <Link className='text-white text-xs' href={'/'}>
            <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' className='w-full' />
          </Link>
        </div>
        <h5 className='text-white text-center text-sm'>
          Agence de <br />
          <span className='text-blue-400'>communication</span> et événementiel
        </h5>
        <p className='text-white mt-4'>+243 81 765 798 3</p>
      </div>
    </div>
  );
};

export default Navbar;

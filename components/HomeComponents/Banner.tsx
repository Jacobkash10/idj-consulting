"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


const Banner = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide>
            <div className='bg-bg1 relative bg-no-repeat bg-cover z-0 h-full'>
                  <div className='w-full flex items-center flex-col justify-center relative top-0 left-0 h-full z-10 bg-black/70'>
                        <h1 className='text-white text-[30px] md:text-[40px] lg:text-[55px] font-medium mt-28 text-center max-w-sm md:max-w-xl leading-[1.15]'>
                              Une scénographie événementielle
                        </h1>
                        <span className='border-2 border-white p-2 mt-10'>
                              <h4 className='text-white text-base lg:text-xl'>Réalisons votre scénographie</h4>
                        </span>
                        <div className='absolute right-3 bottom-0'>
                              <FaFacebook size={28} className='text-white mb-2 text-xl' />
                              <FaTwitter size={28} className='text-white mb-2' />
                              <FaLinkedin size={28} className='text-white mb-2' />
                              <FaInstagram size={28} className='text-white mb-2' />
                              <FaYoutube size={28} className='text-white' />
                        </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-bg2 relative bg-no-repeat bg-cover z-0 h-full'>
                  <div className='w-full flex items-center flex-col justify-center relative top-0 left-0 h-full z-10 bg-black/70 py-24'>
                        <h1 className='text-white text-[30px] md:text-[40px] lg:text-[55px] font-medium mt-28 text-center max-w-xl leading-[1.15]'>
                              Votre événement <br />mémorable
                        </h1>
                        <span className='border-2 border-white p-2 mt-10'>
                              <h4 className='text-white text-base lg:text-xl'>Réalisons votre événement</h4>
                        </span>
                        <div className='absolute right-3 bottom-0'>
                              <FaFacebook size={28} className='text-white mb-2 text-xl' />
                              <FaTwitter size={28} className='text-white mb-2' />
                              <FaLinkedin size={28} className='text-white mb-2' />
                              <FaInstagram size={28} className='text-white mb-2' />
                              <FaYoutube size={28} className='text-white' />
                        </div>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-bg3 relative bg-no-repeat bg-cover z-0 h-full'>
                  <div className='w-full flex items-center flex-col justify-center relative top-0 left-0 h-full z-10 bg-black/70 py-24'>
                        <h1 className='text-white text-[30px] md:text-[40px] lg:text-[55px] font-medium mt-28 text-center max-w-xl leading-[1.15]'>
                              Nous concevons votre <br />événement de A à Z
                        </h1>
                        <span className='border-2 border-white p-2 mt-10'>
                              <h4 className='text-white text-base lg:text-xl'>Réalisons votre événement</h4>
                        </span>
                        <div className='absolute right-3 bottom-0'>
                              <FaFacebook size={28} className='text-white mb-2 text-xl' />
                              <FaTwitter size={28} className='text-white mb-2' />
                              <FaLinkedin size={28} className='text-white mb-2' />
                              <FaInstagram size={28} className='text-white mb-2' />
                              <FaYoutube size={28} className='text-white' />
                        </div>
                  </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner

import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner3.jpg'
import Image from 'next/image'

const Sonore = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[40%]'>
                        <div className='w-full h-[23.5rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
                  <div className='w-full lg:w-[60%] mt-10 lg:mt-0'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-[50px]'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                              Installation sonorisation et éclairage
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Chaque événement doit être sonorisé et éclairé ! Nos équipes tiennent compte du lieu, du type d'événement, du nombre d'invités pour créer une véritable ambiance autour de votre défilé, de votre soirée ou anniversaire d'entreprise !
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                          Choisir sa sonorisation et son éclairage
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Sonore

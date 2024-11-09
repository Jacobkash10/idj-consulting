import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner4.jpg'
import Image from 'next/image'

const Chapiteau = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[60%]'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-24'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                              Chapiteau et tente
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Besoin d'installer un chapiteau pour accueillir vos invités ou d'aménager des lycras pour décorer votre espace ? Envie d'habiller un immeuble pour faire office d'écran géant afin de diffuser des vidéos ? IDJ Consulting vous propose le matériel adapté à votre problématique en tenant compte de l'aspect esthétique, d'une importance cruciale en événementiel.
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                          Chapiteau et tente
                                    </Link>
                              </div>
                        </div>
                  </div>
                  <div className='w-full lg:w-[40%] mt-10 lg:mt-0'>
                        <div className='w-full h-[28rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Chapiteau

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/entre.jpg'
import image2 from '@/public/images/centre.jpg'
import image3 from '@/public/images/rdc.jpg'
import { ChevronDown } from 'lucide-react'

const Type = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 pt-[80px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl md:text-[46px] font-light'>
                  Quel type d'événement <span className='text-slate-400 text-[25px] font-light'>pour vous ?</span>
            </h2>
            <hr className='w-[70px] mt-5 text-lg border-[1.5px] border-black' />
            <p className='text-center mt-5 font-medium text-[15px]'>
            Votre profil :
            </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            <div>
                  <Link href={'/'}>
                        <div className='w-full h-[13rem]'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Entreprise</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
            <div>
                  <Link href={'/'}>
                        <div className='w-full h-[13rem]'>
                                    <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Centre commercial</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
            <div>
                  <Link href={'/'}>
                        <div className='w-full h-[13rem]'>
                                    <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Collective, mairie, administration</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
      </div>
    </div>
  )
}

export default Type

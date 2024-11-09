import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/event.jpeg'
import image2 from '@/public/images/scene.jpg'
import image3 from '@/public/images/comm.jpg'
import { ChevronDown } from 'lucide-react'
import Action from './Action'

const Comm = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10 relative xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <Action />
            <div className='flex flex-col items-center justify-center mt-[100px]'>
                  <h2 className='text-2xl md:text-[46px] font-light'>
                        Un besoin en <span className='text-slate-400 font-semibold'>communication</span> ?
                  </h2>
                  <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[24rem]'>
                                          <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>Communication événementielle</h4>
                                    <ChevronDown className='mt-1' />
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[24rem]'>
                                          <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>Communication opérationnelle</h4>
                                    <ChevronDown className='mt-1' />
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[24rem]'>
                                          <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>Identité visuelle</h4>
                                    <ChevronDown className='mt-1' />
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
            </div>
      </div>
  )
}

export default Comm

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/event.jpeg'
import image2 from '@/public/images/scene.jpg'
import image3 from '@/public/images/comm.jpg'

const Real = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10 relative'>
            <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl md:text-[46px] font-light'>
                        Nos <span className='text-slate-400 text-2xl'>réalisations</span> ?
                  </h2>
                  <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[17rem]'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                              </div>
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[17rem]'>
                                          <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[17rem]'>
                                          <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                        </Link>
                  </div>
            </div>
            <div className='mt-16 flex flex-col items-end justify-center'>
                  <Link href={"/realisations"} className='bg-blue-400 text-white px-4 py-3'>
                        Voir les réalisations de la catégorie scénographie
                  </Link>
            </div>
      </div>
  )
}

export default Real

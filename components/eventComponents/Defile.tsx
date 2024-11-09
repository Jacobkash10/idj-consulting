import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/defi.jpg'
import Image from 'next/image'

const Defile = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[60%]'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-24'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                              Défilé de mode
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Au service d'une collection, d'une marque ou d'un créateur, le défilé change 
                              de sens et devient un spectacle chorégraphique vivant et théâtral dans la mise 
                              en scène. IDJ Consulting, agence événementielle à Paris, prend en charge votre 
                              défilé dans sa globalité et vous propose les prestations suivantes : chorégraphie, 
                              scénographie, casting des mannequins, backstage, éclairage, sonorisation, vidéo...
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={""} className='bg-blue-400 text-white px-4 py-3'>
                                          Organiser un défilé de mode
                                    </Link>
                              </div>
                        </div>
                  </div>
                  <div className='w-full lg:w-[40%] mt-10 lg:mt-0'>
                        <div className='w-full h-[29.4rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Defile

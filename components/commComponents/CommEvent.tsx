import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner3.jpg'
import Image from 'next/image'

const CommEvent = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[40%]'>
                        <div className='w-full h-[32.5rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
                  <div className='w-full lg:w-[60%] mt-10 lg:mt-0'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-[50px]'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                                    Communication événementielle
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                                    La communication événementielle est devenue une variable stratégique dont l'objectif est de donner de l'ampleur à chaque événement dans le temps et dans l'espace. Pour chaque événement, Prest'Agency, agence de communication événementielle à Paris et en Ile-de-France, vous propose de raconter une histoire, de créer des contenus diversifiés et attractifs et de concevoir des dispositifs hybrides avec les autres métiers de la communication tels que les relations presse, l'influence marketing et le digital.
                                    IDJ Consulting vous propose des communications avant, pendant et après vos événements : invitation, site web dédié, formulaire d'inscription, animation de vos réseaux sociaux, vidéo, programme, PLV signalétique et tous supports de communication.
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                          Concevoir une communication événementielle
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default CommEvent

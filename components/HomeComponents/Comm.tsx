import React from 'react'
import image3 from '@/public/images/comm.jpg'
import Image from 'next/image'

const Comm = () => {
  return (
      <div className='pt-[450px] pb-[70px]'>
            <div className='px-5 md:px-10 lg:px-20'>
                  <div className='flex flex-col items-center justify-center'>
                        <h4 className='text-xl md:text-[27px] font-light text-slate-400'>
                              Communication
                        </h4>
                        <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
                  </div>
                  <div className='px-2 md:px-10 lg:px-14 block lg:flex items-start gap-20 mt-16'>
                        <div className='w-full lg:w-[70%]'>
                              <p className='font-medium text-[16.5px]'>
                                    Spécialisée dans l'organisation d'événements en tous genres depuis plus quelques années en RDC, 
                                    notre agence de communication s'illustre également dans l'élaboration d'une stratégie de 
                                    communication globale print et online.
                              </p>
                              <ul className='mt-5 list-disc font-light list-inside text-[16.5px]'>
                                    <li className='mb-2'>
                                    Une identité visuelle qui vous correspond, cela comprend logo et charte graphique
                                    </li>
                                    <li className='mb-2'>
                                    Communication événementielle
                                    </li>
                                    <li className='mb-2'>
                                    Contenus infographiques
                                    l’événement
                                    </li>
                                    <li className='mb-2'>
                                    Des dépliants, brochures et autres flyers
                                    </li>
                                    <li className='mb-2'>
                                    Des PLV promotionnelles et événementielles
                                    </li>
                              </ul>
                              <p className='mt-5 font-light text-[16.5px]'>
                                    Et tous les supports de <span className='font-semibold'>communication digitale</span> (sites web, bannières, newsletters...), 
                                    innovants par bien des aspects, pour mettre en valeur vos événements.
                              </p>
                        </div>
                        <div className='w-full lg:w-[30%] mt-10 lg:mt-0'>
                              <div className='w-full h-[20rem]'>
                                    <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                              </div>
                        </div>
                  </div>
            </div>
            <div className='relative'>
                  <div className='bg-bg6 h-[400px] bg-cover bg-fixed absolute left-0 right-0 top-[70px] -z-10'></div>
            </div>
      </div>
  )
}

export default Comm

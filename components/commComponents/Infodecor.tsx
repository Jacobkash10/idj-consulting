import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner4.jpg'
import Image from 'next/image'

const InfoDecor = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[60%]'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-24'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                                    Infodécor, projection vidéo, contenus infographies
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Agence d’événement, IDJ Consulting conçoit des projections vidéo projetées en fond de scène.
                              L’infodécor permet de scénariser vos prises de parole.
                              Notre agence événementielle accompagne également vos événements avec des infographies, jingles, génériques, transitions, synthés et autres vidéos motion design.
                              Ces supports multimédias permettent de rythmer et d’animer les interventions de vos conférenciers.
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                    Infodécor, projection vidéo, contenus infographies
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

export default InfoDecor

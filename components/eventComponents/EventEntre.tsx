import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner3.jpg'
import Image from 'next/image'

const EventEntre = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[40%]'>
                        <div className='w-full h-[29.4rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
                  <div className='w-full lg:w-[60%] mt-10 lg:mt-0'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-[50px]'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                                    Événement d'entreprise
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Anniversaire d'entreprise, inauguration de nouveaux locaux, journée portes ouvertes, 
                              lancement de produit... Ces événements sont des occasions de développer la notoriété 
                              de votre structure et défaire passer des messages à fort impact. Disposant de 25 ans 
                              d'expérience, IDJ Consulting vous propose des dispositifs événementiels efficaces, 
                              uniques et créatifs pour donner de la visibilité et aller à la rencontre de tous 
                              vos publics. Férues de technique, nos équipes vous conseillent dans le choix des 
                              matériels et dans leur implantation : sonorisation, éclairage, scène, vidéo, écrans LED...
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                          Organiser un événement d'entreprise
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default EventEntre

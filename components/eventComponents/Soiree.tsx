import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner4.jpg'
import Image from 'next/image'

const Soiree = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[60%]'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-24'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                                    Soirée d'entreprise
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                                    Vous souhaitez organiser une soirée événementielle pour vos équipes ? 
                                    Vous prévoyez une soirée de lancement de produits ou une soirée de gala 
                                    pour vos clients ? La fin de l'année approchant, vous envisagez d'inviter 
                                    vos collaborateurs à une soirée des voeux ? Pour toutes vos soirées d'entreprise, 
                                    IDJ Consulting vous accompagne et s'occupe de votre projet de A à Z : recherche de lieux, 
                                    définition du thème et des animations, communication digitale...
                              </p>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/devis"} className='bg-blue-400 text-white px-4 py-3'>
                                          Organiser une soirée d'entreprise
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

export default Soiree

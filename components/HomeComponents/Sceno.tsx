"use client"

import Link from 'next/link'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
      Carousel,
      CarouselContent,
      CarouselItem,
    } from "@/components/ui/carousel"
import Image from 'next/image'
import image1 from '@/public/images/event.jpeg'
import image2 from '@/public/images/scene.jpg'
import image3 from '@/public/images/comm.jpg'

const Sceno = () => {

      const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
          )

  return (
    <div className='px-5 md:px-10 lg:px-20 pt-[450px] pb-[70px]'>
      <div className='flex flex-col items-center justify-center'>
            <h4 className='text-xl md:text-[27px] font-light text-slate-400'>
                  Scénographie
            </h4>
            <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
      </div>
      <div className='px-2 md:px-10 lg:px-14 block lg:flex items-start gap-20 mt-16'>
            <div className='w-full lg:w-[30%]'>
            <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
            >
                  <CarouselContent>
                        <CarouselItem>
                              <div className='w-full h-[24rem]'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                              </div>
                        </CarouselItem>
                        <CarouselItem>
                              <div className='w-full h-[24rem]'>
                                    <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                              </div>
                        </CarouselItem>
                        <CarouselItem>
                              <div className='w-full h-[24rem]'>
                                    <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                              </div>
                        </CarouselItem>
                  </CarouselContent>
            </Carousel>
            </div>
            <div className='w-full lg:w-[70%] mt-10 lg:mt-0'>
                  <p className='font-light'>   
                        IDJ Consulting est une agence de communication événementielle où 
                        l’humain prime et les énergies fusionnent. C’est aussi un état 
                        d’esprit au service de nos clients qui nous permet de créer des <span className='font-semibold'>événements sur-mesure</span>, créateurs de valeurs et porteurs de sens !
                  </p>
                  <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                        Une agence événementielle qui vous accompagne de la conception à la mise en œuvre de vos événements
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                  <ul className='mt-5 list-disc font-light list-inside text-[16.5px]'>
                        <li className='mb-2'>
                              Scénographie, décoration, mapping vidéo
                        </li>
                        <li className='mb-2'>
                        Création de concept fort et différenciant
                        </li>
                        <li className='mb-2'>
                        Proposition de thématiques et d’animations attractives et ludiques qui vont nourrir
                        l’événement
                        </li>
                        <li className='mb-2'>
                        Solutions techniques : sonorisation, éclairage, scène, écran LED
                        </li>
                        <li className='mb-2'>
                        Pose de toiles et lycras, tentes et chapiteaux
                        </li>
                        <li className='mb-2'>
                        Mise en lumière de vos sites et de vos événements
                        </li>
                        <li className='mb-2'>
                        Vidéo événementielle, vidéo institutionnelle, film teasing, film invitation, tutorial
                        </li>
                        <li className='mb-2'>
                        <span className='text-slate-400'>Infodécor</span>, projection vidéo, fond de scène
                        </li>
                  </ul>
            </div>
      </div>
      <div className='mt-10'>
            <p className='font-light mb-5 text-[16.5px]'>
                  IDJ Consulting transforme tous vos espace et lieux pour organiser vos soirées et autres événements. 
                  Même les plus inadaptés ou innappropriés.
            </p>
            <Link href={""} className='bg-gray-500 text-white px-4 py-3 text-sm md:text-base'>
                  Découvrez nos transformations
            </Link>
      </div>
    </div>
  )
}

export default Sceno

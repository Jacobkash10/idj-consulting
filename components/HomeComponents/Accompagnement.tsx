"use client"

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

const Accompagnement = () => {

      const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
          )

  return (
      <div className='px-5 md:px-10 lg:px-20 mt-[500px]'>
            <div>
                  <h5 className='mt-10 text-2xl md:text-3xl font-light'>
                  Un accompagnement stratégique et opérationnel de nos clients
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
            </div>
            <div className='px-1 md:px-10 lg:px-16'>
                  <div className='block md:flex items-start gap-20 mt-10'>
                        <div className=''>
                              <p className='font-light text-base'>
                              Chez IDJ Consulting, agence événementielle, nous comprenons l'importance que revêt la cible de vos événements et de vos communications. Celle-ci doit se sentir engagée et être intégrée dès la conception de votre stratégie d'entreprise. C'est pourquoi notre agence événementielle - implantée à Paris et active dans toute la RDC - vous propose un encadrement à chaque étape-clef, en amont même de vos événements d'entreprise. Ensemble, nous réfléchirons de façon cohérente aux actions à mettre en place et à l'utilisation des divers moyens de communication.
                              </p>
                        </div>
                        <div className='mt-10 md:mt-0'>
                              <p className='font-light text-base'>
                              Sur tous vos événements (convention d'entreprise, défilé de mode, inauguration d'ouverture, anniversaire, soirée de gala...), IDJ Consulting est présente dès le montage des infrastructures (montage de scène, installation cat walk, sonorisation éclairage, décoration, PLV, traiteur...) et gère chaque phase de votre manifestation. En ce sens, nous veillerons à vous consulter pour définir le minutage et, ainsi, répondre à vos exigences.
                              </p>
                        </div>
                  </div>
                  <div className='block md:flex items-start gap-20 mt-10'>
                        <div className='w-full md:w-[55%]'>
                              <p className='font-light text-base'>
                              Disponible, à l'écoute et investie dans ses missions, IDJ Consulting, agence événementielle à Kinshasa, vous apporte son expertise dans la création d'événements et d'actions de communication en adéquation avec vos objectifs. Grâce à une structure à taille humaine, nos équipes vous offriront un accompagnement transversal riche en idées novatrices. Un interlocuteur dédié vous suivra tout au long de notre collaboration, afin d'établir en amont un brief précis et s'assurer du bon déroulement de vos événements, quels que soient les supports de communication retenus. Notez que le digital sera un point essentiel de votre stratégie, un moyen efficace de valoriser vos actions.
                              </p>
                        </div>
                        <div className='w-full md:w-[30%] mt-10 md:mt-0'>
                              <Carousel
                                    plugins={[plugin.current]}
                                    className="w-full md:max-w-xs"
                                    onMouseEnter={plugin.current.stop}
                                    onMouseLeave={plugin.current.reset}
                              >
                                    <CarouselContent>
                                          <CarouselItem>
                                                <div className='w-full h-[22rem]'>
                                                      <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                                      className='w-full h-full object-cover'/>
                                                </div>
                                          </CarouselItem>
                                          <CarouselItem>
                                                <div className='w-full h-[22rem]'>
                                                      <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                                      className='w-full h-full object-cover'/>
                                                </div>
                                          </CarouselItem>
                                          <CarouselItem>
                                                <div className='w-full h-[22rem]'>
                                                      <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                                      className='w-full h-full object-cover'/>
                                                </div>
                                          </CarouselItem>
                                    </CarouselContent>
                              </Carousel>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Accompagnement

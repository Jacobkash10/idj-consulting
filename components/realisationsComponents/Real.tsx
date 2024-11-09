import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/event.jpeg'
import image2 from '@/public/images/scene.jpg'
import image3 from '@/public/images/comm.jpg'

const Real = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10'>
            <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl md:text-[46px] font-light'>
                  Réalisations événementielles et de communication
                  </h2>
                  <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-slate-300' />
                  <p className='md:text-left text-center mt-10 font-light text-[17px]'>
                  Découvrez ci-dessous toutes nos réalisations concernant les événements d’entreprises (séminaires, conventions, soirées, défilés de mode, lancements de produits, inaugurations, anniversaires d’entreprise) et les événements liés au secteur public (vœux du maire, fêtes de ville, concerts, marchés de Noël, soirées à thèmes, les aînés),
                  </p>
            </div>
            <div className='mt-10 flex items-center flex-wrap gap-5'>
                  <button className='bg-blue-400 text-white px-16 py-3 capitalize'>
                        événement
                  </button>
                  <button className='bg-blue-400 text-white px-4 py-3 capitalize'>
                        Scénographie avant / après
                  </button>
                  <button className='bg-blue-400 text-white px-10 py-3 capitalize'>
                        Communication
                  </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[18rem]'>
                                          <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>
                                          Organisation d'une assemnlée générale
                                    </h4>
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[18rem]'>
                                          <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>
                                          Rémise de trophées et soirée de l'innovation
                                    </h4>
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
                  <div>
                        <Link href={'/'}>
                              <div className='w-full h-[18rem]'>
                                          <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                          className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex items-center gap-2 mt-2'>
                                    <h4 className='text-xl font-bold'>
                                          Soirée d'entreprise
                                    </h4>
                              </div>
                              <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                        </Link>
                  </div>
            </div>
            <div className='mt-12'>
                  <p className='md:text-left text-center mt-10 font-light text-[17px]'>
                  L’ensemble de ces réalisations nous permettent de vous sensibiliser au fait que nos années d’expérience en agences événementielles et agences de communication nous permettent de travailler sur des projets de toute envergure dans des domaines aussi divers que variés tant pour les entreprises que pour le secteur public.
                  </p>
                  <p className='md:text-left text-center mt-5 font-light text-[17px]'>
                  Nous mettrons à votre service tout notre enthousiasme, notre disponibilité et notre réactivité afin de contribuer à la réussite de votre évènement, qu’il s’agisse d’une convention, d’un team building, d’une soirée d’entreprise, d’une conférence de presse, d’une soirée à thèmes…) ou de votre actions de communication (création de logo et d’identité visuelle, création de brochures, de flyers, fabrication de PLV, réalisation d’opérations de marketing opérationnel, création de site web, d’invitations…)
                  </p>
            </div>
      </div>
  )
}

export default Real

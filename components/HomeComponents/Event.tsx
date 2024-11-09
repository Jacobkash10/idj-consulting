import Image from 'next/image'
import React from 'react'
import image1 from '@/public/images/micro.png'

const Event = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 pt-[80px] pb-[50px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='block lg:flex items-start justify-between'>
            <div className='w-full lg:w-[70%]'>
                  <div className='flex flex-col items-center justify-center'>
                        <h4 className='text-slate-400 text-[25px] font-light'>Evénements</h4>
                        <hr className='w-[70px] mt-10 text-lg border-[1.5px] border-black' />
                  </div>
                  <h5 className='mt-10 max-w-2xl text-2xl md:text-3xl font-light'>
                        Une agence événementielle à votre disposition pour concevoir vos 
                        événements et offrir de l'ampleur à vos actions de communication
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                  <p className='mt-5 max-w-2xl font-light'>
                        Située à Kinshasa, mais intervenant dans toute la RDC, IDJ Consulting est une agence de 
                        communication événementielle dont la mission est de concevoir, de A à Z, toutes sortes 
                        d'événements pour les entreprises et les collectivités locales.
                  </p>
                  <h5 className='mt-10 max-w-2xl text-2xl md:text-3xl font-light'>
                        Une agence de communication événementielle impliquée
                  </h5>
                  <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                  <p className='mt-5 max-w-2xl font-light'>
                        En tant qu’agence événementielle sur Kinshasa, nous créons autour de tout nouvel événement 
                        une expérience de marque mémorable. Nous allons sur les territoires de l’image, du média 
                        et du digital pour que chaque événement prenne de l’ampleur dans le temps et l’espace et 
                        pour médiatiser ces actions.
                  </p>
                  <div className='w-full mt-8 flex flex-col items-center justify-center'>
                        <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                        className='w-[30%]'/>
                  </div>
            </div>
            <div className='w-full lg:w-[30%] bg-gray-200 px-5 py-16'>
                  <h2 className='uppercase font-medium text-[24px] md:text-[34px]'>Nos réalisations <br />évènementielles</h2>
                  <ul className='mt-5 list-disc font-light text-[16.5px] px-5'>
                        <li className='mb-5'>
                              Organiser <span className='font-semibold'>une convention ou un congrès</span> pour annoncer vos dernières nouveautés
                        </li>
                        <li className='mb-5'>
                              Préparer <span className='font-semibold'>un séminaire incentive ou team building</span> en vue de motiver vos équipes et susciter leur engouement
                        </li>
                        <li className='mb-5'>
                              Mettre sur pied <span className='font-semibold'>une soirée d’entreprise</span> à l'occasion d’un séminaire, d’une convention 
                              ou pour remercier vos collaborateurs
                        </li>
                        <li className='mb-5'>
                              Accueillir vos clients à <span className='font-semibold'>l'anniversaire</span> de
                              votre entreprise, lors d'une <span className='font-semibold'>journée portes ouvertes</span>, ou au lancement de nouveaux produits
                        </li>
                        <li className='mb-5'>
                              Organiser <span className='font-semibold'>un défilé de mode</span> pour présenter, valoriser vos dernières collections.
                        </li>
                        <li className=''>
                              Nous concevons et organisons, étape par étape, l'événement adapté à vos besoins.
                        </li>
                  </ul>
            </div>
      </div>
    </div>
  )
}

export default Event

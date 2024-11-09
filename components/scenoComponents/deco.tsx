import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/banner4.jpg'
import Image from 'next/image'

const Deco = () => {
  return (
      <div className='px-5 md:px-10 lg:px-20 pt-[10px] pb-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='block lg:flex items-start mt-16'>
                  <div className='w-full lg:w-[60%]'>
                        <div className='px-10 bg-white shadow-lg pt-14 pb-24'>
                              <h5 className='mt-5 max-w-2xl text-2xl md:text-3xl font-light'>
                              Scénographie lumineuse et décoration événementielle
                              </h5>
                              <hr className='w-[50px] mt-3 text-lg border-[1.5px] border-slate-400' />
                              <p className='font-light mt-4'>
                              Notre agence d’événements propose une large palette de prestations de décoration pour concevoir des événements uniques et sur-mesure. Créativité et personnalisation sont les fondamentaux de toutes nos scénographies et nos décors. Agence de décoration événementielle, nous pouvons aussi vous fournir des décors existants sur de nombreusesthématiques comme le cinéma, l’exotisme, la plage, Halloween, le western, le Moyen-Âge… N’hésitez pas à nous consulter.
                              </p>
                        </div>
                  </div>
                  <div className='w-full lg:w-[40%] mt-10 lg:mt-0'>
                        <div className='w-full h-[26.2rem]'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                              className='w-full h-full object-cover'/>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Deco

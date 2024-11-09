import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/event.jpeg'
import image2 from '@/public/images/scene.jpg'
import image3 from '@/public/images/comm.jpg'
import { ChevronDown } from 'lucide-react'

const CreateEvent = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 pt-[100px] pb-10'>
      <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl md:text-[46px] font-light'>
                  Créons l’<span className='text-slate-400 text-[25px] font-light'>événement</span> à vos mesures
            </h2>
            <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
            <p className='text-center max-w-5xl mt-10 font-light text-[18px]'>
            IDJ Consulting est une <span className='font-semibold'>agence événementielle basée à Kinshasa</span> spécialisée dans l’événementiel 
            pour l’entreprise, les mairies et les collectivités. Découvrez nos 3 pôles d’activité pour 
            concevoir et organiser votre prochain événement.
            </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <div>
                  <Link href={'/evenement'}>
                        <div className='w-full h-[24rem]'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Evènements</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
            <div>
                  <Link href={'/scenographie'}>
                        <div className='w-full h-[24rem]'>
                                    <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Scénographie</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
            <div>
                  <Link href={'/communication'}>
                        <div className='w-full h-[24rem]'>
                                    <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                              <h4 className='text-xl font-bold'>Communication</h4>
                              <ChevronDown className='mt-1' />
                        </div>
                        <hr className='w-[50px] mt-1 text-lg border-[1.5px] border-black' />
                  </Link>
            </div>
      </div>
    </div>
  )
}

export default CreateEvent

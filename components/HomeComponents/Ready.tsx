import { Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Ready = () => {
  return (
      <div className='relative'>
            <div className='px-5 md:px-10 lg:px-20'>
                  <div className='bg-gray-200 shadow-[15px_15px_0px_0px_rgb(240,242,250)]'>
                        <div className='py-10'>
                              <div className='flex flex-col items-center justify-center'>
                                    <h4 className='text-xl md:text-[27px] font-light'>
                                          Prêt à organiser votre <span className='text-slate-400 text-[22px] font-light'>événement ?</span> Lancez vous !
                                    </h4>
                                    <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
                              </div>
                              <div className='mt-10 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 justify-between px-5'>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Convention d'entreprise</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Défilé de mode</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Journée portes ouvertes</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Séminaire, team building</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Lancement produit</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Anniversaire entreprise</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Animations</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Concert</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Conférence</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Animations digitales</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Soirée d'entreprise</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Inauguration</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Soirée des voeux</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Animations artistiques et artistes</p>
                                          </div>
                                    </div>
                              </div>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={""} className='bg-gray-500 text-white px-4 py-3'>
                                          Organiser mon événement
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
            <div className='relative'>
                  <div className='bg-bg4 h-[400px] bg-cover bg-fixed absolute left-0 right-0 -top-[30px] -z-10'></div>
            </div>
    </div>
  )
}

export default Ready

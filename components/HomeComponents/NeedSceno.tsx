import React from 'react'
import { Minus } from 'lucide-react'
import Link from 'next/link'

const NeedSceno = () => {
  return (
      <div className='relative'>
            <div className='px-5 md:px-10 lg:px-20'>
                  <div className='bg-gray-200 shadow-[15px_15px_0px_0px_rgb(240,242,250)]'>
                        <div className='py-10'>
                              <div className='flex flex-col items-center justify-center px-3'>
                                    <h4 className='text-xl md:text-[27px] font-light'>
                                          Vous avez un besoin en <span className='text-slate-400 text-[22px] font-light'>scénographie ?</span> Lancez vous !
                                    </h4>
                                    <hr className='w-[60px] mt-5 text-lg border-[1.5px] border-black' />
                              </div>
                              <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between px-5'>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Décoration à thème</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Toiles et lycras</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Tentes et chapiteaux</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Éclairage</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Sonorisation</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Scène</p>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Écrans géants</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Décorations et illuminations</p>
                                          </div>
                                          <div className='flex items-center gap-2 mt-2'>
                                                <Minus size={32} className='text-slate-300' />
                                                <p className='font-semibold'>Vidéo</p>
                                          </div>
                                    </div>
                              </div>
                              <div className='mt-16 flex flex-col items-end justify-center mr-5'>
                                    <Link href={"/scenographie"} className='bg-gray-500 text-white px-4 py-3'>
                                          Créer ma scénographie
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
            <div className='relative'>
                  <div className='bg-bg5 h-[400px] bg-cover sm:bg-fixed absolute left-0 right-0 -top-[30px] -z-10'></div>
            </div>
      </div>
  )
}

export default NeedSceno

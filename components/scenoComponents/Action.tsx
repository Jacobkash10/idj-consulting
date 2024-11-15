import Link from 'next/link'
import React from 'react'

const Action = () => {
  return (
      <div className='absolute top-5 md:-top-10 md:left-10 md:right-10 lg:left-20 lg:right-20 xxl:left-[10rem] xll:left-[20rem] xxx:left-[22%] lll:left-[25%] 
            xxl:right-[10rem] xll:right-[20rem] xxx:right-[22%] lll:right-[25%]'>
            <div className='bg-[#141414] flex items-center flex-col justify-center p-8 w-full shadow-[15px_15px_0px_0px_rgb(240,242,250)]'>
                  <div className='block sm:flex items-center gap-3'>
                        <h3 className='text-white font-normal mb-5 sm:mb-0'>
                        Organiser des évènements
                        </h3>
                        <Link href={'/devis'} className='bg-blue-400 text-white py-3 px-4 text-sm md:text-[17px]'>
                              Demander un devis gratuitement
                        </Link>
                  </div>
            </div>
      </div>
  )
}

export default Action

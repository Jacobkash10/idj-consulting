import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='mt-36 bg-gray-600 flex items-center flex-col justify-center p-8'>
      <div className='block sm:flex items-center gap-3'>
            <h3 className='text-white text-sm sm:text-lg md:text-[21px] uppercase font-medium mb-5 sm:mb-0'>
              Le blog, des nouveautés chaque semaine !
            </h3>
            <Link href={''} className='bg-slate-400 text-white py-3 px-4 text-sm md:text-[18px]'>
                  Accèder au blog
            </Link>
      </div>
    </div>
  )
}

export default Blog

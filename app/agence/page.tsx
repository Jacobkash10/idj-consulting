import Agence from '@/components/agenceComponents/Agence'
import Banner from '@/components/agenceComponents/Banner'
import Blog from '@/components/HomeComponents/Blog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Agence />
      <Blog />
    </div>
  )
}

export default page

import Avis from '@/components/HomeComponents/Avis'
import Blog from '@/components/HomeComponents/Blog'
import Banner from '@/components/temoignagesComponents/Banner'
import Title from '@/components/temoignagesComponents/Title'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Title />
      <Avis />
      <Blog />
    </div>
  )
}

export default page

import Avis from '@/components/HomeComponents/Avis'
import Blog from '@/components/HomeComponents/Blog'
import Autre from '@/components/temoignagesComponents/Autre'
import Banner from '@/components/temoignagesComponents/Banner'
import Title from '@/components/temoignagesComponents/Title'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Title />
      <Avis />
      <Autre />
      <Blog />
    </div>
  )
}

export default page

import Blog from '@/components/HomeComponents/Blog'
import Banner from '@/components/scenoComponents/Banner'
import Chapiteau from '@/components/scenoComponents/Chapiteau'
import Deco from '@/components/scenoComponents/deco'
import Real from '@/components/scenoComponents/Real'
import Sceno from '@/components/scenoComponents/Sceno'
import Sonore from '@/components/scenoComponents/Sonore'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Sceno />
      <Deco />
      <Sonore />
      <Chapiteau />
      <Real />
      <Blog />
    </div>
  )
}

export default page

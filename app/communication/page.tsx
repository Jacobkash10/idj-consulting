import Banner from '@/components/commComponents/Banner'
import Comm from '@/components/commComponents/Comm'
import CommEvent from '@/components/commComponents/CommEvent'
import Identite from '@/components/commComponents/Identité'
import InfoDecor from '@/components/commComponents/Infodecor'
import Real from '@/components/commComponents/Real'
import Blog from '@/components/HomeComponents/Blog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Comm />
      <InfoDecor />
      <CommEvent />
      <Identite />
      <Real />
      <Blog />
    </div>
  )
}

export default page

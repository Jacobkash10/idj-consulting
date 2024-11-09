import Blog from '@/components/HomeComponents/Blog'
import Banner from '@/components/realisationsComponents/Banner'
import Real from '@/components/realisationsComponents/Real'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Real />
      <Blog />
    </div>
  )
}

export default page

import Banner from '@/components/eventComponents/Banner'
import Defile from '@/components/eventComponents/Defile'
import Event from '@/components/eventComponents/Event'
import EventEntre from '@/components/eventComponents/EventEntre'
import Real from '@/components/eventComponents/Real'
import Soiree from '@/components/eventComponents/Soiree'
import Blog from '@/components/HomeComponents/Blog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Event />
      <Soiree />
      <EventEntre />
      <Defile />
      <Real />
      <Blog />
    </div>
  )
}

export default page

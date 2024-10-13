import React from 'react'
import Innovation from '../Service-Components/Innovation'
import Operations from '../Service-Components/Operations'
import ServiceHero from '../Service-Components/ServiceHero'
import ServiceBanner from '../Service-Components/ServiceBanner'
import Installation from '../Service-Components/Installation'

const Services = () => {
  return (
    <div className='w-full'>
      <ServiceHero />
      <Operations />
      <Innovation />
      <ServiceBanner />
      <Installation />
    </div>
  )
}

export default Services
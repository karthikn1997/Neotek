import React from 'react'
import Hero from '../Home-Components/Hero'
import HomeProducts from '../Home-Components/HomeProducts'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      <Hero />
      <HomeProducts />
    </div>
  )
}

export default Home
import React from 'react'
import ServiceBg from "../assets/servicebg1.jpeg"


const ServiceHero = () => {
  return (
    <div className='w-full'>
      <div className='relative w-full h-[20vh] md:h-[45vh]'>
        {/* Background image */}
        <img src={ServiceBg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="Contact Background" />

        {/* Blue transparent overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 border-b-4 border-blue-500'></div>

        {/* Centered text with inside border */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
          <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-80 p-4 box-border gap-2 sm:gap-4'>

            <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3 text-border-bottom' style={{ textShadow: "2px 2px 0px black" }}>Services</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero
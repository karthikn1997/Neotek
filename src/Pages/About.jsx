import React from 'react'
import AboutBg from "../assets/about-neo.jpeg"
import Sercure from "../assets/secure.png"
import About1 from "../assets/about-1.jpeg"
import About2 from "../assets/about-2.jpeg"

const About = () => {
  return (
    <>
      <div className='relative w-full h-[20vh] md:h-[45vh]'>
        {/* Background image */}
        <img src={AboutBg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="Contact Background" />

        {/* Blue transparent overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 border-b-4 border-blue-500'></div>

        {/* Centered text with inside border */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
          <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-70 p-4 box-border gap-2 sm:gap-4'>
            <h1 className='text-white text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3 text-border-bottom gradient-text'>About Us</h1>
          </div>
        </div>
      </div>


      <div className='w-[95%] min-h-[80vh] mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10 bg-slate-100 my-10 rounded-lg shadow-lg sm:p-6'>

        <div className='w-full h-full lg:w-[60%] p-4 sm:p-6 space-y-4'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-3'>
            About Neotek
          </h2>
          <p className='text-sm sm:text-[16px] text-gray-700 leading-relaxed'>
            Neotek Sorting Company is a leading provider of advanced food sorting solutions, specializing in high-quality sorting for nuts, rice, and other food products. Using cutting-edge color sorting technology, we ensure that only the finest products make it to the market, helping businesses meet the highest standards of quality and safety.
          </p>
          <p className='mt-4 text-sm sm:text-[16px] text-gray-700 leading-relaxed'>
            Our state-of-the-art sorting machines are designed to detect and remove any impurities, ensuring consistency and precision in every batch. Whether you're looking for efficient sorting of nuts, rice, or other agricultural products, Neotek delivers reliable and efficient results, maintaining the purity and quality of your products.
          </p>
          <p className='mt-4 text-sm sm:text-[16px] text-gray-700 leading-relaxed'>
            At Neotek, we understand that quality control is critical to your business. That's why we focus on innovation and accuracy, making sure that every grain or nut is sorted with the highest level of precision. Join the leaders in food product sorting and let Neotek Sorting Company enhance the quality of your production line.
          </p>
        </div>

        <div className='w-full h-full lg:w-[50%] mt-10 lg:mt-0'>
          <div className='relative ml-[60px] xxs:ml-[80px] xs:ml-[100px]'>
            {/* Main Image */}
            <img
              src={About1}
              className='w-[90%] h-[90%] sm:w-[70%] sm:h-[70%] object-cover mx-auto border-4 border-white rounded-lg shadow-md mb-10 '
              alt=""
            />

            {/* Corner Image - Overlapping by 50% */}
            <img
              src={About2}
              className='w-[90%] h-[90%] sm:w-[50%] sm:h-[70%] absolute z-10 object-cover bottom-[-10%] sm:left-[-5%] left-[-20%] shadow-lg border-4 border-white rounded-lg'
              alt=""
            />
          </div>
        </div>
      </div>


    </>
  )
}

export default About

//service_bicfmgc

import React from 'react'
import Worker from "../assets/worker1.jpg"

const HomeAbout = () => {
    return (
        <div className='w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden'>
            <div className='w-full lg:w-[50%] h-[40vh] sm:h-[60vh] bg-[#5F86BF] flex flex-col justify-center items-center'>
                <div className='w-full md:w-[70%] p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-300'>Neotek Sorting International</h1>
                    <p className='tracking-wider text-white text-3xl md:text-4xl font-semibold text-center lg:text-left' style={{ textShadow: "1px 1px 0px black" }}>Global Intelligent Sorting </p>
                    <p className='text-white text-lg my-4 text-center lg:text-left'>Innovative sorting solutions for industries worldwide, ensuring precision and efficiency in every operation. Empowering businesses with cutting-edge technology for a sustainable future.</p>
                    <button className=' py-2 px-6 border-2 border-white text-white text-sm md:text-xl tracking-wider rounded-3xl hover:bg-gray-200 hover:text-[#5F86BF] hover:border-gray-500 font-semibold'>About Us</button>
                </div>
            </div>
            <div className='w-full lg:w-[50%] h-[40vh] sm:h-[60vh] overflow-hidden'>
                <img src={Worker} className="w-full h-[40vh] sm:h-[60vh] object-cover" alt="" />
            </div>
        </div>
    )
}

export default HomeAbout;

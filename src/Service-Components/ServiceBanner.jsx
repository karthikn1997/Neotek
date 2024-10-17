import React from 'react';
import { FaComments } from 'react-icons/fa'; // Icon for the button

const ServiceBanner = () => {
    return (
        <div className='w-full min-h-[45vh] bg-[#37689F] flex justify-center items-center'>
            <div className='bg-[#0B2F58] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center border rounded-lg p-6 px-10 '>

                {/* Left Text Section */}
                <div className='w-full md:w-[70%] text-center md:text-left p-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white  leading-snug font-sans'>
                    Want to explore <span className='text-[#56CCF2] font-sans'>how automation could optimise</span> your plant's operations?
                </div>

                {/* Right Button Section */}
                <div className='w-full md:w-[30%] flex justify-center md:justify-end mt-6 md:mt-0'>
                    <button className='bg-gradient-to-r from-transparent to-[#2F80ED] text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-lg shadow-md flex items-center hover:bg-[#1F4C73]  transition duration-300 border border-gray-400'>
                        <FaComments className='mr-3' />
                        Speak to our experts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;

import React, { useEffect } from "react";
import Image1 from '../assets/worker3.jpg';
import Image2 from '../assets/worker2.jpg';
import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Innovation = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);

    return (
        <div className='w-full min-h-screen py-14 px-4'>
            <div className='w-[90%] mx-auto flex flex-col items-center'>
                <div className='w-full text-left' data-aos="fade-up" data-aos-delay="300">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 border-b-2 border-blue-500 pb-2'>
                        About <span className='text-blue-600'>Services</span>
                    </h1>
                    <div className='text-lg lg:text-xl text-gray-900 leading-7 mb-4'>
                        <p className='mb-4'>
                            Neotek Sorting Company specializes in advanced sorting solutions for food products such as rice, wheat, lentils (dhall), nuts, and more. Our state-of-the-art sorting technology ensures that food items are processed with the highest level of precision and quality control. By leveraging cutting-edge machinery and AI-driven techniques, we help reduce impurities and ensure that only the finest grains and products make it to the market.
                        </p>
                        <p className='mb-4'>
                            Our sorting machines use advanced optical sensors and AI algorithms to analyze and categorize food products based on size, color, shape, and even subtle defects. This ensures that the final product meets strict industry standards for quality, purity, and safety. Whether it's sorting grains, pulses, or nuts, Neotek ensures maximum yield while minimizing wastage.
                        </p>
                        <p>
                            The sorting process begins by scanning and detecting impurities or foreign materials in raw food products. The products are then separated based on predefined quality parameters, ensuring that only the top-grade items are processed further. Our commitment to food safety and efficiency makes Neotek a trusted partner for businesses in the food industry, striving to deliver superior products to consumers.
                        </p>
                    </div>
                </div>

                {/* Image Row */}
                <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-10 py-4' data-aos="fade-up" data-aos-delay="300">
                    {/* First Image Container */}
                    <div className='w-full lg:w-1/2 relative border-2 border-blue-600 py-4 px-2 border-opacity-50 shadow-lg'>
                        <img
                            src={Image1}
                            alt="Food Sorting Technology"
                            className='w-[80%] h-[300px] mx-auto object-cover rounded-md'
                        />
                    </div>

                    {/* Enhanced Center Divider */}
                    <div className='flex flex-col items-center mx-6 lg:mx-8'>
                        {/* Decorative Circle in the Center */}
                        <div className='hidden md:block relative'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl shadow-md'>
                                {/* Icon in the center */}
                                <IoSettingsSharp />
                            </div>
                        </div>

                        {/* Vertical Dotted Line */}
                        <div className='h-[100px] sm:h-[200px] w-[2px] bg-dotted bg-blue-600 opacity-70 mt-4'></div>
                    </div>

                    {/* Second Image Container */}
                    <div className='w-full lg:w-1/2 relative border-2 border-blue-600 py-4 px-2 border-opacity-50 shadow-lg'>
                        <img
                            src={Image2}
                            alt="Food Sorting"
                            className='w-[80%] h-[300px] mx-auto object-cover rounded-md'
                        />
                    </div>
                </div>

                <div className='text-lg lg:text-xl text-gray-900 leading-7 mb-4' data-aos="fade-up" data-aos-delay="300">
                    <p className='mb-4'>
                        Neotek is not only focused on efficiency but also on sustainability. By reducing food wastage and ensuring top-quality products, we contribute to a more sustainable food supply chain. Our dedicated team of experts ensures that every batch of sorted products meets the highest standards of hygiene and quality.
                    </p>
                    <p>
                        With Neotek Sorting Company, you can trust that your food products—whether rice, wheat, lentils, or nuts—are sorted with precision, ensuring the highest quality for consumers. Join us as we revolutionize the way food products are sorted and processed, bringing innovation to the heart of the food industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Innovation;

import React, { useState, useEffect } from 'react'
import AboutBg from "../assets/about-neo.jpeg"
import About1 from "../assets/about-1.jpeg"
import About2 from "../assets/about-2.jpeg"
import MissionImg from "../assets/mission.jpeg"
import VisionImg from "../assets/vission.jpeg"
import Circle from "../assets/neotek-logo-c.png";
import Text from "../assets/neotek-logo-t.png";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const images = [AboutBg, About1, About2, MissionImg, VisionImg];

  useEffect(() => {
    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const imageElements = images.map(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      return img;
    });

    // Cleanup: remove the onload listeners when component unmounts
    return () => {
      imageElements.forEach(img => {
        img.onload = null;
      });
    };
  }, [images]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh] bg-white">
          <div className="flex items-center justify-center mr-20">
            {/* Slower spin animation */}
            <img src={Circle} className="slow-spin w-20 h-20 relative" alt="Spinning Circle" />
            <img src={Text} className="w-32 mt-5 absolute translate-x-14" alt="Neotek Text Logo" />
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className='relative w-full h-[20vh] md:h-[45vh]'>
            <img src={AboutBg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="About Background" />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 border-b-4 border-blue-500'></div>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
              <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-70 p-4 box-border gap-2 sm:gap-4'>
                <h1 className='text-white text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3 text-border-bottom gradient-text'>About Us</h1>
              </div>
            </div>
          </div>

          {/* About Section */}
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
                <img
                  src={About1}
                  className='w-[90%] h-[90%] sm:w-[70%] sm:h-[70%] object-cover mx-auto border-4 border-white rounded-lg shadow-md mb-10'
                  alt="About Neotek"
                />
                <img
                  src={About2}
                  className='w-[90%] h-[90%] sm:w-[50%] sm:h-[70%] absolute z-10 object-cover bottom-[-10%] sm:left-[-5%] left-[-20%] shadow-lg border-4 border-white rounded-lg'
                  alt="About Neotek"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className='w-[95%] min-h-[60vh] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10 bg-white my-10 rounded-lg shadow-lg sm:p-6'>
            <div className='w-full h-full lg:w-[50%] p-4 sm:p-6'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-3'>
                Our Mission
              </h2>
              <p className='text-sm sm:text-[16px] text-gray-700 leading-relaxed'>
                At Neotek, our mission is to revolutionize food sorting technology by providing cutting-edge solutions that enhance the quality and safety of food products across the globe. We strive to offer innovative, precise, and reliable sorting technologies that help businesses maintain the highest standards in food quality.
              </p>
            </div>
            <div className='w-full h-full lg:w-[40%] mb-4 sm:mb-0'>
              <img src={MissionImg} className='w-[95%] sm:w-[60%]  mx-auto h-full object-cover rounded-lg shadow-md ' alt="Mission" />
            </div>
          </div>

          {/* Vision Section */}
          <div className='w-[95%] min-h-[60vh] mx-auto flex flex-col lg:flex-row-reverse justify-center items-center gap-4 sm:gap-6 lg:gap-10 bg-white my-10 rounded-lg shadow-lg sm:p-6'>
            <div className='w-full h-full lg:w-[50%] p-4 sm:p-6'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-3'>
                Our Vision
              </h2>
              <p className='text-sm sm:text-[16px] text-gray-700 leading-relaxed'>
                Our vision is to be the global leader in food sorting technology, delivering solutions that guarantee the highest levels of precision and quality. We aim to continue innovating, ensuring that our clients can rely on us for the most advanced sorting solutions available.
              </p>
            </div>
            <div className='w-full h-full lg:w-[40%] mb-4 sm:mb-0'>
              <img src={VisionImg} className='w-[95%] sm:w-[60%] mx-auto h-full object-cover rounded-lg shadow-md' alt="Vision" />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default About

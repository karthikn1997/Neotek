import React, { useEffect } from 'react';
import HeroBg from '../assets/herobg.png';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SX12 from "../assets/sx-12.png"
import SX10 from "../assets/sx-10.png"
import SX8 from "../assets/sx-8.png"

import { FaRegArrowAltCircleDown } from "react-icons/fa";

function scrollToSection() {
  const section = document.getElementById('target-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Adjust the duration as needed
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className='w-full min-h-[70vh] p-2 sm:p-6'>
      <section className="relative min-h-[70vh] w-full flex flex-col lg:flex-row items-center justify-center hero-section bg-gradient-to-b from-gray-900 via-[#005AB3] to-white lg:bg-gradient-to-r border-2 border-orange-500 py-8 overflow-hidden">
        
    <div className="w-full lg:w-[50%] absolute inset-0 bg-cover bg-left bg-opacity-30 -mt-[200px] sm:-mt-[70px]"
    style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.3}} 
    ></div>

        <div className='px-8 pt-10 lg:p-20 flex flex-col justify-center items-center lg:items-start'>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold mb-4 text-center lg:text-left" data-aos="slide-right" data-aos-delay="300">
            Welcome to <span className='text-orange-400 font-extrabold' style={{ textShadow: "2px 2px black" }}>Neotek Sorting</span>
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left" data-aos="slide-left" data-aos-delay="300">
            We're glad you're here. Discover amazing products and join our community!
          </p>
          {/* <button onClick={scrollToSection} className="bg-gradient-to-r from-[#005AB3] via-gray-900 to-black hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-xl transition duration-300 border-[1px] border-gray-800 whitespace-nowrap" data-aos="flip-left" data-aos-delay="300">
            <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
              <span className='text-lg lg:text-2xl text-white'>Coming Soon</span><span className='text-2xl animate-bounce'><FaRegArrowAltCircleDown className='text-orange-400' /></span>
            </div>
          </button> */}
        </div>

        <div className="relative z-10 text-center px-5 w-full lg:w-[60%]" data-aos="slide-left ">
          <Slider {...settings}>
            <div>
              <img src={SX12} className='w-full sm:w-[80%] mx-auto mt-12 ' alt="" />
              <h1 className='text-white font-semibold text-lg md:text-2xl tracking-wider'>Sx-12</h1>
            </div>

            <div>
              <img src={SX10} className='w-full sm:w-[80%] mx-auto mt-8' alt="" />
              <h1 className='text-white font-semibold text-lg md:text-2xl tracking-wider'>Sx-10</h1>
            </div>

            <div>
              <img src={SX8} className='w-full sm:w-[80%] mx-auto mt-6' alt="" />
              <h1 className='text-white font-semibold text-lg md:text-2xl tracking-wider'>Sx-8</h1>
            </div>
          </Slider>

        </div>
      </section>
    </div>
  );
}

export default Hero;

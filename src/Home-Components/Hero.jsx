import React, { useEffect } from 'react';
import HeroBg from '../assets/neo-hero.png';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="relative min-h-[70vh] w-full flex items-center justify-center hero-section">

      <div className="absolute inset-0 mx-auto bg-cover bg-center animate-bg-image" 
      style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "contain"}} 
      ></div>

      <div className="relative z-10 text-center p-5 w-full " >
        <Slider {...settings}>
          <div>
            <h1 className="text-3xl md:text-5xl text-black font-bold mb-4" data-aos="slide-right" data-aos-delay="300">
              Welcome to <span className='text-[#005AB3] font-extrabold'>Neotek Sorting</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl text-black font-bold mb-4" data-aos="slide-left" data-aos-delay="300">
              Explore <span className='text-[#005AB3] font-extrabold'>Our Products</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl text-black font-bold mb-4" data-aos="fade" data-aos-delay="300">
              Experience our <span className='text-[#005AB3] font-extrabold'>Machineries</span>
            </h1>
          </div>
        </Slider>
        <p className="text-sm md:text-xl tracking-wider text-black mb-8" data-aos="slide-left" data-aos-delay="300">
          We're glad you're here. Discover amazing products and join our community!
        </p>
        <button onClick={scrollToSection} className="bg-gradient-to-r from-[#005AB3] via-gray-900 to-black hover:bg-gradient-to-l text-white font-semibold py-3 px-8 rounded-xl transition duration-300 border-[1px] border-gray-800" data-aos="flip-left" data-aos-delay="300">
          <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
            <span className='text-lg md:text-2xl text-white'>Comming Soon</span><span className='text-2xl animate-bounce'><FaRegArrowAltCircleDown /></span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;

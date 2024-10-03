import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeProducts from '../Home-Components/HomeProducts';
import HomeAbout from '../Home-Components/HomeAbout';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      <Hero />
      <HomeAbout />
      <HomeProducts />
    </div>
  );
};

export default Home;

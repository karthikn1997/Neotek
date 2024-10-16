import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeProducts from '../Home-Components/HomeProducts';
import HomeAbout from '../Home-Components/HomeAbout';
import OurPurpose from '../Home-Components/OurPurpose';
import Future from '../Home-Components/Future';
import Technologies from '../Home-Components/Technologies';
import Commodities from '../Home-Components/Commodities';
import Testimonial from '../Home-Components/Testimonial';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <Hero />
      <OurPurpose />
      <HomeAbout />
      <HomeProducts />
      <Future />
      <Technologies />
      <Commodities />
      <Testimonial />
    </div>
  );
};

export default Home;

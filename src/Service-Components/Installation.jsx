import React from 'react';
import Install from "../assets/worker4.jpg"

const Installation = () => {
  return (
    <div className="w-full  bg-gray-100 flex justify-center items-center py-16 px-6 border-2 border-black">
      
      {/* Main container with two-column layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Installation Process Text */}
        <div className="space-y-6 md:pr-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            Support from <span className='text-[#37689F]'>Installation to Insight</span>
          </h1>
          <p className="text-lg md:text-xl  text-gray-600 leading-relaxed">
            Neotek Sorting Machines offers comprehensive support through every step of the installation process. From initial setup to performance optimization, our team ensures seamless integration of our machines into your production line. With our expert insights and solutions, you can maximize productivity and efficiency.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-lg ">
            <li>Site evaluation and machine setup</li>
            <li>On-site installation and configuration</li>
            <li>Performance testing and optimization</li>
            <li>Post-installation training and support</li>
            <li>Ongoing maintenance and troubleshooting</li>
          </ul>
        </div>
        
        {/* Right: Image Section */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src={Install} // Replace with the actual image URL
            alt="Installation Process"
            className="w-full h-auto max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Installation;

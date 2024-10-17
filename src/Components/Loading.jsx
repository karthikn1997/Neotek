// Components/Loading.js
import React from 'react';
import Circle from "../assets/neotek-logo-c.png";
import Text from "../assets/neotek-logo-t.png";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex items-center justify-center mr-20">
        {/* Slower spin animation */}
        <img src={Circle} className="slow-spin w-28 h-28 relative" alt="Spinning Circle" />
        <img src={Text} className="w-40 mt-5 absolute translate-x-16" alt="Neotek Text Logo" />
      </div>
    </div>
  );
};

export default Loading;

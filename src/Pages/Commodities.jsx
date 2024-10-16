import React, { useEffect } from 'react';
import Bg from "../assets/banner.jpeg";
import Rice from "../assets/rice.jpg";
import RostedPeanut from "../assets/roated-peanut.jpg";
import Groundnut from "../assets/groundnut.jpg";
import FiredGram from "../assets/fired-gram.jpg";
import Wheat from "../assets/wheat.jpg";
import UradDal from "../assets/urad-dal.jpg";
import ToorDal from "../assets/toor-dal1.jpg";
import GreenDal from "../assets/green-dal.jpg";
import MansoorDal from "../assets/masoor-dal.jpg";
import Cardamom from "../assets/cardamom.jpg";
import Cashewnut from "../assets/cashewnut.jpg";
import CoffeeBeans from "../assets/coffee-beans.jpg";
import Millet from "../assets/millet.jpg";
import Raisins from "../assets/raisins.jpg";
import Plastics from "../assets/plastics.jpg";
import Granules from "../assets/granules.jpg";

const Commodities = () => {
    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const commodities = [
        { name: 'Rice', img: Rice },
        { name: 'Roasted Peanut', img: RostedPeanut },
        { name: 'Groundnut', img: Groundnut },
        { name: 'Fired Gram', img: FiredGram },
        { name: 'Wheat', img: Wheat },
        { name: 'Urad Dal', img: UradDal },
        { name: 'Toor Dal', img: ToorDal },
        { name: 'Green Dal', img: GreenDal },
        { name: 'Mansoor Dall', img: MansoorDal },
        { name: 'Cardamom', img: Cardamom },
        { name: 'Cashewnut', img: Cashewnut },
        { name: 'Coffee Beans', img: CoffeeBeans },
        { name: 'Millet', img: Millet },
        { name: 'Raisins', img: Raisins },
        { name: 'Plastics', img: Plastics },
        { name: 'Granules', img: Granules },
    ];

    return (
        <div className='w-full'>
            {/* Background Section */}
            <div className='relative w-full h-[20vh] md:h-[45vh]'>
                <img src={Bg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="Contact Background" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 border-b-4 border-blue-500'></div>
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
                    <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-80 p-4 box-border gap-2 sm:gap-4'>
                        <h1 className='text-white text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3' style={{ textShadow: "2px 2px 0px black" }}>Commodities</h1>
                    </div>
                </div>
            </div>

            {/* Commodities Section */}
            <div className="w-full py-8 pt-8 sm:pt-14 bg-white">
                <div className="w-[90%] mx-auto">
                    <h2 className="text-2xl sm:text-4xl text-blue-700 tracking-wider font-bold text-center mb-8">Explore Our Commodities</h2>

                    {/* Responsive Grid Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {commodities.map((commodity, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={commodity.img}
                                    alt={commodity.name}
                                    className="mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 border-2 border-blue-500 p-2 object-cover"
                                />
                                <p className="mt-4 text-lg text-black font-medium">{commodity.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commodities;

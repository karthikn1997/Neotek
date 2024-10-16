import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const Commodities = () => {
    const navigate = useNavigate(); // Create a navigate function

    // Slider settings with responsive design
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Default number of slides to show on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // For medium screens (like tablets)
                settings: {
                    slidesToShow: 4, // Show 4 slides
                },
            },
            {
                breakpoint: 768, // For small screens (like mobile devices)
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
        ],
    };

    return (
        <div className="w-full py-8 pt-14 bg-gradient-to-b from-gray-900 to-[#005AB3] ">
            <div className="w-[90%] mx-auto">
                <h2 className="text-2xl sm:text-4xl text-white tracking-wider font-bold text-center mb-8">Our Commodities</h2>

                <Slider {...settings}>
                    {commodities.map((commodity, index) => (
                        <div
                            key={index}
                            className="text-center mb-6 cursor-pointer"
                            onClick={() => navigate('/commodities')} // Navigate on click
                        >
                            <img
                                src={commodity.img}
                                alt={commodity.name}
                                className="mx-auto w-32 h-32 rounded-[50%] border-2 border-white p-1"
                            />
                            <p className="mt-2 text-lg text-white">{commodity.name}</p>
                        </div>
                    ))}
                </Slider>

                {/* View More Button */}
                <div className="text-center mt-8">
                    <button
                        className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all"
                        onClick={() => navigate('/commodities')} // Navigate to /commodities
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Commodities;

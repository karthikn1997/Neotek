import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SX2 from "../assets/sx-2.png";
import SX3 from "../assets/sx-3.png";
import SX4 from "../assets/sx-4.png";
import SX5 from "../assets/sx-5.png";
import SX6 from "../assets/sx-6.png";
import SX7 from "../assets/sx-7.png";
import SX8 from "../assets/sx-8.png";
import SX10 from "../assets/sx-10.png";
import SX12 from "../assets/sx-12.png";
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
    const navigate = useNavigate();

    const products = [
        { image: SX2, Model: "SX 2" },
        { image: SX3, Model: "SX 3" },
        { image: SX4, Model: "SX 4" },
        { image: SX5, Model: "SX 5" },
        { image: SX6, Model: "SX 6" },
        { image: SX7, Model: "SX 7" },
        { image: SX8, Model: "SX 8" },
        { image: SX10, Model: "SX 10" },
        { image: SX12, Model: "SX 12" },
    ];

    // Slider settings
    const settings = {
        dots: false, // Add dots below the slider
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1,
        arrows: true, // Ensure arrows are enabled
        responsive: [
            {
                breakpoint: 1350, // For tablets and below
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024, // For tablets and below
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600, // For mobile devices
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='w-full sm:w-[95%] mx-auto py-8 px-2 xxs:px-4'>
            {/* Products section */}
            <div className='w-[85%] md:w-[96%] mx-auto font-bold text-2xl md:text-3xl mb-4 py-4 sm:pt-10 tracking-wider'>
                <h1 className='border-x-4 border-blue-500 py-2 sm:py-4 text-blue-500 text-center md:text-left bg-gray-100 px-6 rounded-lg' style={{ textShadow: "1px 1px 1px black" }}>Our Products</h1>
            </div>

            {/* Slider component */}
            <Slider {...settings} className="px-4">
                {products.map((product, index) => (
                    <div key={index} className='px-4' onClick={() => navigate('/products')}>
                        <div className='shadow-md rounded-md overflow-hidden border border-orange-600'>
                            {/* Product content */}
                            <div className='p-0 flex flex-col items-center'>
                                {/* Product image with dark background and full width */}
                                <div className='bg-white w-full flex flex-col justify-center items-center px-6 rounded-t-md transition duration-1000 ease-in-out hover:bg-blue-900 hover:text-white'>
                                    <img
                                        src={product.image}
                                        alt={product.Model}
                                        className='w-80 h-80 object-contain transition-transform duration-500 ease-in-out hover:scale-105 rounded-md'
                                    />
                                    <h2 className='text-xl font-semibold text-center mb-3 -mt-4' style={{ textShadow: "1px 1px 0px gray" }}>{product.Model}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* View More Button */}
            <div className="text-center mt-8">
                <button
                    className="px-6 py-2 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-200 transition-all text-base"
                    onClick={() => navigate('/products')} // Navigate to /commodities
                >
                    View More
                </button>
            </div>
        </div>
    );
};

export default HomeProducts;

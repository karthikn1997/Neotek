import React from 'react'
import SX2 from "../assets/sx-2.png"
import SX3 from "../assets/sx-3.png"
import SX4 from "../assets/sx-4.png"
import SX5 from "../assets/sx-5.png"
import SX6 from "../assets/sx-6.png"
import SX7 from "../assets/sx-7.png"
import SX8 from "../assets/sx-8.png"
import SX10 from "../assets/sx-10.png"
import SX12 from "../assets/sx-12.png"

const HomeProducts = () => {

    const products = [
        {
            image: SX2,
            Model: "SX 2",
        },
        {
            image: SX3,
            Model: "SX 3",
        },
        {
            image: SX4,
            Model: "SX 4",
        },
        {
            image: SX5,
            Model: "SX 5",
        },
        {
            image: SX6,
            Model: "SX 6",
        },
        {
            image: SX7,
            Model: "SX 7",
        },
        {
            image: SX8,
            Model: "SX 8",
        },
        {
            image: SX10,
            Model: "SX 10",
        },
        {
            image: SX12,
            Model: "SX 12",
        },
    ]

    return (
        <div>
            {/* Products section */}
            <div className='w-full sm:w-[95%] mx-auto py-8 px-4 '>
                <div className='w-full text-center font-bold text-2xl md:text-4xl mb-4 py-4 sm:py-10 tracking-wider '>
                    <h1 className='text-border-bottom pb-2 sm:pb-3 text-blue-500' style={{ textShadow: "1px 1px 1px black" }}>Our Products</h1>
                </div>
                {/* Grid to display two products per row */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
                    {products.map((product, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-md overflow-hidden'>


                            {/* Product content */}
                            <div className='p-0 flex flex-col items-center'>
                                {/* Product image with dark background and full width */}
                                <div className='bg-gradient-to-t from-white via-[#005AB3] to-white w-full flex justify-center p-6  border-2 border-black rounded-t-md'>
                                    <img
                                        src={product.image}
                                        alt={product.Model}
                                        className='w-80 h-80 object-contain transition-transform duration-300 ease-in-out hover:scale-105 rounded-md' // Increased image size
                                    />
                                </div>
                            </div>
                            {/* Product title as a card header */}
                            <div className='bg-gradient-to-r from-blue-800 via-black to-blue-800 text-white text-center py-2 '>
                                <h2 className='text-xl font-semibold' style={{ textShadow: "1px 1px 0px gray" }}>{product.Model}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
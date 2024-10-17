import React from 'react';
import Bg from "../assets/purpose.jpg";

const OurPurpose = () => {
    return (
        <section className="w-full mx-auto p-2 sm:p-6">
            <div className="flex flex-col xl:flex-row w-full py-4 lg:py-10 text-left bg-slate-100 overflow-hidden items-center justify-between">

                {/* Left Side: Image for larger screens */}
                <div className="hidden xl:block w-full xl:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                        src={Bg}
                        alt="Our Purpose"
                        className="w-[92%] h-full object-cover mx-auto"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full xl:w-1/2 px-6 md:px-8 xl:px-12 p-2">
                    <div className="mx-auto font-bold text-2xl md:text-3xl mb-4 tracking-wider">
                        <h1
                            className="border-b-2 border-blue-500 pb-2 sm:pb-3 text-blue-500 text-left bg-slate-100 px-0"
                            style={{ textShadow: "1px 1px 1px black" }}
                        >
                            Our Purpose
                        </h1>
                    </div>
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
                        At Neotek Sorting, we are committed to ensuring that food products, such as nuts, rice, wheat, and other essential commodities, meet the highest quality standards. Our purpose is to revolutionize the food sorting industry by implementing advanced sorting technologies that enhance efficiency, reduce waste, and deliver consistent, high-quality products to our customers.
                    </p>

                    {/* Image for mobile view */}
                    <div className="block xl:hidden w-full h-64 mb-4 md:mb-6 overflow-hidden">
                        <img
                            src={Bg}
                            alt="Our Purpose"
                            className="w-full h-full object-cover mx-auto"
                        />
                    </div>

                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
                        We understand that the quality of food is critical for healthy living, and we are dedicated to making sure that every grain and nut is carefully sorted, ensuring only the best reaches our consumers. With innovation at the heart of our processes, we strive to improve the safety and reliability of the food supply chain.
                    </p>
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                        Neotek Sorting not only enhances product quality but also empowers producers to optimize their yields and minimize losses. Our focus is on delivering excellence in every batch of food products we process, contributing to a healthier, safer, and more sustainable future for everyone.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurPurpose;

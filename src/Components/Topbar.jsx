import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Topbar = () => {
    return (
        <>
            <div className="hidden md:flex flex-col">
                <div className="w-full bg-[#005AB3] text-white md:px-20 text-xs tracking-wider py-1">
                    <div className="flex flex-col md:flex-row items-center justify-between">

                        {/* Left Side: Address and Email */}
                        <div className="md:flex lg:justify-evenly md:justify-center items-center md:gap-6">
                            <div className="md:flex items-center gap-1 text-[rgb(255,181,36)]">
                                <MdLocationPin className="text-[#FF7A01] w-4 h-4 rounded-full mt-1" />
                                <a href="#" className="text-white">
                                    123 Street, New York
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-[rgb(255,181,36)]">
                                <IoMdMail className="text-[#FF7A01] w-4 h-4 rounded-full mt-1" />
                                <a href="#" className="hover:underline underline-offset-4 font-semibold">
                                    sales@neoteksorting.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-[rgb(255,181,36)]">
                                <FaSquarePhone className="text-[#FF7A01] w-4 h-4 rounded-full " />
                                <p className="tracking-wider">9994442222</p>
                            </div>
                        </div>

                        {/* Center: Phone */}


                        {/* Right Side: Social Icons */}
                        <div className="flex items-center mt-2 md:mt-0">
                            <span className="mr-3">24x7 Support</span>
                            <a href="#" className="text-white hover:text-[rgb(255,181,36)] border-x-[1px] border-black px-2">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-white hover:text-[rgb(255,181,36)]  px-2">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-white hover:text-[rgb(255,181,36)] border-s-[1px] border-black px-2">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-white hover:text-[rgb(255,181,36)] border-x-[1px] border-black px-2">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;

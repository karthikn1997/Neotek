import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/neotek-logo.jpeg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav bg-white z-10 top-0 border-b-[1px] border-gray-700 mt-7">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between sm:py-3 py-3">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-white">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[90px] lg:w-[130px]"
                            />
                        </div>
                        <div className="hidden md:block font-semibold">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to="/commodities"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Commodities
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095] hover:bg-white focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="w-full md:hidden bg-gray-200 flex flex-col justify-center items-center ">
                    <div className="w-full flex flex-col text-[14px] sm:text-[16px] font-semibold text-left tracking-wider">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/commodities"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            Commodities
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-300 px-4 py-1"
                                    : "px-4 py-1"
                            }
                            onClick={toggleNavbar}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

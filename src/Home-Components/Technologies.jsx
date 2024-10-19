import React from 'react';
import Learning from "../assets/learning.jpg"
import Database from "../assets/database.jpg"
import { SiThealgorithms } from "react-icons/si";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";
import { PiNetwork } from "react-icons/pi";
import { GiTargeting } from "react-icons/gi";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { PiWindFill } from "react-icons/pi";
import { PiDetectiveBold } from "react-icons/pi";
import { GiValve } from "react-icons/gi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { LuAlignVerticalSpaceAround } from "react-icons/lu";
import { GiProcessor } from "react-icons/gi";
import { MdHd } from "react-icons/md";

const Technologies = () => {
    const technologies = [
        {
            title: "Deep-learning Algorithm",
            description: "Realize the learning of multidimensional characteristics such as color, shape, texture, area, etc. Continuously improve and iterate data.",
            img: Learning,
            icon: <SiThealgorithms />
        },
        {
            title: "NEOTEK Cloud Database",
            description: "NEOTEK invested to build an open mass sorting application database, cloud interactive storage, a wide range of material solutions are exclusively created for you. We share the convenience and value of the big data era with users.",
            img: Database,
            icon: <PiCloudArrowUpBold />
        },
        {
            title: "Intelligent Control Dimming System",
            description: "NEOTEK intelligent control light source system has been upgraded again. High brightness, high penetration light source, intelligent control system matches material sorting requirements and changes in the environment.",
            img: Learning,
            icon: <TbEaseInOutControlPoints />
        },
        {
            title: "NEOTEK S-Class Vision System",
            description: "Designed for HD recognition of extremely small and light foreign objects, it perfectly achieves ultra clear, stable, and precise recognition. Precise targeting, precise hitting.",
            img: Learning,
            icon: <FaTripadvisor />
        },
        {
            title: "All Things Connected",
            description: "Real-time Online NEOTEK cloud platform, remote interconnection, control, maintenance, early warning, upgrade, operation and maintenance data, intelligent Online inspection, etc., can easily have real-time services, your exclusive Online butler.",
            img: Learning,
            icon: <PiNetwork />
        },
        {
            title: "Target Position 3.0 Algorithm",
            description: "Based on the characteristics of the material and adopting surface information extraction and multi-point ultra high speed processing technology. The center of mass dynamic 3.0 processing algorithm can quickly locate impurities and accurately strike them.",
            img: Learning,
            icon: <GiTargeting />
        },
        {
            title: "Balanced Feeding System",
            description: "Intelligent analysis adaptive material level flow rate system, balance the flow of the production line to ensure the best sorting effect, better production capacity, and unattended.",
            img: Learning,
            icon: <PiDotsSixVerticalBold />
        },
        {
            title: "Breathable Bionic Wind Net System",
            description: "Engineering bionic design, intelligent breathing air network system, multi directional separation design, non-stop cleaning, more thorough cleaning.",
            img: Learning,
            icon: <PiWindFill />
        },
        {
            title: "Spectral Fusion Detection Technology",
            description: "NEOTEK is the first to break through the spectral fusion identification technology. Spectral fusion is more complementary, color, material, shape sorting, and impurity identification capabilities have been significantly improved.",
            img: Learning,
            icon: <PiDetectiveBold />
        },
        {
            title: "Super Alloy UHF Solenoid Valve",
            description: "Customized spray valves for materials, adopt high-density arrangement layout, filamentary airflow hitting technology, and accurately remove. Wear-resistant and high temperature resistant super alloys, matched for life.",
            img: Learning,
            icon: <GiValve />
        },
        {
            title: "Intelligent Collection Auto Learning System",
            description: "The NEOTEK Kunpeng intelligent sample collection autonomous learning system expands and eliminates sample data through methods such as characteristic labeling, morphological labeling, and associated/non-associated feature labeling of biological samples.",
            img: Learning,
            icon: <MdOutlineAutoGraph />
        },
        {
            title: "Bicolor Space Algorithm",
            description: "The dual color space algorithm can intelligently extract subtle feature differences of materials, select the best recognition color gamut and image capture, and comprehensively solve the problem of sorting extremely small differences in color, shape, material, etc.",
            img: Learning,
            icon: <LuAlignVerticalSpaceAround />
        },
        {
            title: "NEOTEK Open Source Large Model",
            description: "NEOTEK has independently developed a user sharing Online data platform, with a total open source sample data volume exceeding 20 billion, and a leading database volume and segmented categories. Empowering users with massive data support, the sorting effect can continuously evolve.",
            img: Learning,
            icon: <GiProcessor />
        },
        {
            title: "HD Deep Learning Technology",
            description: "Adopting the latest HD deep learning algorithm and multi-dimensional fusion algorithm, it can detect subtle details and achieve perfect quality.",
            img: Learning,
            icon: <MdHd />
        }
    ];


    return (
        <div className="w-full min-h-screen py-8 xxs:py-12 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="max-w-screen-2xl mx-auto">
                <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 xxs:mb-8 text-blue-700">14 Core Technologies</h1>
                <p className="text-lg sm:text-xl text-center text-gray-700 mb-6 xxs:mb-12">
                    Discover the cutting-edge technologies that drive innovation at NEOTEK.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 "
                        >
                            {/* <img
                                src={tech.img}
                                alt={tech.title}
                                className="w-full h-48 object-cover"
                            /> */}
                            <div className='border-b-2 border-orange-500 text-4xl flex justify-center items-center py-4 sm:py-6 bg-gradient-to-r from-[#194F7D] via-white to-[#194F7D] text-orange-600 font-extrabold'>
                                {tech.icon}
                            </div>
                            <div className="pt-4 p-2">
                                {/* Displaying the number before the title */}
                                <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 text-center">
                                    {index + 1}. {tech.title}
                                </h3>
                                {/* <p className="text-gray-600 text-base">
                                    {tech.description}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Technologies;

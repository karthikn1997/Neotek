import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";; // Import custom icons

const testimonials = [
    // Testimonial data remains unchanged
    {
        name: 'John Doe',
        designation: 'CEO',
        company: 'Global Tech Solutions',
        feedback: 'Neotek Sorting Company has been a game changer for us. Their expertise in sorting and handling our materials has significantly improved our efficiency.',
    },
    {
        name: 'Jane Smith',
        designation: 'Operations Manager',
        company: 'Innovative Supplies Inc.',
        feedback: 'The quality of service provided by Neotek is unmatched. Their attention to detail and dedication to excellence has made a huge difference in our operations.',
    },
    {
        name: 'David Brown',
        designation: 'Logistics Head',
        company: 'LogiSmart Enterprises',
        feedback: 'Working with Neotek Sorting Company has been a seamless experience. Their professionalism and quick response time are truly impressive.',
    },
    {
        name: 'Emily Johnson',
        designation: 'Procurement Director',
        company: 'ProcureX Ltd.',
        feedback: 'Neotek’s sorting services have streamlined our supply chain. We’ve seen a marked improvement in accuracy and delivery speed.',
    },
    {
        name: 'Michael Lee',
        designation: 'General Manager',
        company: 'SortIt Solutions',
        feedback: 'Neotek Sorting Company has set a new benchmark in the industry. Their reliability and high-quality service make them our go-to partner.',
    },
];

// Custom arrow components
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -left-8 sm:-left-14 transform -translate-y-1/2 p-4 cursor-pointer z-10 "
            onClick={onClick}
        >
            <RiArrowLeftDoubleFill className="text-blue-700 text-3xl hover:text-blue-900 " />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -right-8 sm:-right-14 transform -translate-y-1/2 p-4 cursor-pointer z-10"
            onClick={onClick}
        >
            <RiArrowRightDoubleFill className="text-blue-700 text-3xl hover:text-blue-900" />
        </div>
    );
};

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />, // Using custom next arrow
        prevArrow: <PrevArrow />, // Using custom previous arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full bg-white py-16 px-4 relative">
            <div className="max-w-[1240px] mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4 mb-8">
                            <div className="bg-blue-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full min-h-[250px]">
                                <p className="text-gray-700 italic mb-6 text-sm sm:text-lg">"{testimonial.feedback}"</p>
                                <div className="mt-auto">
                                    <div className="text-gray-900 font-bold text-lg">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.designation}, {testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;

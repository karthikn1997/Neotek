import React from 'react';
// Import icons from react-icons
import { FaLeaf, FaCheckCircle, FaCog, FaTools } from 'react-icons/fa';

const services = [
    {
        title: 'Sorting Technology',
        description: 'Advanced sorting solutions for food products.',
        icon: <FaCog className="text-blue-500 text-5xl mb-4" />,
    },
    {
        title: 'Quality Assurance',
        description: 'Ensuring the highest quality standards for food products.',
        icon: <FaCheckCircle className="text-blue-500 text-5xl mb-4" />,
    },
    {
        title: 'Consultation Services',
        description: 'Expert advice on food sorting processes.',
        icon: <FaLeaf className="text-blue-500 text-5xl mb-4" />,
    },
    {
        title: 'Support & Maintenance',
        description: 'Ongoing support for our sorting technology solutions.',
        icon: <FaTools className="text-blue-500 text-5xl mb-4" />,
    },
];

const Operations = () => {
    return (
        <section className="w-full mx-auto p-6 bg-slate-200 mt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-800 tracking-widest">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center "
                    >
                        {service.icon}
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-lg">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Operations;

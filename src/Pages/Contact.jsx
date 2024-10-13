import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import ContactBg from "../assets/contact.jpeg"
import { FaHandshake } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before sending the email

    emailjs
      .sendForm(
        'service_jz1vxqd',
        'template_3jup4gc',
        form.current,
        '868XTbxMy-qSSIk3L'
      )
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: "top-center",
          });
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: "top-center",
          });
        }
      )
      .finally(() => {
        setLoading(false); // Set loading to false after email sending is completed
      });
  };

  return (
    <>
      <div className='bg-white'>
        <div className='relative w-full h-[20vh] md:h-[45vh]'>
          {/* Background image */}
          <img src={ContactBg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="Contact Background" />

          {/* Blue transparent overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 border-b-4 border-blue-500'></div>

          {/* Centered text with inside border */}
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
            <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-60 p-4 box-border gap-2 sm:gap-4'>
            
              <h1 className='text-blue-600 text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3 text-border-bottom'>Contact Us</h1>
            </div>
          </div>
        </div>


        <div className="w-[95%] md:w-[90%] xl:w-[80%] mx-auto flex flex-col-reverse lg:flex-row justify-center items-start bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 my-6 sm:my-10 gap-4 sm:gap-10">
          {/* Toast Notification Container */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            pauseOnFocusLoss
          />

          {/* Get in Touch Section */}
          <div className="w-full lg:w-[50%] text-center lg:text-left mx-auto mt-6 lg:mt-0">
            <div className='flex justify-center items-center lg:justify-start lg:items-start gap-4 mb-2 sm:mb-4'>
              <h2 className="flex text-2xl sm:text-4xl font-semibold text-gray-800  text-border-bottom pb-1 sm:pb-2">Get in Touch </h2><FaHandshake className='hidden lg:block w-8 h-8 sm:w-12 sm:h-12 text-yellow-600'/>
            </div>
            <p className="text-gray-700 mb-4 text-sm sm:text-lg">We'd love to hear from you! Reach out to us through the following:</p>
            <p className="text-gray-700 mb-2">
              <span className="mr-2">📍</span> 4/79, Karadiyanur, Rasipuram, Thengalpalayam, Namakkal, Tamilnadu, Salem - 636301
            </p>
            <p className="text-gray-700 mb-2">
              <span className="mr-2">📞</span> Sales: 9514088115
            </p>
            <p className="text-gray-700 mb-2">
              <span className="mr-2">📞</span> Service: 9514088115
            </p>
            <p className="text-gray-700 mb-2">
              <span className="mr-2">✉️</span> Email: sales@neoteksorting.com
            </p>


            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 mx-auto justify-center items-center lg:items-start lg:justify-start">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={36} /></a>
              <a href="#" className="text-green-500 hover:text-green-700"><FaWhatsapp size={36} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={36} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={36} /></a>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[60%]">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here"
                  rows="4"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading} // Disable button while loading
                  className={`w-full py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                >
                  {loading ? <ClipLoader size={25} color={"#123abc"} loading={loading} /> : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;

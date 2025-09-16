import React from 'react';
import logo from '../assets/Logo (2).png';

import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="relative bg-cyan-700 text-white py-12">

         <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div>
            <div className='flex items-center gap-2'>
            <img className='w-12' src={logo} alt="" />
          <h2 className="text-2xl font-bold mb-4">
            Yum<span className='text-cyan-200'>Bit</span>
          </h2>
            </div>
          <p className="leading-relaxed text-white mb-4">
            Taste, review, and share your favorite dishes. Your guide to delicious bites!
          </p>
          <div >
             <p className="text-sm text-white">Copyright © {new Date().getFullYear()} - All right reserved by  Yum<span className='text-cyan-200'>Bit</span></p>
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-white hover:text-rose-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-blue-700 text-2xl">
             <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-red-500 text-2xl">
             <FaYoutube />
            </a>
          </div>
          <p>Estern Housing , Postogola</p>
          <p>Dhaka-1204 , Bangladesh</p>
          <p className="mt-2">mariumfija@gmail.com</p>
          <p>Mobile : 01609358914</p>
        </div>
      </div>
            </footer>
        </div>
    );
};

export default Footer;
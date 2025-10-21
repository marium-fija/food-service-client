import React from 'react';
import animationData from "../assets/about.json"
import { FaCheckCircle } from 'react-icons/fa';
import Lottie from 'lottie-react';
import logo from '../assets/Logo (2).png';

const About = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto bg-gradient-to-b from-cyan-50 to-white  gap-10 px-6 md:px-16 py-16'>
         <div className="flex flex-col-reverse md:flex-row items-center justify-between  ">
      
      {/* Left side - Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold flex gap-2">
          Why People Love <span><div className='flex items-center gap-2'>
                  <img className='w-14' src={logo} alt="" />
                  <h1 className='font-bold text-3xl'>Yum<span className='text-cyan-500'>Bit</span></h1>
              </div></span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          <span className='font-bold'>Yum<span className='text-cyan-500'>Bit</span></span> is not just another food delivery website — it's a smart food
          community for everyone! Whether you're a traveler exploring Bangladeshi
          flavors or a local food lover, <span className='font-bold'>Yum<span className='text-cyan-500'>Bit</span></span> connects you with the best
          restaurants, authentic meals, and real user experiences. From reviewing
          food to managing your own service, we make food-sharing easier, faster,
          and more enjoyable. Discover, taste, and share — all in one place!
        </p>
      </div>

      {/* Right side - Animation */}
      <div className="md:w-1/2 flex justify-center">
        <Lottie animationData={animationData} loop={true} className="w-[300px] md:w-[400px]" />
      </div>
    </div>
    <div>
        {/* Bullet Features */}
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Become a <span className="font-semibold">Yumbit Partner</span> and grow your food business.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Join as a <span className="font-semibold">Yumbit Ambassador</span> to promote top restaurants.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Explore <span className="font-semibold">Bangladesh’s top restaurants</span> with honest reviews.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            See <span className="font-semibold">most-loved dishes</span> and try them when you visit.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Add, edit, or delete your <span className="font-semibold">own food services</span> easily.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Write, edit, or delete <span className="font-semibold">authentic food reviews</span>.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-cyan-700 mt-1" /> 
            Subscribe to get updates on <span className="font-semibold">new dishes & offers</span>.
          </li>
        </ul>
      </div>
            </div>
        </div>
    );
};

export default About;
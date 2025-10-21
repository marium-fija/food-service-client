import React from 'react';
import ambassador from "../assets/ambassador.jpg"
import { FaCrown } from 'react-icons/fa';
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoArrowRedoSharp } from "react-icons/io5";

const Ambassador = () => {
    return (
        <div className='px-6 md:px-16 py-16 bg-gradient-to-r from-white via-cyan-50 to-white gap-10'>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-3">
          <FaCrown className="text-cyan-600 text-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex gap-3">
            Become a <h1 className='font-bold '>Yum<span className='text-cyan-500'>Bit</span></h1> Ambassador
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Do you love food and want to be part of something exciting?   
          Join our <span className='font-bold'>Yum<span className='text-cyan-500'>Bit</span></span> Ambassador Program 
          and represent our brand at your university or community!  
          As an ambassador, you’ll earn exclusive rewards, Yumbit merchandise,  
          certificates, and leadership experience. 
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 flex gap-2 items-center">
            <VscDebugBreakpointData /> How to Become an Ambassador:
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Be an active student or community leader</li>
            <li>Promote Yumbit events & offers on social media</li>
            <li>Host mini food events or review sessions</li>
            <li>Inspire others to join the Yumbit family ❤️</li>
          </ul>
        </div>

        <button className="btn btn-primary rounded-3xl">
          Apply Now <IoArrowRedoSharp size={20}/>
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={ambassador} 
          alt="Yumbit Ambassador"
          className="rounded-2xl shadow-xl w-[500px] md:w-full object-cover"
        />
      </div>
    </section>
        </div>
    );
};

export default Ambassador;
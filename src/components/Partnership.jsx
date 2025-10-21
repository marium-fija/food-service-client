import React, { useState } from 'react';
import Swal from 'sweetalert2';
import partneship from "../assets/partership.json"
import Lottie from 'lottie-react';
import { IoIosSend } from "react-icons/io";

const Partnership = () => {
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Info",
        text: "Please fill out both email and message!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Request Sent!",
      text: "Thank you for showing interest in partnering with Yumbit!",
    });

    setEmail("");
    setMessage("");
  };
    return (
        <div className='px-6 md:px-16 py-16 bg-gradient-to-r from-cyan-50 to-white gap-10'>
           <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      
      {/* Left side - Lottie animation */}
      <div className="md:w-1/2 flex justify-center">
        <Lottie animationData={partneship} loop={true} className="w-[300px] md:w-[600px]" />
      </div>

      {/* Right side - Form */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold flex gap-3">
          Become a <h1 className='font-bold '>Yum<span className='text-cyan-500'>Bit</span></h1> Partner 🤝
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Join our growing <span className='font-bold'>Yum<span className='text-cyan-500'>Bit</span></span> family and expand your food business!  
          As a partner, you’ll get access to a larger audience, real customer 
          insights, and opportunities to promote your restaurant nationwide.  
          Let’s make food delivery smarter — together! 🍽️
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us why you want to partner with Yumbit..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary rounded-3xl"
          >
            Send Request <IoIosSend size={20}/>
          </button>
        </form>
      </div>
    </div> 
        </div>
    );
};

export default Partnership;
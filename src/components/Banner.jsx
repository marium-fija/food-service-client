import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter"; 
import { motion } from "framer-motion";
import slider1 from '../assets/Slider-1.jpg';
import slider2 from '../assets/Slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';



const Banner = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
    const banners = [
  {
    id: 1,
    image: slider1,
    headings: ["Juicy Steak , Perfectly Cooked", "Melt-in-Your-Mouth Taste"],
  },
  {
    id: 2,
    image: slider2,
    headings: ["Grilled Chicken, Hot , Fresh & Tender", "Full of Flavor and spices "],
  },
  {
    id: 3,
    image: slider3,
    headings: ["Crispy Waffles , Sweet , Soft & Tasty" , "Perfect Breakfast Delight"],
  },
];
    return (
        <div>
            <div className="w-full h-[600px] relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation 
         onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full h-[600px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-1/4 left-30 text-white space-y-4 max-w-md"
              >
                {i === currentIndex && ( 
                  <h2 className="text-3xl md:text-5xl font-bold">
                    <Typewriter
                      words={banner.headings}
                      loop={1}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </h2>
                )}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
};

export default Banner;
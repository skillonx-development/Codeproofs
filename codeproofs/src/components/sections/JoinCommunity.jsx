import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Update image imports to use full path or ensure correct webpack/vite configuration
import image1 from "../../assets/images/community/image1.png"; 
import image2 from "../../assets/images/community/image2.png"; 
import image3 from "../../assets/images/community/image3.png";

import "swiper/css";
import "swiper/css/pagination";

const JoinCommunity = () => {
  return (
    <section className="bg-background text-text min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-24">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-accent text-lg font-semibold flex items-center">
          <span className="mr-2">⚖</span> Join Our Community
        </h3>
        <h2 className="text-5xl font-bold leading-tight">
          Be Part of a Growing Developer Network
        </h2>
        <p className="text-secondary text-lg leading-relaxed">
          Connect with like-minded developers, share your knowledge, receive
          feedback, and establish yourself as an expert in your technical
          domain.
        </p>
        <button className="relative px-6 py-3 bg-green-700 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-green-800 group">
          <span className="absolute inset-0 bg-white opacity-20 rounded-lg blur-md transition duration-300 group-hover:opacity-30"></span>
          <span className="relative z-10">Join Our Community</span>
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="absolute w-20 h-20 bg-white opacity-10 rounded-full animate-ping"></span>
            <span className="w-4 h-4 bg-white rounded-full opacity-60 animate-pulse"></span>
          </span>
        </button>
      </div>
      
      {/* Right Content - Image Carousel */}
<div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
  <div className="w-[600px] h-600 rounded-2xl shadow-2xl bg-gradient-to-br from-primary to-black p-8 flex items-center justify-center">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-120 h-320"
    >
      {/* Slide 1 */}
      <SwiperSlide className="flex items-center justify-center">
        <img
          src={image1}
          alt="Invite Your Team"
          className="w-full h-full object-cover rounded-xl"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="flex items-center justify-center">
        <img
          src={image2}
          alt="Payment Success"
          className="w-full h-full object-cover rounded-xl"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="flex items-center justify-center">
        <img
          src={image3}
          alt="Payment Success"
          className="w-full h-full object-cover rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</div>
    </section>
  );
};

export default JoinCommunity;
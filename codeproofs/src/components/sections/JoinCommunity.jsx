import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
          Join Our Community
        </button>
      </div>

      {/* Right Content - Image Carousel */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="w-[450px] h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-primary to-black p-6 flex items-center justify-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-full h-full"
          >
            {/* Slide 1 */}
            <SwiperSlide className="flex items-center justify-center">
              <img
                src="/images/slide1.png"
                alt="Invite Your Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="flex items-center justify-center">
              <img
                src="/images/slide2.png"
                alt="Payment Success"
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;

import React from "react";
import codingImage from "../../assets/images/hero.png"; // Ensure correct import path

const Hero = () => {
  return (
    <section className="relative bg-background text-text flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* God Rays Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative max-w-3xl mx-auto mt-16">
        <h1 className="text-6xl md:text-7xl font-bold leading-[1.2] tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Transforming Ideas
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent">
            into Digital Excellence
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          At Codeproofs, we specialize in providing cutting-edge software development and cybersecurity solutions tailored to your needs. Our mission is to secure your digital landscape while fostering innovation across various industries.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition">
          Get started
        </button>
      </div>

      {/* Image Below */}
      <div className="relative mt-12 w-full flex justify-center">
        <img src={codingImage} alt="Coding Setup" className="w-full max-w-4xl object-cover rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;

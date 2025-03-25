import React from "react"; 
import codingImage from "../../assets/images/hero.png"; // Ensure correct import path

const Hero = () => {
  return (
    <section className="bg-background text-text flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Hero Content */}
      <div className="max-w-3xl mx-auto mt-20"> {/* Increased mt-20 for more spacing */}
        <h1 className="text-6xl md:text-7xl font-bold leading-[1.2] tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Transforming Ideas
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent">
            into Digital Excellence
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-8"> {/* Increased mt-8 for better spacing */}
          At Codeproofs, we specialize in providing cutting-edge software development and cybersecurity solutions tailored to your needs. Our mission is to secure your digital landscape while fostering innovation across various industries.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition">
          Get started
        </button>
      </div>

      {/* Image Below */}
      <div className="mt-20 w-full flex justify-center"> {/* Increased spacing for better balance */}
        <img src={codingImage} alt="Coding Setup" className="w-full max-w-4xl object-cover rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;

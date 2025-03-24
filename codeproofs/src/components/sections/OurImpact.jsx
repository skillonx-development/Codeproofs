import React from "react";
import bgImage from "../../assets/images/hero.png"; // Ensure the path is correct
import { FaCheckSquare } from "react-icons/fa"; // Check icon

const OurImpact = () => {
  return (
    <section className="relative w-full min-h-screen bg-background text-white pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container (Top-Left Corner) */}
      <div className="relative max-w-3xl px-6 md:px-12 lg:px-24 py-16 z-10 text-left">
        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg leading-relaxed font-satoshi">
          Our expertise spans across enterprise software, cloud platforms, CRM systems, ERP solutions, billing software, AI applications, web development, mobile apps, and cybersecurity solutions. With our talented team, we deliver cutting-edge technology that drives business growth.
        </p>

        {/* Impact Section */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-accent mt-8">
          Our Impact
        </h3>
        <ul className="mt-4 space-y-3 text-sm md:text-base lg:text-lg font-satoshi">
          <li className="flex items-start">
            <FaCheckSquare className="text-accent mr-2 mt-1" />
            <strong>38+ Satisfied Clients</strong> – Empowering businesses with technology-driven solutions.
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-accent mr-2 mt-1" />
            <strong>Trusted by Global Brands</strong> – Partnering with <strong>AKAI, Hitachi</strong>, and other industry leaders.
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-accent mr-2 mt-1" />
            <strong>Global Expertise</strong> – Delivering solutions tailored to diverse market needs across multiple regions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurImpact;

import React from "react";
import bgImage from "../../assets/images/WhatWeDo.png"; // Ensure correct path

const WhatWeDo = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start bg-background text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark Overlay to Improve Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content (Aligned to the Left) */}
      <div className="relative max-w-3xl px-6 md:px-12 lg:px-24 py-16 z-10 text-left">
        {/* Header */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-accent">
          Years of innovation at Codeproofs!
        </h2>

        <p className="text-sm md:text-base lg:text-lg mt-4 leading-relaxed font-satoshi">
          At <strong>Codeproofs</strong>, we pride ourselves on delivering{" "}
          <strong>cutting-edge software solutions</strong> with a commitment to{" "}
          <strong>innovation and excellence.</strong> With a team of{" "}
          <strong>22+ experienced professionals</strong> and a{" "}
          <strong>global presence in India and Malaysia</strong>, we have
          successfully built a reputation for providing{" "}
          <strong>scalable, secure, and high-performance</strong> digital
          solutions.
        </p>

        {/* What We Do Section */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-accent mt-8">
          What We Do
        </h3>
        <ul className="mt-4 space-y-2 text-sm md:text-base lg:text-lg font-satoshi">
          <li className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <strong>Enterprise Applications</strong> – Scalable solutions to optimize business operations.
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <strong>AI-Driven Security</strong> – Advanced AI-powered cybersecurity for enterprises.
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <strong>Custom Software Development</strong> – Tailored solutions to meet unique business needs.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;

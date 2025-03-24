import React from "react";
import bgImage from "../../assets/images/WatchVideo.jpg"; // Ensure the correct path

const WatchVideo = () => {
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
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-accent">
          Ready? Watch a Video!
        </h3>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed font-satoshi mt-4">
          Experience innovation in action! At Codeproofs, we believe in{" "}
          <strong>delivering technology that speaks for itself.</strong> Watch our latest video to see how our cutting-edge solutions empower businesses worldwide.
        </p>
      </div>
    </section>
  );
};

export default WatchVideo;

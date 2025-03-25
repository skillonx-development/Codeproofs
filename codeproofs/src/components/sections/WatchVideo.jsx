import React from "react";
import bgImage from "../../assets/images/WatchVideo.jpg"; // Ensure the correct path

const WatchVideo = () => {
  return (
    <section className="relative w-full min-h-screen bg-background text-white pt-24 flex items-center justify-between px-6 md:px-12 lg:px-24">
      {/* Text Content - Left */}
      <div className="relative z-10 max-w-xl">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-accent">
          Ready? Watch a Video!
        </h3>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed font-satoshi mt-4">
          Experience innovation in action! At Codeproofs, we believe in <strong>delivering technology that speaks for itself.</strong> Watch our latest video to see how our cutting-edge solutions empower businesses worldwide.
        </p>
      </div>

      {/* Image - Right */}
      <div className="relative w-1/2 h-auto">
        <img src={bgImage} alt="Watch Video" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default WatchVideo;

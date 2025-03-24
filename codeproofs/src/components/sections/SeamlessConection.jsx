import React from "react";
import { motion } from "framer-motion";
import {
  FaSlack,
  FaDropbox,
  FaSketch,
  FaHubspot,
  FaMailchimp,
  FaWaze,
  FaSyncAlt,
  FaBlackTie,
} from "react-icons/fa";

const SeamlessConnection = () => {
  // Define icon sets for outer and inner semicircles
  const outerIcons = [
    { icon: <FaSlack size={20} />, color: "#4A154B" },
    { icon: <FaDropbox size={20} />, color: "#0061FF" },
    { icon: <FaSketch size={20} />, color: "#FDB300" },
    { icon: <FaHubspot size={20} />, color: "#FF7A59" },
    { icon: <FaMailchimp size={20} />, color: "#FFD700" },
    { icon: <FaWaze size={20} />, color: "#000000" },
    { icon: <FaSyncAlt size={20} />, color: "#1A1A1A" },
    { icon: <FaBlackTie size={20} />, color: "#4A154B" },
  ];
  
  const innerIcons = [
    { icon: <FaSlack size={16} />, color: "#4A154B" },
    { icon: <FaDropbox size={16} />, color: "#0061FF" },
    { icon: <FaSketch size={16} />, color: "#FDB300" },
    { icon: <FaHubspot size={16} />, color: "#FF7A59" },
    { icon: <FaMailchimp size={16} />, color: "#FFD700" },
    { icon: <FaWaze size={16} />, color: "#000000" },
  ];

  return (
    <section className="bg-black text-white py-24 flex flex-col items-center relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-green-400 text-lg flex justify-center items-center gap-2"
        >
          <span className="text-green-400">⚙️</span> Integrations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mt-6"
        >
          Seamless connections
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 mt-4 text-xl"
        >
          Integrate effortlessly with your<br />favorite tools and platforms.
        </motion.p>
      </div>

      {/* Semicircle Container */}
      <div className="relative w-full max-w-2xl h-64 mt-8">
        {/* This div clips the bottom half of the circles */}
        <div className="absolute w-full h-64 overflow-hidden">
          {/* Outer Semicircle */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {outerIcons.map((item, index) => {
              // Calculate positions around the top semicircle only (0 to π radians)
              const angle = (index / outerIcons.length) * Math.PI;
              const radius = 220;
              const x = radius * Math.cos(angle) + radius;
              const y = radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={`outer-${index}`}
                  className="absolute flex items-center justify-center rounded-full shadow-lg"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: "44px",
                    height: "44px",
                    backgroundColor: item.color,
                    color: "#fff"
                  }}
                >
                  {item.icon}
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Inner Semicircle */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {innerIcons.map((item, index) => {
              // Calculate positions around the top semicircle only (0 to π radians)
              const angle = (index / innerIcons.length) * Math.PI;
              const radius = 140;
              const x = radius * Math.cos(angle) + radius;
              const y = radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={`inner-${index}`}
                  className="absolute flex items-center justify-center rounded-full shadow-lg"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: "36px",
                    height: "36px",
                    backgroundColor: item.color,
                    color: "#fff"
                  }}
                >
                  {item.icon}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Green glow effect in background */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-green-500 rounded-full opacity-20 filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default SeamlessConnection;
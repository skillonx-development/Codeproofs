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

      <div className="relative w-full max-w-2xl h-64 mt-8">
        <div className="absolute w-full h-64 overflow-hidden">
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {outerIcons.map((item, index) => (
              <div
                key={`outer-${index}`}
                className="absolute flex items-center justify-center rounded-full shadow-lg"
                style={{
                  transform: `rotate(${(index / outerIcons.length) * 360}deg) translateX(220px) rotate(-${(index / outerIcons.length) * 360}deg)`,
                  width: "44px",
                  height: "44px",
                  backgroundColor: item.color,
                  color: "#fff",
                }}
              >
                {item.icon}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            {innerIcons.map((item, index) => (
              <div
                key={`inner-${index}`}
                className="absolute flex items-center justify-center rounded-full shadow-lg"
                style={{
                  transform: `rotate(${(index / innerIcons.length) * 360}deg) translateX(140px) rotate(-${(index / innerIcons.length) * 360}deg)`,
                  width: "36px",
                  height: "36px",
                  backgroundColor: item.color,
                  color: "#fff",
                }}
              >
                {item.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessConnection;

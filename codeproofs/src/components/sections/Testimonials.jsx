import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Sophia Martínez", text: "Vertex is a lifesaver. Stunning designs, super user-friendly. Our site has never looked better than now.", img: "https://i.pravatar.cc/60?img=10" },
  { name: "Emily Johnson", text: "Loving Vertex for our site! Easy to use, and our page looks amazing.", img: "https://i.pravatar.cc/60?img=20" },
  { name: "Isabella Smith", text: "Never thought I’d say this as a non-techie, but thanks to Vertex, launching my app’s page was a breeze and actually fun!", img: "https://i.pravatar.cc/60?img=30" },
  { name: "James Wilson", text: "Vertex changed how we present data online. Intuitive, flexible, and looks great. Big win for our team!", img: "https://i.pravatar.cc/60?img=40" },
  { name: "Noah Thompson", text: "Designing with Vertex = a dream. Quick, creative, no coding needed. My clients are thrilled with our new site.", img: "https://i.pravatar.cc/60?img=50" },
  { name: "Trevor Noah", text: "Redesigning our website with Vertex has been a game-changer! The transformation is unbelievable.", img: "https://i.pravatar.cc/60?img=60" },
  { name: "Matt Hayes", text: "Vertex streamlined our entire website redesign. The process was incredibly efficient.", img: "https://i.pravatar.cc/60?img=70" },
  { name: "Tiana Roses", text: "Just launched our startup’s landing page using Vertex. The process was easy and quick.", img: "https://i.pravatar.cc/60?img=80" },
];

const Testimonials = () => {
  return (
    <section className="bg-background text-text py-24 px-6 md:px-12 font-satoshi overflow-hidden">
      <div className="text-center mb-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-accent text-lg">
          🟢 Testimonials
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
          "Codeproofs: Where Innovation <br /> Meets Trust."
        </motion.h2>
      </div>

      {/* Scrolling Testimonials Container */}
      <div className="relative w-full h-[500px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Scrolls Up */}
        <motion.div
          className="flex flex-col"
          animate={{ y: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`left-${index}`}
              className="bg-cardBg p-6 rounded-lg shadow-lg border border-cardBorder min-h-[140px] mb-4 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-300">{testimonial.text}</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Scrolls Down */}
        <motion.div
          className="flex flex-col"
          animate={{ y: ["-100%", "0%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`right-${index}`}
              className="bg-cardBg p-6 rounded-lg shadow-lg border border-cardBorder min-h-[140px] mb-4 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-300">{testimonial.text}</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

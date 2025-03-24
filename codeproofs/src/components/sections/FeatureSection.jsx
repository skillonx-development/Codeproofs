import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaEye, FaRobot, FaShieldAlt, FaMobileAlt, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaCogs />,
    title: "Enterprise Software",
    description: "Custom enterprise solutions designed to streamline",
  },
  {
    icon: <FaEye />,
    title: "CRM & ERP Systems",
    description: "Comprehensive customer relationship and enterprise solutions",
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered",
    description: "Intelligent applications leveraging machine learning",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity Solutions",
    description: "Navigate complex data with user-friendly dashboards",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS & Android",
  },
  {
    icon: <FaHandshake />,
    title: "Engage & Connect",
    description: "Bringing a human touch to every data interaction",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="bg-background text-text py-24 px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center mb-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-xl">🔺</span>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-bold"
        >
          Complete suite of features
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="bg-[#0D0D0D] border border-[#1A1A1A] p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-accent"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#1A1A1A] text-accent text-2xl mb-4"
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-xl font-semibold">{feature.title}</h3>

            <p className="text-secondary mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;

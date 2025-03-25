
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

import React from 'react'; 
import { motion } from 'framer-motion'; 
import { Code, Monitor } from 'lucide-react'; 
import heroImage from '../../assets/images/hero.png';  

const HeroSection = () => {   
  return (     
    <div className="relative min-h-screen bg-black flex flex-col">       
      {/* Top Content Section */}       
      <div className="container mx-auto px-6 flex-grow flex items-center relative z-10 grid md:grid-cols-2 gap-12">         
        {/* Text Content */}         
        <motion.div            
          initial={{ opacity: 0, x: -50 }}           
          animate={{ opacity: 1, x: 0 }}           
          transition={{ duration: 0.8 }}           
          className="text-white space-y-6"         
        >           
          <h1 className="text-5xl font-bold leading-tight">             
            Transforming Ideas into              
            <span className="text-blue-400 block">Digital Excellence</span>           
          </h1>           
          <p className="text-xl text-gray-300">             
            At Codepark, we specialize in producing cutting-edge software development and cybersecurity solutions that transform your digital vision.           
          </p>           
          <div className="flex space-x-4">             
            <motion.button               
              whileHover={{ scale: 1.05 }}               
              whileTap={{ scale: 0.95 }}               
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"             
            >               
              Get Started             
            </motion.button>             
            <motion.button               
              whileHover={{ scale: 1.05 }}               
              whileTap={{ scale: 0.95 }}               
              className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"             
            >               
              Learn More             
            </motion.button>           
          </div>         
        </motion.div>          
        
        {/* Visual Content */}         
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 shadow-2xl">
            <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden border-2 border-blue-600/30 flex items-center justify-center text-white">
              <p className="text-xl text-center opacity-70">Innovative Solutions Visualized</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Mountain Landscape Image */}       
      <motion.div          
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 1 }}         
        className="w-full h-[50vh] relative"       
      >         
        <img            
          src={heroImage}            
          alt="Mountain Landscape"            
          className="absolute inset-0 w-full h-full object-cover"         
        />         
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>       
      </motion.div>
      
      {/* Floating Icons */}       
      <motion.div          
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 1, delay: 0.5 }}         
        className="absolute top-12 right-12 flex space-x-4"       
      >         
        <motion.div            
          animate={{              
            y: [0, -10, 0],             
            rotate: [0, 5, -5, 0]           
          }}           
          transition={{              
            duration: 2,              
            repeat: Infinity,             
            repeatType: "loop"           
          }}         
        >           
          <Code className="text-blue-400 opacity-50" size={48} />         
        </motion.div>         
        <motion.div           
          animate={{              
            y: [0, 10, 0],             
            rotate: [-5, 5, 0]           
          }}           
          transition={{              
            duration: 2,              
            repeat: Infinity,             
            repeatType: "loop"           
          }}         
        >           
          <Monitor className="text-blue-400 opacity-50" size={48} />         
        </motion.div>       
      </motion.div>     
    </div>   
  ); 
};  


export default Hero;

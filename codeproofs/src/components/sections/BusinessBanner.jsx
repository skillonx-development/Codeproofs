import React from 'react';

const BusinessBanner = () => {
  return (
    <div className="relative bg-black overflow-hidden rounded-xl p-6">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-900 to-orange-900 opacity-50 blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Track leads, automate tasks, and grow your business with ease</h1>
        <p className="text-lg text-gray-200 mb-6">
          Streamline your workflow and boost productivity. Effortlessly track leads, 
          automate repetitive tasks, and focus on growing your business
        </p>
        <button className="bg-white text-teal-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Know more
        </button>
      </div>
    </div>
  );
};

export default BusinessBanner;
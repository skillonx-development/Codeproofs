import React from 'react';

const BusinessBanner = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="relative z-10 text-white text-center p-8">
          <h2 className="text-3xl font-bold mb-4">
            Track leads, automate tasks, and grow your business with ease
          </h2>
          <p className="text-sm text-white/80 mb-6">
            Streamline your workflow and boost productivity. Effortlessly track leads, 
            automate repetitive tasks, and focus on growing your business
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
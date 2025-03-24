import React from 'react';

const CodeproofsBanner = () => {
  return (
    <div className="relative bg-accent min-h-[500px] flex flex-col justify-between p-8 font-satoshi">
      <div className="text-sm text-black opacity-80 max-w-xl">
        Leading software development and cybersecurity company in India & Malaysia 
        delivering innovative solutions for businesses worldwide.
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
        <div className="text-black font-bold text-[15rem] leading-none group cursor-pointer">
          <span className="block transition-all duration-500 ease-in-out 
            hover:bg-gradient-to-r hover:from-black hover:to-primary 
            hover:bg-clip-text hover:text-transparent">
            Codeproofs
          </span>
        </div>
        <div className="text-accent font-bold text-[15rem] leading-none absolute top-0 left-0 opacity-40 pl-8">
          Codeproofs
        </div>
      </div>
    </div>
  );
};

export default CodeproofsBanner;
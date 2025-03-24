import React from "react";
import Navbar from "../components/Navbar"; 
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhatWeDo from "../components/sections/WhatWeDo";
import OurImpact from "../components/sections/OurImpact";
import WatchVideo from "../components/sections/WatchVideo";
import JoinCommunity from "../components/sections/JoinCommunity";
import FeatureSection from "../components/sections/FeatureSection";
import SeamlessConnection from "../components/sections/SeamlessConection";
import Testimonials from "../components/sections/Testimonials";
import BusinessBanner from "../components/sections/BusinessBanner";
import CodeproofsBanner from "../components/sections/CodeproofBanner";

function Landing() {
  return (
    <div className="bg-background text-text font-satoshi">
      {/* Navbar */}
      <Navbar />

      {/* Add margin below Navbar */}
      <div className="mt-16">
        <Hero />
      </div>

      {/* Sections */}
      <About />

      {/* Sticky Sections Wrapper */}
      <div className="relative h-[300vh]">
        {/* What We Do */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <WhatWeDo />
        </section>

        {/* Our Impact */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <OurImpact />
        </section>

        {/* Watch Video */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <WatchVideo />
        </section>
      </div>

      {/* Ensure Full Page Scroll Background Stays Black */}
      <JoinCommunity />
      <FeatureSection />
      <SeamlessConnection />
      <Testimonials />
      <BusinessBanner />
      <CodeproofsBanner />
    </div>
  );
}

export default Landing;

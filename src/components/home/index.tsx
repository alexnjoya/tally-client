import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Security from './Security';
import CTA from './CTA';
import Footer from './Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container that moves together */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Fixed navbar container */}
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50">
          <Header />
        </div>
        
        {/* Content sections */}
        <Hero />
        <div className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
          <Features />
          <Security />
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
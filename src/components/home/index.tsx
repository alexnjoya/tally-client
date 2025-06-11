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
      <Header />
      <Hero />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <Features />
      <Security />
      <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
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
      <Features />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
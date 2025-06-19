import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Security from './Security';
import CTA from './CTA';
import Footer from './Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky navbar at the top */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <Header />
      </header>
      {/* Main content container */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <Hero />
        <Features />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Vote, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-900 rounded-xl flex items-center justify-center">
              <Vote className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                Tally
              </h1>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              <button className="block w-full text-gray-600 hover:text-gray-900 py-2 transition-colors font-medium text-left">
                Sign In
              </button>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
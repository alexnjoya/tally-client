import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Vote, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

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
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-100"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Vote className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg sm:rounded-xl"></div>
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Tally
              </h1>
              <p className="hidden sm:block text-xs text-gray-500 -mt-0.5">
                Secure Voting
              </p>
            </div>
          </motion.div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/Login">
            <motion.button 
              className="text-gray-600 hover:text-blue-600 px-3 lg:px-4 py-2 transition-all duration-200 font-medium text-sm lg:text-base rounded-lg hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            </Link>
            <Link to="/Register">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-100 hover:shadow-blue-200 text-sm lg:text-base"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="bg-white/95 backdrop-blur-sm border-t border-gray-100"
            initial={{ y: -20 }}
            animate={{ y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <motion.button 
                className="block w-full text-gray-600 hover:text-blue-600 py-2.5 sm:py-3 transition-colors font-medium text-left text-sm sm:text-base rounded-lg hover:bg-blue-50 px-3"
                whileHover={{ x: 4 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </motion.button>
              <motion.button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-100 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </motion.button>
              
              {/* Mobile Menu Footer */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100 mt-4">
                <p className="text-xs text-gray-500 text-center">
                  Secure • Transparent • Trustworthy
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
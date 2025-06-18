import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Eye, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable vote recording with cryptographic verification ensures tamper-proof elections"
    },
    {
      icon: CheckCircle,
      title: "Smart Verification",
      description: "Automated eligibility checks and real-time validation for seamless voting experience"
    },
    {
      icon: Eye,
      title: "Transparent Tracking",
      description: "Public blockchain explorer allows real-time monitoring of election progress"
    },
    {
      icon: Users,
      title: "Intuitive Design",
      description: "User-friendly interface designed for both voters and election administrators"
    }
  ];
  
  return (
    <section id="features" className="py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Import Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');`}
      </style>
      
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Enhanced accent element */}
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for the
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Democracy Era
            </span>
          </h2>
          
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Combining cutting-edge blockchain technology with intuitive design to revolutionize how institutions conduct elections.
          </p>
        </motion.div>
        
        {/* Improved grid layout for better mobile responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Enhanced icon container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
              </div>
              
              {/* Enhanced title */}
              <h3 
                className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 text-center leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              
              {/* Enhanced description */}
              <p 
                className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced call-to-action */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 text-sm sm:text-base md:text-lg transform hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Learn More About Our Features</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
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
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32 relative">
      {/* Import Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');`}
      </style>
      
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Small accent element - Responsive */}
          <div className="w-10 sm:w-12 h-1 bg-indigo-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for the
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Digital Democracy Era
            </span>
          </h2>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Combining cutting-edge blockchain technology with intuitive design to revolutionize how institutions conduct elections.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:shadow-md group-hover:shadow-indigo-200 transition-all">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-gray-600 text-center leading-relaxed text-sm sm:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Simple call-to-action - Responsive */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 text-sm sm:text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Learn More About Our Features</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
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
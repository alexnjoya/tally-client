import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Shield, Eye, KeyRound, Database } from "lucide-react";

const Security = () => {
  return (
    <section id="security" className="py-6  sm:py-12 md:py-16 lg:py-20 xl:py-32 relative overflow-hidden">
      {/* Import Google Fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      </style>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zM50 50h1v1h-1z' fill='%23000' fill-opacity='0.5'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Abstract Security Shapes - Extremely Subtle */}
        <div className="absolute top-5 sm:top-10 md:top-20 left-0 right-0 opacity-[0.02]">
          <svg width="100%" height="200" className="sm:h-300 md:h-400" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M600 100L1000 300V500L600 300L200 500V300L600 100Z" stroke="#6366F1" strokeWidth="2" fill="none"/>
            <circle cx="600" cy="300" r="80" stroke="#6366F1" strokeWidth="2" fill="none"/>
            <path d="M540 300H660M600 240V360" stroke="#6366F1" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Section Marker */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="h-[1px] w-6 sm:w-8 md:w-10 bg-indigo-600"></div>
              <div 
                className="text-xs sm:text-sm font-medium text-indigo-600 uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Security Framework
              </div>
            </div>
            
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text text-transparent">
                Uncompromising
              </span> Security
            </h2>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every vote is cryptographically secured and recorded on an immutable blockchain, 
              ensuring complete transparency and tamper-proof results.
            </p>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {[
                {
                  icon: KeyRound,
                  text: "End-to-end encryption for all transactions",
                  color: "indigo"
                },
                {
                  icon: Database,
                  text: "Multi-signature validation protocols",
                  color: "blue"
                },
                {
                  icon: Eye,
                  text: "Real-time blockchain verification",
                  color: "violet"
                },
                {
                  icon: Shield,
                  text: "Immutable audit trails",
                  color: "indigo"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 md:space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-${item.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span 
                      className="text-gray-800 font-medium text-xs sm:text-sm md:text-base leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div
              className="mt-6 sm:mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button 
                className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow text-xs sm:text-sm md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Learn About Our Security
                <svg className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual Column */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main Security Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-6 md:p-8 shadow-lg relative overflow-hidden border border-gray-200 w-full">
              {/* Abstract Security Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="100" stroke="#6366F1" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="150" stroke="#6366F1" strokeWidth="0.5"/>
                  <circle cx="200" cy="200" r="50" stroke="#6366F1" strokeWidth="1.5"/>
                  <path d="M200 100V300M100 200H300" stroke="#6366F1" strokeWidth="0.5"/>
                  <path d="M129.3 129.3L270.7 270.7M270.7 129.3L129.3 270.7" stroke="#6366F1" strokeWidth="0.5"/>
                </svg>
              </div>
              
              <div className="relative">
                {/* Card Header */}
                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 shadow-lg">
                      <Lock className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-indigo-600/10 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] blur-md -z-10"></div>
                  </div>
                  
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Blockchain Protected
                  </h3>
                  
                  <p 
                    className="text-gray-600 mt-2 max-w-xs mx-auto text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Advanced cryptographic protection and consensus mechanisms
                  </p>
                </div>
                
                {/* Security Metrics */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {[
                    { 
                      label: "Encryption Level", 
                      value: "256-bit AES",
                      icon: KeyRound,
                      color: "indigo"
                    },
                    { 
                      label: "Consensus Protocol", 
                      value: "Proof of Authority",
                      icon: CheckCircle,
                      color: "blue" 
                    },
                    { 
                      label: "Network Security", 
                      value: "99.99% Uptime",
                      icon: Shield,
                      color: "violet"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-4 md:p-5 shadow-sm hover:shadow transition-shadow border border-gray-100 w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                          <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-${item.color}-600`} />
                          </div>
                          <span 
                            className="text-gray-600 text-xs sm:text-sm md:text-base break-words whitespace-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span 
                          className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base ml-2 flex-shrink-0 break-words whitespace-normal"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Security Certificate */}
                <motion.div
                  className="mt-4 sm:mt-6 md:mt-8 bg-indigo-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-indigo-100 flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F46E5" strokeWidth="1.5"/>
                        <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div 
                        className="text-xs sm:text-sm font-medium text-indigo-900 truncate"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        ISO 27001 Certified
                      </div>
                      <div 
                        className="text-xs text-indigo-700 truncate"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Enterprise-grade security standards
                      </div>
                    </div>
                  </div>
                  <button 
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-medium whitespace-nowrap ml-2 flex-shrink-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Verify
                  </button>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements - Responsive */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-6 md:-right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-indigo-50 rounded-full"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-8 md:-left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-indigo-50 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
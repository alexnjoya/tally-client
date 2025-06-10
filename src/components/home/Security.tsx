import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Shield, Eye, KeyRound, Database } from "lucide-react";

const Security = () => {
  return (
    <section id="security" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Import Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
      
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
        <div className="absolute top-20 left-0 right-0 opacity-[0.02]">
          <svg width="100%" height="600" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M600 100L1000 300V500L600 300L200 500V300L600 100Z" stroke="#6366F1" strokeWidth="2" fill="none"/>
            <circle cx="600" cy="300" r="80" stroke="#6366F1" strokeWidth="2" fill="none"/>
            <path d="M540 300H660M600 240V360" stroke="#6366F1" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Marker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-10 bg-indigo-600"></div>
              <div 
                className="text-sm font-medium text-indigo-600 uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Security Framework
              </div>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text text-transparent">
                Uncompromising
              </span> Security
            </h2>
            
            <p 
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every vote is cryptographically secured and recorded on an immutable blockchain, 
              ensuring complete transparency and tamper-proof results.
            </p>
            
            <div className="space-y-5">
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
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                  </div>
                  <div>
                    <span 
                      className="text-gray-800 font-medium"
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
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Learn About Our Security
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main Security Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg relative overflow-hidden border border-gray-200">
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
                <div className="text-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Lock className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-indigo-600/10 rounded-[32px] blur-md -z-10"></div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Blockchain Protected
                  </h3>
                  
                  <p 
                    className="text-gray-600 mt-2 max-w-sm mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Advanced cryptographic protection and consensus mechanisms
                  </p>
                </div>
                
                {/* Security Metrics */}
                <div className="space-y-4">
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
                      className="bg-white rounded-xl p-5 shadow-sm hover:shadow transition-shadow border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`flex-shrink-0 w-8 h-8 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`h-4 w-4 text-${item.color}-600`} />
                          </div>
                          <span 
                            className="text-gray-600"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span 
                          className="text-gray-900 font-semibold"
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
                  className="mt-8 bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F46E5" strokeWidth="1.5"/>
                        <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div 
                        className="text-sm font-medium text-indigo-900"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        ISO 27001 Certified
                      </div>
                      <div 
                        className="text-xs text-indigo-700"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Enterprise-grade security standards
                      </div>
                    </div>
                  </div>
                  <button 
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Verify
                  </button>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-50 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-50 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
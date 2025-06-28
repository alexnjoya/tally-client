import React from 'react';
import { ArrowRight, Blocks, Vote, Shield, Eye, Lock, CheckCircle, Users, BarChart3, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-24 bg-white overflow-hidden font-sans">
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        /* Custom Animation Keyframes */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(40px, -60px) rotate(2deg); }
          50% { transform: translate(-20px, -40px) rotate(-2deg); }
          75% { transform: translate(-60px, 20px) rotate(1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-40px, 60px) rotate(-2deg); }
          50% { transform: translate(20px, 40px) rotate(2deg); }
          75% { transform: translate(60px, -20px) rotate(-1deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dasharray: 1000 0; opacity: 0; }
        }
        
        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-150px) translateX(80px); opacity: 1; }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-120px) translateX(-60px); opacity: 0.9; }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-180px) translateX(40px); opacity: 1; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 6s ease-in-out infinite;
        }
        
        .animate-draw-line-delay {
          animation: draw-line 8s ease-in-out infinite 2s;
        }
        
        .animate-draw-line-delay-2 {
          animation: draw-line 10s ease-in-out infinite 4s;
        }
        
        .animate-float-particle-0 {
          animation: float-particle-0 6s ease-in-out infinite;
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 8s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 10s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .animate-float-slow,
          .animate-float-reverse,
          .animate-bounce-slow {
            animation-duration: 25s;
          }
          
          .animate-pulse-slow {
            animation-duration: 4s;
          }
        }
      `}</style>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Modern Gradient Base with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 via-white to-indigo-100/80 animate-gradient-shift"></div>
        
        {/* Enhanced Floating Geometric Shapes - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles - Reduced on mobile */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-gradient-to-br from-blue-300/60 to-indigo-300/45 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-gradient-to-br from-indigo-300/50 to-cyan-300/40 rounded-full blur-2xl animate-float-reverse"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-36 sm:w-56 lg:w-80 h-36 sm:h-56 lg:h-80 bg-gradient-to-br from-violet-300/55 to-blue-300/45 rounded-full blur-2xl animate-float-slow"></div>
          
          {/* Medium accent shapes - Reduced on mobile */}
          <div className="absolute top-1/4 right-1/4 w-20 sm:w-32 lg:w-48 h-20 sm:h-32 lg:h-48 bg-gradient-to-br from-blue-400/40 to-indigo-400/30 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-5 sm:right-10 w-24 sm:w-40 lg:w-56 h-24 sm:h-40 lg:h-56 bg-gradient-to-br from-indigo-400/45 to-blue-400/35 rounded-full blur-xl animate-float-reverse"></div>
          
          {/* Additional dynamic shapes - Reduced on mobile */}
          <div className="absolute top-1/2 left-10 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-cyan-300/50 to-blue-300/40 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute top-3/4 right-1/3 w-18 sm:w-28 lg:w-40 h-18 sm:h-28 lg:h-40 bg-gradient-to-br from-indigo-300/40 to-purple-300/30 rounded-full blur-lg animate-float-reverse"></div>
          
          {/* Mobile-specific smaller shapes */}
          <div className="block sm:hidden absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-300/45 to-indigo-300/35 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="block sm:hidden absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-violet-300/40 to-blue-300/30 rounded-full blur-md animate-bounce-slow"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M0 0h1v1H0zM30 30h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Enhanced Animated Lines - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d="M0,200 Q300,150 600,200 T1200,180"
              stroke="url(#line1)"
              strokeWidth="3"
              fill="none"
              className="animate-draw-line"
            />
            <path
              d="M0,400 Q400,350 800,400 T1200,380"
              stroke="url(#line2)"
              strokeWidth="2.5"
              fill="none"
              className="animate-draw-line-delay"
            />
            <path
              d="M0,600 Q500,550 1000,600 T1200,580"
              stroke="url(#line3)"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line-delay-2"
            />
          </svg>
        </div>

        {/* Enhanced Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float-particle-${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.5)' : 
                                i % 3 === 1 ? 'rgba(99, 102, 241, 0.5)' : 'rgba(16, 185, 129, 0.5)',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Animated Geometric Patterns - Reduced on mobile */}
        <div className="absolute inset-0">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border-2 border-blue-400/30 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-2 border-indigo-400/35 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-10 sm:w-14 lg:w-20 h-10 sm:h-14 lg:h-20 border-2 border-indigo-400/25 transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-float-slow"></div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Badge - Mobile Optimized */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200/80 text-gray-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <Blocks className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Enterprise-Grade Blockchain Security</span>
          </div>

          {/* Main Headlines - Mobile Optimized */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-[1.1] sm:leading-[0.9] tracking-tight px-2 sm:px-0"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-gray-900">Secure Digital</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
                Democracy
              </span>
            </h1>
            <div className="w-12 sm:w-16 lg:w-24 h-0.5 sm:h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Value Proposition - Mobile Optimized */}
          <p 
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4 lg:px-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Transform your organization's elections with our blockchain-powered platform. 
            <span className="font-medium text-gray-900"> Transparent, secure, and tamper-proof</span> voting 
            trusted by leading institutions worldwide.
          </p>

          {/* Social Proof - Mobile Optimized */}
          <div className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-0 lg:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4 lg:px-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600 flex-shrink-0" />
              <span>Trusted by 500+ institutions</span>
            </div>
            <div className="hidden lg:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600 flex-shrink-0" />
              <span>99.99% uptime guarantee</span>
            </div>
            <div className="hidden lg:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <Lock className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600 flex-shrink-0" />
              <span>SOC 2 Type II certified</span>
            </div>
          </div>

            {/* CTA Section - Mobile Optimized */}
            <div
              className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-12 lg:mb-20 px-1 sm:px-4 lg:px-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-base lg:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl min-h-[36px] sm:min-h-[48px] max-w-xs w-full mx-auto sm:max-w-none sm:w-auto">
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="h-2 sm:w-2 lg:w-1" />
            <button className="border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-3 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-base lg:text-lg bg-white/90 backdrop-blur-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md min-h-[36px] sm:min-h-[48px] max-w-xs w-full mx-auto sm:max-w-none sm:w-auto">
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Watch Demo</span>
            </button>
            </div>

          {/* Modern Dashboard Preview - Mobile Optimized */}
          <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
            {/* Dashboard Container */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/80 overflow-hidden shadow-lg sm:block hidden">
              {/* Modern Browser Header - Mobile Optimized */}
              <div className="bg-gray-50/90 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 lg:py-4 border-b border-gray-200/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1 sm:space-x-1.5 lg:space-x-2">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 bg-white/90 border border-gray-200 px-2 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg font-mono">
                      <span className="hidden sm:inline">https://app.securechain-vote.io</span>
                      <span className="sm:hidden">app.securechain-vote.io</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400">
                    <Lock className="h-3 w-3" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>Secured</span>
                  </div>
                </div>
              </div>
              {/* Dashboard Header - Mobile Optimized */}
              <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6 border-b border-gray-100/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-3 lg:space-y-0">
                  <div>
                    <h3 
                      className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Election Dashboard
                    </h3>
                    <p 
                      className="text-gray-600 mt-1 text-xs sm:text-sm lg:text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Real-time blockchain monitoring
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50/90 backdrop-blur-sm text-blue-700 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border border-blue-200/60 self-start sm:self-auto">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Live</span>
                  </div>
                </div>
              </div>
              {/* Dashboard Content - Mobile Optimized */}
              <div className="p-3 sm:p-4 lg:p-8 bg-white/60 backdrop-blur-sm">
                {/* Key Metrics - Mobile Optimized Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 mb-4 sm:mb-6 lg:mb-10">
                  {[
                    { number: "2,847", label: "Total Votes", icon: Vote, trend: "+12%" },
                    { number: "99.9%", label: "Security Score", icon: Shield, trend: "Stable" },
                    { number: "24/7", label: "Active Monitoring", icon: Eye, trend: "Online" },
                    { number: "100%", label: "Transparency", icon: Lock, trend: "Verified" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-6 text-center group hover:bg-white/90 transition-all border border-gray-100/60 shadow-sm hover:shadow-md"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2 lg:mb-4 bg-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div 
                        className="text-sm sm:text-lg lg:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1 lg:mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {stat.label}
                      </div>
                      <div 
                        className="text-xs text-blue-600 font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Live Activity Feed - Mobile Optimized */}
                <div className="bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 border border-gray-100/60">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 lg:mb-6 space-y-2 sm:space-y-3 lg:space-y-0">
                    <h4 
                      className="text-sm sm:text-base lg:text-xl font-semibold text-gray-900 flex items-center"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      Live Blockchain Activity
                    </h4>
                    <span 
                      className="text-xs sm:text-sm text-gray-500 bg-white/90 px-2 sm:px-3 py-1 rounded-full border border-gray-200/60"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Block Height: #892,347
                    </span>
                  </div>
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {[
                      { 
                        action: "Vote verified and recorded", 
                        time: "3 seconds ago", 
                        hash: "0x7f9a...3e2b",
                        status: "confirmed"
                      },
                      { 
                        action: "New ballot contract deployed", 
                        time: "1 minute ago", 
                        hash: "0x9c1f...8a4d",
                        status: "pending"
                      },
                      { 
                        action: "Candidate eligibility verified", 
                        time: "3 minutes ago", 
                        hash: "0x2b8e...7f5c",
                        status: "confirmed"
                      }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-100/70 hover:border-gray-200/80 transition-all space-y-1 sm:space-y-2 lg:space-y-0"
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${
                            item.status === 'confirmed' ? 'bg-blue-500' : 'bg-yellow-500'
                          } ${item.status === 'confirmed' ? '' : 'animate-pulse'}`}></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900">{item.action}</div>
                            <div className="text-xs text-gray-500 font-mono mt-0.5 sm:mt-1">{item.hash}</div>
                          </div>
                        </div>
                        <div className="text-right ml-4 sm:ml-6 lg:ml-0">
                          <div className="text-xs text-gray-500">{item.time}</div>
                          <div className={`text-xs font-medium mt-0.5 sm:mt-1 ${
                            item.status === 'confirmed' ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Quick Actions - Mobile Optimized */}
                <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {[
                    { icon: Users, label: "Manage Voters", count: "1,247 active" },
                    { icon: BarChart3, label: "View Analytics", count: "Real-time data" },
                    { icon: Zap, label: "Quick Deploy", count: "New ballot" }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 lg:p-4 bg-white/80 backdrop-blur-sm border border-gray-200/70 rounded-lg sm:rounded-xl hover:border-indigo-200/80 hover:bg-white/90 transition-all text-left group min-h-[44px] sm:min-h-[48px]"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-indigo-50/90 rounded-lg flex items-center justify-center group-hover:bg-indigo-100/90 transition-colors flex-shrink-0">
                        <action.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base">{action.label}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{action.count}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile Dashboard Content (no background) */}
            <div className="block sm:hidden w-full">
              {/* Key Metrics - Mobile Optimized Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { number: "2,847", label: "Total Votes", icon: Vote, trend: "+12%" },
                  { number: "99.9%", label: "Security Score", icon: Shield, trend: "Stable" },
                  { number: "24/7", label: "Active Monitoring", icon: Eye, trend: "Online" },
                  { number: "100%", label: "Transparency", icon: Lock, trend: "Verified" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm"
                  >
                    <div className="w-6 h-6 mx-auto mb-1 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-3 w-3 text-white" />
                    </div>
                    <div className="text-xs font-bold text-gray-900 mb-0.5">
                      {stat.number}
                    </div>
                    <div className="text-[10px] text-gray-600 mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-blue-600 font-medium">
                      {stat.trend}
                    </div>
                  </div>
                ))}
              </div>
              {/* Live Activity Feed - Mobile Optimized */}
              <div className="bg-white rounded-lg p-2 border border-gray-100 mb-2">
                <div className="flex flex-col mb-2">
                  <h4 className="text-xs font-semibold text-gray-900 flex items-center mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    Live Blockchain Activity
                  </h4>
                  <span className="text-[10px] text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200 w-fit">
                    Block Height: #892,347
                  </span>
                </div>
                <div className="space-y-1">
                  {/* ...activity feed items... */}
                </div>
              </div>
              {/* Quick Actions - Mobile Optimized */}
              <div className="mt-2 grid grid-cols-1 gap-2">
                {/* ...quick action buttons... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight, Blocks, Vote, Shield, Eye, Lock, CheckCircle, Users, BarChart3, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden font-sans">
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
      `}</style>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Modern Gradient Base with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 via-white to-indigo-100/80 animate-gradient-shift"></div>
        
        {/* Enhanced Floating Geometric Shapes - More Visible */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles - Enhanced visibility */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-300/60 to-indigo-300/45 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-indigo-300/50 to-cyan-300/40 rounded-full blur-2xl animate-float-reverse"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-violet-300/55 to-blue-300/45 rounded-full blur-2xl animate-float-slow"></div>
          
          {/* Medium accent shapes - Enhanced */}
          <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-blue-400/40 to-indigo-400/30 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-5 sm:right-10 w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-br from-indigo-400/45 to-blue-400/35 rounded-full blur-xl animate-float-reverse"></div>
          
          {/* Additional dynamic shapes - Enhanced */}
          <div className="absolute top-1/2 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-cyan-300/50 to-blue-300/40 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute top-3/4 right-1/3 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-br from-indigo-300/40 to-purple-300/30 rounded-full blur-lg animate-float-reverse"></div>
          
          {/* Mobile-specific smaller shapes */}
          <div className="block sm:hidden absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-to-br from-blue-300/45 to-indigo-300/35 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="block sm:hidden absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-violet-300/40 to-blue-300/30 rounded-full blur-md animate-bounce-slow"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M0 0h1v1H0zM30 30h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Enhanced Animated Lines */}
        <div className="absolute inset-0">
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

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float-particle-${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 4}px`,
                height: `${3 + Math.random() * 4}px`,
                backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.5)' : 
                                i % 3 === 1 ? 'rgba(99, 102, 241, 0.5)' : 'rgba(16, 185, 129, 0.5)',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Animated Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 border-2 border-blue-400/30 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 border-2 border-indigo-400/35 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-14 sm:w-20 h-14 sm:h-20 border-2 border-indigo-400/25 transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-float-slow"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200/80 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <Blocks className="h-3 w-3 sm:h-4 sm:w-4" />
            <span style={{ fontFamily: "'Inter', sans-serif" }}>Enterprise-Grade Blockchain Security</span>
          </div>

          {/* Main Headlines - Responsive */}
          <div className="mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-[0.9] tracking-tight px-2 sm:px-0"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-gray-900">Secure Digital</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
                Democracy
              </span>
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Value Proposition - Responsive */}
          <p 
            className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Transform your organization's elections with our blockchain-powered platform. 
            <span className="font-medium text-gray-900"> Transparent, secure, and tamper-proof</span> voting 
            trusted by leading institutions worldwide.
          </p>

          {/* Social Proof - Responsive */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Trusted by 500+ institutions</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>99.99% uptime guarantee</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
              <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>SOC 2 Type II certified</span>
            </div>
          </div>

          {/* CTA Section - Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20 px-4 sm:px-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg bg-white/90 backdrop-blur-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md">
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Modern Dashboard Preview - Responsive */}
          <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
            {/* Dashboard Container */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/80 overflow-hidden shadow-lg">
              {/* Modern Browser Header - Responsive */}
              <div className="bg-gray-50/90 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
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
              
              {/* Dashboard Header - Responsive */}
              <div className="bg-white/90 backdrop-blur-sm px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div>
                    <h3 
                      className="text-lg sm:text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Election Dashboard
                    </h3>
                    <p 
                      className="text-gray-600 mt-1 text-sm sm:text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Real-time blockchain monitoring
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50/90 backdrop-blur-sm text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200/60 self-start sm:self-auto">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Live</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content - Responsive */}
              <div className="p-4 sm:p-8 bg-white/60 backdrop-blur-sm">
                {/* Key Metrics - Responsive Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-10">
                  {[
                    { number: "2,847", label: "Total Votes", icon: Vote, trend: "+12%" },
                    { number: "99.9%", label: "Security Score", icon: Shield, trend: "Stable" },
                    { number: "24/7", label: "Active Monitoring", icon: Eye, trend: "Online" },
                    { number: "100%", label: "Transparency", icon: Lock, trend: "Verified" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center group hover:bg-white/90 transition-all border border-gray-100/60 shadow-sm hover:shadow-md"
                    >
                      <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 bg-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div 
                        className="text-lg sm:text-3xl font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2"
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

                {/* Live Activity Feed - Responsive */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-100/60">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                    <h4 
                      className="text-base sm:text-xl font-semibold text-gray-900 flex items-center"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                      Live Blockchain Activity
                    </h4>
                    <span 
                      className="text-xs sm:text-sm text-gray-500 bg-white/90 px-2 sm:px-3 py-1 rounded-full border border-gray-200/60"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Block Height: #892,347
                    </span>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-100/70 hover:border-gray-200/80 transition-all space-y-2 sm:space-y-0"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            item.status === 'confirmed' ? 'bg-blue-500' : 'bg-yellow-500'
                          } ${item.status === 'confirmed' ? '' : 'animate-pulse'}`}></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900">{item.action}</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">{item.hash}</div>
                          </div>
                        </div>
                        <div className="text-right ml-6 sm:ml-0">
                          <div className="text-xs text-gray-500">{item.time}</div>
                          <div className={`text-xs font-medium mt-1 ${
                            item.status === 'confirmed' ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions - Responsive */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {[
                    { icon: Users, label: "Manage Voters", count: "1,247 active" },
                    { icon: BarChart3, label: "View Analytics", count: "Real-time data" },
                    { icon: Zap, label: "Quick Deploy", count: "New ballot" }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm border border-gray-200/70 rounded-lg sm:rounded-xl hover:border-indigo-200/80 hover:bg-white/90 transition-all text-left group"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50/90 rounded-lg flex items-center justify-center group-hover:bg-indigo-100/90 transition-colors flex-shrink-0">
                        <action.icon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">{action.label}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{action.count}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements - Responsive */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/50 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-indigo-400/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight, Blocks, Vote, Shield, Eye, Lock, CheckCircle, Users, BarChart3, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden font-sans">
      {/* Import Google Fonts */}
      <style jsx global>{`
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
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
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
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-150px) translateX(80px); opacity: 1; }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-120px) translateX(-60px); opacity: 0.8; }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-180px) translateX(40px); opacity: 0.9; }
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

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Modern Gradient Base with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 animate-gradient-shift"></div>
        
        {/* Floating Geometric Shapes - More Visible */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-200/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-cyan-200/25 rounded-full blur-2xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-violet-200/35 to-blue-200/30 rounded-full blur-2xl animate-float-slow"></div>
          
          {/* Medium accent shapes */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-300/25 to-indigo-300/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-gradient-to-br from-indigo-300/30 to-blue-300/25 rounded-full blur-xl animate-float-reverse"></div>
          
          {/* Additional dynamic shapes */}
          <div className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-cyan-200/35 to-blue-200/30 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-200/25 to-purple-200/20 rounded-full blur-lg animate-float-reverse"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.6'%3E%3Cpath d='M0 0h1v1H0zM30 30h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d="M0,200 Q300,150 600,200 T1200,180"
              stroke="url(#line1)"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
            />
            <path
              d="M0,400 Q400,350 800,400 T1200,380"
              stroke="url(#line2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-draw-line-delay"
            />
            <path
              d="M0,600 Q500,550 1000,600 T1200,580"
              stroke="url(#line3)"
              strokeWidth="1"
              fill="none"
              className="animate-draw-line-delay-2"
            />
          </svg>
        </div>

        {/* Subtle Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float-particle-${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' : 
                                i % 3 === 1 ? 'rgba(99, 102, 241, 0.3)' : 'rgba(16, 185, 129, 0.3)',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-24 h-24 border border-blue-300/20 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border border-indigo-300/25 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-indigo-300/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-float-slow"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <Blocks className="h-4 w-4" />
            <span style={{ fontFamily: "'Inter', sans-serif" }}>Enterprise-Grade Blockchain Security</span>
          </div>

          {/* Main Headlines */}
          <div className="mb-8">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.9] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-gray-900">Secure Digital</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
                Democracy
              </span>
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Value Proposition */}
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Transform your organization's elections with our blockchain-powered platform. 
            <span className="font-medium text-gray-900"> Transparent, secure, and tamper-proof</span> voting 
            trusted by leading institutions worldwide.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span>Trusted by 500+ institutions</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>99.99% uptime guarantee</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Lock className="h-5 w-5 text-blue-600" />
              <span>SOC 2 Type II certified</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20" style={{ fontFamily: "'Inter', sans-serif" }}>
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg bg-white/80 backdrop-blur-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md">
              <Eye className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Modern Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            {/* Dashboard Container */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/60 overflow-hidden shadow-lg">
              {/* Modern Browser Header */}
              <div className="bg-gray-50/80 backdrop-blur-sm px-6 py-4 border-b border-gray-200/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500 bg-white/80 border border-gray-200 px-4 py-1.5 rounded-lg font-mono">
                      https://app.securechain-vote.io
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400">
                    <Lock className="h-3 w-3" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>Secured</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Header */}
              <div className="bg-white/80 backdrop-blur-sm px-8 py-6 border-b border-gray-100/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Election Dashboard
                    </h3>
                    <p 
                      className="text-gray-600 mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Real-time blockchain monitoring
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full border border-blue-200/40">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Live</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 bg-white/50 backdrop-blur-sm">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    { number: "2,847", label: "Total Votes", icon: Vote, trend: "+12%" },
                    { number: "99.9%", label: "Security Score", icon: Shield, trend: "Stable" },
                    { number: "24/7", label: "Active Monitoring", icon: Eye, trend: "Online" },
                    { number: "100%", label: "Transparency", icon: Lock, trend: "Verified" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/80 transition-all border border-gray-100/40 shadow-sm hover:shadow-md"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div 
                        className="text-3xl font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="text-sm text-gray-600 mb-2"
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

                {/* Live Activity Feed */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100/40">
                  <div className="flex items-center justify-between mb-6">
                    <h4 
                      className="text-xl font-semibold text-gray-900 flex items-center"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                      Live Blockchain Activity
                    </h4>
                    <span 
                      className="text-sm text-gray-500 bg-white/80 px-3 py-1 rounded-full border border-gray-200/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Block Height: #892,347
                    </span>
                  </div>
                  
                  <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                        className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/50 hover:border-gray-200/70 transition-all"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'confirmed' ? 'bg-blue-500' : 'bg-yellow-500'
                          } ${item.status === 'confirmed' ? '' : 'animate-pulse'}`}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.action}</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">{item.hash}</div>
                          </div>
                        </div>
                        <div className="text-right">
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

                {/* Quick Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {[
                    { icon: Users, label: "Manage Voters", count: "1,247 active" },
                    { icon: BarChart3, label: "View Analytics", count: "Real-time data" },
                    { icon: Zap, label: "Quick Deploy", count: "New ballot" }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:border-indigo-200/70 hover:bg-white/80 transition-all text-left group"
                    >
                      <div className="w-10 h-10 bg-indigo-50/80 rounded-lg flex items-center justify-center group-hover:bg-indigo-100/80 transition-colors">
                        <action.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{action.label}</div>
                        <div className="text-sm text-gray-500">{action.count}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/40 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
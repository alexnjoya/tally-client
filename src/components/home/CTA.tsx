import React from 'react';
import { Shield, Users, Zap, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-6 sm:py-12 md:py-16 lg:py-20 xl:py-28 relative overflow-hidden">
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-carousel {
          animation: carousel 25s linear infinite;
        }

        @media (max-width: 640px) {
          .cta-logo-carousel { overflow-x: auto !important; }
          .cta-logo-carousel-inner { min-width: 500px; }
        }
      `}</style>
      
      {/* Subtle Background */}
      <div className="absolute inset-0">
        {/* Clean Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        
        {/* Very Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.6'%3E%3Cpath d='M0 0h1v1H0zM30 30h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-12 md:mb-16">
          {/* Accent Line */}
          <div className="w-8 sm:w-12 md:w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-3 sm:mb-4 md:mb-6"></div>
          
          {/* Main Headline - Responsive */}
          <h2 
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 md:mb-6 leading-tight px-1 sm:px-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Transform Your Organization's 
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Democratic Process
            </span>
          </h2>
          
          {/* Subheadline - Responsive */}
          <p 
            className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-6 md:mb-8 leading-relaxed px-1 sm:px-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join leading institutions worldwide who trust our platform for secure, 
            transparent, and efficient blockchain-based elections.
          </p>
        </div>

        {/* Trust Indicators - Responsive */}
        <div 
          className="flex flex-wrap justify-center gap-1 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-8 md:mb-12 px-1 sm:px-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {[
            { icon: Shield, text: "Enterprise Security" },
            { icon: Users, text: "500+ Organizations" },
            { icon: CheckCircle, text: "99.99% Uptime" },
            { icon: Zap, text: "Setup in Minutes" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-xs sm:text-sm font-medium shadow-sm"
            >
              <item.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-indigo-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Feature Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 md:gap-8">
          {[
            {
              icon: Shield,
              title: "Bank-Level Security",
              description: "Military-grade encryption and compliance with international security standards."
            },
            {
              icon: Users,
              title: "Scalable Platform",
              description: "Handle elections from 10 to 10 million voters with consistent performance."
            },
            {
              icon: Zap,
              title: "Instant Setup",
              description: "Get your first election running in under 15 minutes with our guided setup."
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                <card.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-indigo-600" />
              </div>
              <h3 
                className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2 md:mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {card.title}
              </h3>
              <p 
                className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider - Responsive */}
        <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-20 border-t border-gray-200 pt-4 sm:pt-8 md:pt-10 flex flex-col lg:flex-row justify-between items-center space-y-2 sm:space-y-6 lg:space-y-0">
          <p 
            className="text-gray-500 text-xs sm:text-sm md:text-base text-center lg:text-left lg:pr-5 lg:whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Trusted by organizations worldwide
          </p>
          
          {/* Client Logos Carousel - Responsive */}
          <div className="w-full lg:w-auto overflow-x-auto cta-logo-carousel relative">
            <div className="flex animate-carousel cta-logo-carousel-inner">
              {/* First set of logos */}
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 items-center min-w-max px-2 sm:px-4">
                {/* Stripe */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-6 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M59.64 14.28h-8.06v-1.4h8.05v1.4h.01zm-8.05-5.88h8.05v1.4h-8.05v-1.4zm-8.06 5.18c0 2.3 1.84 3.8 4.3 3.8 1.29 0 2.12-.23 2.9-.8v-2.04c-.6.56-1.39.88-2.4.88-1.54 0-2.62-.96-2.62-2.44 0-1.43 1.08-2.42 2.62-2.42.96 0 1.77.33 2.4.89V9.29c-.76-.58-1.6-.8-2.9-.8-2.46 0-4.3 1.53-4.3 3.81zm-3.7 3.44h2.15V5.26h-2.15v11.76zm-5.34-2.5c-.76 0-1.32-.32-1.7-.99l5.5-2.28c-.16-1.5-1.5-2.64-3.76-2.64-2.37 0-3.99 1.47-3.99 3.8 0 2.35 1.63 3.81 4.09 3.81.87 0 1.7-.15 2.35-.48.54-.28 1.05-.72 1.44-1.31l-1.14-1.01c-.66.85-1.55 1.1-2.79 1.1zm-1.4-4.76c.69 0 1.37.32 1.63.99l-3.89 1.62c-.13-1.15.89-2.61 2.26-2.61zm-6.32 7.26h2.16v-7.1h-2.16v7.1zm0-10.33h2.16v2.07h-2.16V5.43zm-8.79 4.48c0-1.47 1.01-2.35 2.42-2.35 1.36 0 2.27.85 2.27 2.18v5.69h2.15V9.6c0-2.33-1.54-3.8-3.72-3.8-.85 0-1.67.21-2.24.6-.52.36-.94.85-1.23 1.43l-.06-1.77h-1.74v10.7h2.15V9.91z" fill="#635BFF"/>
                  </svg>
                </div>

                {/* GitHub */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 45 16" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88z" fill="#24292f"/>
                  </svg>
                </div>

                {/* Slack */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M2.1 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM2.1 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM13.9 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM13.9 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM25.7 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM25.7 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM37.5 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0z" fill="#E01E5A"/>
                  </svg>
                </div>

                {/* Vercel */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg height="26" viewBox="0 0 74 64" className="h-3 sm:h-4 md:h-6 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="#000"/>
                  </svg>
                </div>

                {/* Shopify */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 109 31" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M26.354 18.469c-.784-.45-1.056-.832-1.056-1.344 0-.665.574-1.075 1.484-1.075.844 0 1.564.34 1.564.34l.58-1.798s-.535-.42-2.114-.42c-2.192 0-3.718 1.265-3.718 3.051 0 1.007.716 1.779 1.67 2.328.772.442 1.046.747 1.046 1.214 0 .478-.382.853-1.1.853-.844 0-1.634-.442-1.634-.442l-.622 1.809s.735.502 1.959.502c2.144 0 3.67-1.055 3.67-2.958.01-1.016-.736-1.748-1.73-2.06z" fill="#95BF47"/>
                  </svg>
                </div>
              </div>
              
              {/* Second set of logos (duplicate for continuous loop) */}
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 items-center min-w-max px-2 sm:px-4">
                {/* Stripe */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-6 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M59.64 14.28h-8.06v-1.4h8.05v1.4h.01zm-8.05-5.88h8.05v1.4h-8.05v-1.4zm-8.06 5.18c0 2.3 1.84 3.8 4.3 3.8 1.29 0 2.12-.23 2.9-.8v-2.04c-.6.56-1.39.88-2.4.88-1.54 0-2.62-.96-2.62-2.44 0-1.43 1.08-2.42 2.62-2.42.96 0 1.77.33 2.4.89V9.29c-.76-.58-1.6-.8-2.9-.8-2.46 0-4.3 1.53-4.3 3.81zm-3.7 3.44h2.15V5.26h-2.15v11.76zm-5.34-2.5c-.76 0-1.32-.32-1.7-.99l5.5-2.28c-.16-1.5-1.5-2.64-3.76-2.64-2.37 0-3.99 1.47-3.99 3.8 0 2.35 1.63 3.81 4.09 3.81.87 0 1.7-.15 2.35-.48.54-.28 1.05-.72 1.44-1.31l-1.14-1.01c-.66.85-1.55 1.1-2.79 1.1zm-1.4-4.76c.69 0 1.37.32 1.63.99l-3.89 1.62c-.13-1.15.89-2.61 2.26-2.61zm-6.32 7.26h2.16v-7.1h-2.16v7.1zm0-10.33h2.16v2.07h-2.16V5.43zm-8.79 4.48c0-1.47 1.01-2.35 2.42-2.35 1.36 0 2.27.85 2.27 2.18v5.69h2.15V9.6c0-2.33-1.54-3.8-3.72-3.8-.85 0-1.67.21-2.24.6-.52.36-.94.85-1.23 1.43l-.06-1.77h-1.74v10.7h2.15V9.91z" fill="#635BFF"/>
                  </svg>
                </div>

                {/* GitHub */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 45 16" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88z" fill="#24292f"/>
                  </svg>
                </div>

                {/* Slack */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M2.1 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM2.1 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM13.9 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM13.9 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM25.7 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM25.7 7.9a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0zM37.5 2.1a2.1 2.1 0 114.2 0 2.1 2.1 0 01-4.2 0z" fill="#E01E5A"/>
                  </svg>
                </div>

                {/* Vercel */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg height="26" viewBox="0 0 74 64" className="h-3 sm:h-4 md:h-6 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="#000"/>
                  </svg>
                </div>

                {/* Shopify */}
                <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                  <svg viewBox="0 0 109 31" xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 md:h-5 w-auto opacity-50 hover:opacity-70 transition-opacity">
                    <path d="M26.354 18.469c-.784-.45-1.056-.832-1.056-1.344 0-.665.574-1.075 1.484-1.075.844 0 1.564.34 1.564.34l.58-1.798s-.535-.42-2.114-.42c-2.192 0-3.718 1.265-3.718 3.051 0 1.007.716 1.779 1.67 2.328.772.442 1.046.747 1.046 1.214 0 .478-.382.853-1.1.853-.844 0-1.634-.442-1.634-.442l-.622 1.809s.735.502 1.959.502c2.144 0 3.67-1.055 3.67-2.958.01-1.016-.736-1.748-1.73-2.06z" fill="#95BF47"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
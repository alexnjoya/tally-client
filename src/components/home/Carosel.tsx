import React from 'react';

const CompanyCarousel = () => {
  // Real startup companies with their actual logos
  const companies = [
    { name: "Notion", logo: "https://logo.clearbit.com/notion.so" },
    { name: "Figma", logo: "https://logo.clearbit.com/figma.com" },
    { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
    { name: "Discord", logo: "https://logo.clearbit.com/discord.com" },
    { name: "Canva", logo: "https://logo.clearbit.com/canva.com" },
    { name: "Airtable", logo: "https://logo.clearbit.com/airtable.com" },
    { name: "Vercel", logo: "https://logo.clearbit.com/vercel.com" },
    { name: "Linear", logo: "https://logo.clearbit.com/linear.app" },
    { name: "Framer", logo: "https://logo.clearbit.com/framer.com" },
    { name: "Loom", logo: "https://logo.clearbit.com/loom.com" },
    { name: "Typeform", logo: "https://logo.clearbit.com/typeform.com" },
    { name: "Miro", logo: "https://logo.clearbit.com/miro.com" },
    { name: "Calendly", logo: "https://logo.clearbit.com/calendly.com" },
    { name: "Webflow", logo: "https://logo.clearbit.com/webflow.com" },
    { name: "Monday", logo: "https://logo.clearbit.com/monday.com" },
    { name: "Pitch", logo: "https://logo.clearbit.com/pitch.com" }
  ];

  // Duplicate the array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Trusted by Leading Startups
          </div>
         
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powering the next generation of companies building the future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Moving Container */}
          <div className="flex items-center animate-scroll space-x-12">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-32 h-16 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-70">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-8 w-auto max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span 
                    className="hidden text-lg font-semibold text-slate-700 group-hover:text-slate-900"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>

      {/* Custom CSS for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CompanyCarousel;
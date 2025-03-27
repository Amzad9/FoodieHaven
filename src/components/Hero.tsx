
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-estate-900">
        <div 
          className="absolute inset-0 transition-opacity duration-[1.5s] ease-out bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            opacity: isLoaded ? 0.7 : 0,
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-estate-900/80 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col justify-center h-full">
        <div className="max-w-2xl space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
            Premium Properties
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight">
            Discover Your Dream <br />
            <span className="text-gradient bg-gradient-to-r from-white to-estate-300">Luxury Residence</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg">
            Experience unparalleled luxury in our carefully curated selection of premium properties, designed to elevate your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="px-8 py-3 bg-white text-estate-900 rounded-md hover:bg-estate-100 transition-colors text-sm font-medium flex items-center justify-center">
              Explore Properties
              <ChevronRight size={16} className="ml-1" />
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors text-sm font-medium">
              Book a Viewing
            </button>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="hidden lg:block absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="glass-panel rounded-xl grid grid-cols-4 divide-x divide-white/10">
              <div className="p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-estate-600 text-sm font-medium">Properties</p>
                <p className="text-3xl font-display font-semibold text-estate-900 mt-1">200+</p>
              </div>
              <div className="p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-estate-600 text-sm font-medium">Happy Clients</p>
                <p className="text-3xl font-display font-semibold text-estate-900 mt-1">5k+</p>
              </div>
              <div className="p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                <p className="text-estate-600 text-sm font-medium">Cities</p>
                <p className="text-3xl font-display font-semibold text-estate-900 mt-1">15+</p>
              </div>
              <div className="p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <p className="text-estate-600 text-sm font-medium">Years Experience</p>
                <p className="text-3xl font-display font-semibold text-estate-900 mt-1">25+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

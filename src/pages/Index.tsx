
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Apply intersection observer to fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    fadeInSections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      fadeInSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <h2 className="text-sm font-medium text-estate-600 uppercase tracking-wider mb-2">
                About Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-estate-900 mb-6">
                Redefining Luxury Real Estate Since 1998
              </h3>
              <p className="text-estate-600 mb-6">
                For over two decades, EleganceEstate has been the premier destination for discerning clients seeking exceptional properties. Our team of experienced professionals combines market expertise with personalized service to deliver an unparalleled real estate experience.
              </p>
              <p className="text-estate-600 mb-6">
                With a carefully curated portfolio of the most prestigious properties in sought-after locations worldwide, we cater to clients with refined tastes and exacting standards.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h4 className="text-2xl font-display font-semibold text-estate-900 mb-2">25+</h4>
                  <p className="text-estate-600">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-semibold text-estate-900 mb-2">200+</h4>
                  <p className="text-estate-600">Premium Properties</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-semibold text-estate-900 mb-2">15+</h4>
                  <p className="text-estate-600">Cities Worldwide</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-semibold text-estate-900 mb-2">5k+</h4>
                  <p className="text-estate-600">Satisfied Clients</p>
                </div>
              </div>
            </div>
            
            <div className="relative fade-in-section">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury Home Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-estate-100 max-w-xs">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="CEO"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-estate-900">Sophia Anderson</h4>
                    <p className="text-estate-600 text-sm">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-estate-700 italic text-sm">
                  "Our mission is to connect extraordinary properties with extraordinary lives, creating lasting value for our clients."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-estate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
            <h2 className="text-sm font-medium text-estate-600 uppercase tracking-wider mb-2">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-estate-900 mb-6">
              Comprehensive Real Estate Solutions
            </h3>
            <p className="text-estate-600">
              From property acquisition to portfolio management, we offer a complete range of services tailored to meet the needs of our distinguished clientele.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Luxury Property Sales
              </h4>
              <p className="text-estate-600">
                Marketing and selling premium properties with strategic pricing, professional staging, and targeted exposure to qualified buyers.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Buyer Representation
              </h4>
              <p className="text-estate-600">
                Personalized property search, exclusive off-market opportunities, due diligence, and negotiation to secure your dream home.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Property Management
              </h4>
              <p className="text-estate-600">
                Comprehensive management services for investment properties, including tenant screening, maintenance, and financial reporting.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M13 5v2"></path>
                  <path d="M13 17v2"></path>
                  <path d="M13 11v2"></path>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Investment Advisory
              </h4>
              <p className="text-estate-600">
                Expert guidance on real estate investment strategies, market analysis, and portfolio diversification for maximum returns.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" x2="8" y1="16" y2="16"></line>
                  <line x1="16" x2="16" y1="16" y2="16"></line>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Exclusive Access
              </h4>
              <p className="text-estate-600">
                Private showings of off-market properties, VIP events, and exclusive networking opportunities with like-minded individuals.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 rounded-full bg-estate-100 flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-estate-700"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-3">
                Concierge Services
              </h4>
              <p className="text-estate-600">
                From home renovations to relocation assistance, our concierge team provides personalized support for all your real estate needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

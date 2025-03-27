
import React, { useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-medium text-estate-600 uppercase tracking-wider mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-estate-900 mb-6">
              Schedule a Private Viewing
            </h3>
            <p className="text-estate-600">
              Experience our properties firsthand. Our team of luxury real estate specialists is ready to assist you in finding your dream home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-estate-100">
              <h4 className="text-xl font-display font-semibold text-estate-900 mb-6">
                Send Us a Message
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-estate-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-estate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-estate-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-estate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-estate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-estate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-estate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-estate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-estate-900 text-white rounded-md hover:bg-estate-800 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="p-8 bg-estate-50 rounded-2xl mb-8">
                <h4 className="text-xl font-display font-semibold text-estate-900 mb-6">
                  Contact Information
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-estate-100 flex items-center justify-center mr-4">
                      <MapPin className="text-estate-700" size={20} />
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-estate-900 mb-1">
                        Our Location
                      </h5>
                      <p className="text-estate-600">
                        1234 Luxury Lane, Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-estate-100 flex items-center justify-center mr-4">
                      <Phone className="text-estate-700" size={20} />
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-estate-900 mb-1">
                        Phone Number
                      </h5>
                      <p className="text-estate-600">
                        (310) 555-1234
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-estate-100 flex items-center justify-center mr-4">
                      <Mail className="text-estate-700" size={20} />
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-estate-900 mb-1">
                        Email Address
                      </h5>
                      <p className="text-estate-600">
                        info@eleganceestate.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-estate-100 flex items-center justify-center mr-4">
                      <Clock className="text-estate-700" size={20} />
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-estate-900 mb-1">
                        Working Hours
                      </h5>
                      <p className="text-estate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-estate-900 text-white rounded-2xl">
                <h4 className="text-xl font-display font-semibold mb-4">
                  Private Showings
                </h4>
                <p className="mb-6">
                  For exclusive properties, we offer private viewings by appointment only. Contact our luxury specialists.
                </p>
                <button className="px-6 py-2 bg-white text-estate-900 rounded-md hover:bg-estate-100 transition-colors">
                  Request Private Showing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

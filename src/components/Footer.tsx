
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-display font-semibold tracking-tight text-white inline-block mb-6">
              Elegance<span className="text-estate-400">Estate</span>
            </a>
            <p className="text-estate-400 mb-6 max-w-xs">
              Providing exceptional luxury real estate services for over 25 years, with a portfolio of the most prestigious properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-estate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#properties" className="text-estate-400 hover:text-white transition-colors">Properties</a>
              </li>
              <li>
                <a href="#about" className="text-estate-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-estate-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-estate-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="text-lg font-medium mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Luxury Villas</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Penthouse Apartments</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Beachfront Homes</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Country Estates</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Urban Lofts</a>
              </li>
              <li>
                <a href="#" className="text-estate-400 hover:text-white transition-colors">Investment Properties</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-estate-400 mb-4">
              Subscribe to our newsletter to receive updates on new properties and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-estate-800 border border-estate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-estate-600 text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-estate-900 rounded-r-md hover:bg-estate-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-estate-800 mt-12 pt-8 text-center text-estate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EleganceEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
